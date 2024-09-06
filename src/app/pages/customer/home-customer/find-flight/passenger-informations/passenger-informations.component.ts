import { Component, inject } from '@angular/core';
import { FlightHeaderComponent } from '../../../../../shared/flight-header/flight-header.component';
import { FlightStepsComponent } from '../../../../../shared/flight-steps/flight-steps.component';
import { flightSignal, flightUserSignal } from '../../../../../core/data-values';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import {
  AuthService,
  ErrorService,
  UserService,
} from '../../../../../services';
import { NzFormModule, NzFormTooltipIcon } from 'ng-zorro-antd/form';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzOptionComponent } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Auth } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-passenger-informations',
  standalone: true,
  imports: [
    FlightHeaderComponent,
    FlightStepsComponent,
    NzEmptyModule,
    RouterLink,
    NzButtonModule,
    NzCardModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzOptionComponent,
    NzIconModule,
    NzLayoutModule,
    NzSelectModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTypographyModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './passenger-informations.component.html',
  styleUrl: './passenger-informations.component.less',
})
export class PassengerInformationsComponent {
  title: string;
  subtitle: string;
  price: number;

  userService = inject(UserService);
  authService = inject(AuthService);
  errorService = inject(ErrorService);
  fb = inject(NonNullableFormBuilder);
  auth = inject(Auth);
  private router = inject(Router);
  cUser: any | null;

  constructor() {
    this.cUser = this.auth.currentUser?.uid;
    const timestamp = flightSignal()?.dateFirst;
    const date = new Date(timestamp!);
    const formattedDate1 = date.toLocaleDateString('en-GB');

    this.title = `${flightSignal()?.fromCity} - ${flightSignal()?.toCity}`;
    this.subtitle = `${formattedDate1} | ${
      flightSignal()?.adultNumber
    } Yetişkin`;

    this.price = flightSignal()?.totalPrice!;

    this.validateForm = this.fb.group({
      firstname: [this.auth.currentUser?.uid ? this.authService.userSignal()?.firstName! : '', [Validators.required]],
      lastname: [this.auth.currentUser?.uid ? this.authService.userSignal()?.lastName! : '', [Validators.required]],
      gender: 'Erkek' as 'Erkek' | 'Kadın',
      email: [this.auth.currentUser?.uid ? this.authService.userSignal()?.email! : '', [Validators.email, Validators.required]],
      phoneNumberPrefix: '+90' as '+90' | '+87',
      phoneNumber: [this.auth.currentUser?.uid ? this.authService.userSignal()?.phone! : '', [Validators.required]],
      birth: [date, [Validators.required]],
      nationality: [this.auth.currentUser?.uid ? this.authService.userSignal()?.nationality! : '', [Validators.required]],
      tc: [this.auth.currentUser?.uid ? this.authService.userSignal()?.TCID! : '', [Validators.maxLength(11), Validators.minLength(11)]],
      agree: [false, [Validators.requiredTrue]],
    });
  }
  
  validateForm: FormGroup<{
    firstname: FormControl<string>;
    lastname: FormControl<string>;
    gender: FormControl<'Erkek' | 'Kadın'>;
    email: FormControl<string>;
    phoneNumberPrefix: FormControl<'+90' | '+87'>;
    phoneNumber: FormControl<string>;
    birth: FormControl<Date>;
    nationality: FormControl<string>;
    tc: FormControl<string>;
    agree: FormControl<boolean>;
  }>;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      if(this.auth.currentUser) {
        const body = {
          id: this.auth.currentUser.uid,
          role: "user",
          firstName: this.validateForm.controls['firstname'].value!, 
          lastName: this.validateForm.controls['lastname'].value!,  
          gender: this.validateForm.controls['gender'].value!, 
          phone: this.validateForm.controls['phoneNumber'].value!, 
          birth: this.validateForm.controls['birth'].value!, 
          nationality: this.validateForm.controls['nationality'].value!,  
          TCID: this.validateForm.controls['tc'].value!, 
          created_at: Date.now(),
          active: true,
          email: this.validateForm.controls['email'].value!, 
          pass: "anonymoususer", 
          airScore: 0
        };
        flightUserSignal.set(body);
        this.resetForm();
        this.router.navigateByUrl('/find-flight/flight-seat');
      } else {
        const body = {
          id: flightSignal()?.id,
          role: "user",
          firstName: this.validateForm.controls['firstname'].value!, 
          lastName: this.validateForm.controls['lastname'].value!,  
          gender: this.validateForm.controls['gender'].value!, 
          phone: this.validateForm.controls['phoneNumber'].value!, 
          birth: this.validateForm.controls['birth'].value!, 
          nationality: this.validateForm.controls['nationality'].value!,  
          TCID: this.validateForm.controls['tc'].value!, 
          created_at: Date.now(),
          active: true,
          email: this.validateForm.controls['email'].value!, 
          pass: "anonymoususer", 
          airScore: 0
        };
        flightUserSignal.set(body);
        this.resetForm();
        this.router.navigateByUrl('/find-flight/flight-seat');
      }
      // console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.errorService.errorHandler(5);
    }
  }

  resetForm() {
    this.validateForm.reset();
  }
}

/** async submit() {
    const body = {
      id: flightSignal()?.id,
      role: "user",
      firstName: "", /
      lastName: "", /
      gender: "", /
      phone: "", /
      birth: undefined, /
      nationality: "", /
      TCID: "", /
      created_at: Date.now(),
      active: true,
      email: this.form.controls['email'].value!, /
      pass: "anonymoususer", 
      airScore: 0
    };

    await this.userService
    .addDataWithCustomDocId(body, flightSignal()?.id!)
    .then(() => {
      this.authService.userSignal.set(body);
    }).catch(() => {
      this.errorService.errorHandler(5);
    });

  console.log('FB register işlemi yapıldı');
  this.resetForm();
  } */
