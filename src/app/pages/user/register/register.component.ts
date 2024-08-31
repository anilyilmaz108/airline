import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { appName } from '../../../core/constants';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ErrorService, SuccessService, UserService } from '../../../services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    RegisterComponent,
    NzTypographyModule,
    LoginComponent,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less',
  host: { ngSkipHydration: 'true' },
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private userService = inject(UserService);
  successService = inject(SuccessService);
  errorService = inject(ErrorService);
  private router = inject(Router);
  error = '';
  appName = appName;

  ngOnInit(): void {
  }

  confirmValidator: ValidatorFn = (control: AbstractControl) => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.form.controls.pass.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  form = this.formBuilder.group({
    email: [environment.testEmail, [Validators.required, Validators.email]],
    pass: [
      environment.testPass,
      [Validators.required, Validators.minLength(6)],
    ],
    rePass: [
      environment.production === true ? environment.testPass : '',
      [
        environment.production === true
          ? Validators.required
          : this.confirmValidator,
      ],
    ],
    confirmPrivacy: ['', [Validators.requiredTrue]],
  });

  async submitForm() {
    await this.authService.fbRegister(
      this.form.controls['email'].value!,
      this.form.controls['pass'].value!
    )
    const userPath = this.authService.userSignal();
    console.log(userPath);
    const body = {
      id: userPath?.id,
      role: "user",
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      birth: undefined,
      nationality: "",
      TCID: "",
      created_at: Date.now(),
      active: true,
      email: this.form.controls['email'].value!,
      pass: this.form.controls['pass'].value!,
    };
    
    await this.userService
      .addDataWithCustomDocId(body, userPath!.id!)
      .then(() => {
        this.successService.successHandler(201);
      }).catch(() => {
        this.errorService.errorHandler(1);
      });

    console.log('FB register işlemi yapıldı');
    this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }

}


