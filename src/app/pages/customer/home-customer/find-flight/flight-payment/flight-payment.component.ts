import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FlightStepsComponent } from '../../../../../shared/flight-steps/flight-steps.component';
import { FlightHeaderComponent } from '../../../../../shared/flight-header/flight-header.component';
import {
  flightSignal,
  flightUserSignal,
} from '../../../../../core/data-values';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CreditCardNumberPipe } from '../../../../../helpers/credit-card-number.pipe';
import { Router } from '@angular/router';
import {
  AuthService,
  ErrorService,
  FlightService,
  UserService,
} from '../../../../../services';
import { UserModel } from '../../../../../models/user';
import { generateId } from '../../../../../helpers/generate-id';
import { FlightModel } from '../../../../../models/flight';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-flight-payment',
  standalone: true,
  imports: [
    CommonModule,
    FlightStepsComponent,
    FlightHeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    CreditCardNumberPipe,
  ],
  templateUrl: './flight-payment.component.html',
  styleUrl: './flight-payment.component.less',
})
export class FlightPaymentComponent {
  //https://flowbite.com/blocks/e-commerce/payment-forms/
  title: string;
  subtitle: string;
  price: number;

  form!: FormGroup;
  private formBuilder = inject(NonNullableFormBuilder);
  private router = inject(Router);
  userService = inject(UserService);
  flightService = inject(FlightService);
  authService = inject(AuthService);
  errorService = inject(ErrorService);
  auth = inject(Auth);

  buildForm() {
    this.form = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.buildForm();
  }

  constructor() {
    const timestamp = flightSignal()?.dateFirst;
    const date = new Date(timestamp!);
    const formattedDate1 = date.toLocaleDateString('en-GB');

    this.title = `${flightSignal()?.fromCity} - ${flightSignal()?.toCity}`;
    this.subtitle = `${formattedDate1} | ${
      flightSignal()?.adultNumber
    } Yetişkin`;

    this.price = flightSignal()?.totalPrice!;
  }

  cardNumber: string = '';
  cardHolder: string = '';
  expirationMonth: string = '';
  expirationYear: string = '';
  cvv: string = '';
  isFlipped: boolean = false;

  flipCard(isFlipped: boolean) {
    this.isFlipped = isFlipped;
  }

  async submitPayment() {
    // Bilet aldıktan sonra Check-in ve Uçuş sorgulama için gerekli
    if(this.auth.currentUser?.uid === undefined || this.auth.currentUser?.uid === null) {
      await this.authService.fbRegister(
        flightUserSignal()?.email!,
        flightUserSignal()?.pass!
      );
      const userData = {
        id: flightUserSignal()?.id,
        role: 'user',
        firstName: flightUserSignal()?.firstName,
        lastName: flightUserSignal()?.lastName,
        gender: flightUserSignal()?.gender,
        phone: flightUserSignal()?.phone,
        birth: flightUserSignal()?.birth,
        nationality: flightUserSignal()?.nationality,
        TCID: flightUserSignal()?.TCID,
        created_at: Date.now(),
        active: true,
        email: flightUserSignal()?.email,
        pass: flightUserSignal()?.pass,
        airScore:
          flightUserSignal()?.airScore! + flightSignal()?.earningAirScore!,
      };
  
      await this.userService
        .addDataWithCustomDocId(userData, flightUserSignal()?.id!)
        .then(() => {
          console.log('success first operation');
        })
        .catch(() => {
          this.errorService.errorHandler(6);
        });
    }
   



    const flightData: FlightModel = {
      id: flightSignal()?.id,
      userId: flightUserSignal()?.id,
      PNRNO: generateId.generateUniqueId(6).toUpperCase(),
      earningAirScore: flightSignal()?.earningAirScore,
      fromCity: flightSignal()?.fromCity,
      toCity: flightSignal()?.toCity,
      dateFirst: flightSignal()?.dateFirst,
      dateLast: flightSignal()?.dateLast,
      hourFirst: flightSignal()?.hourFirst,
      hourLast: flightSignal()?.hourLast,
      priceFirst: flightSignal()?.priceFirst,
      priceLast: flightSignal()?.priceLast,
      adultNumber: flightSignal()?.adultNumber,
      childNumber: flightSignal()?.childNumber,
      babyNumber: flightSignal()?.babyNumber,
      flightTimeFirst: flightSignal()?.flightTimeFirst,
      flightTimeLast: flightSignal()?.flightTimeLast,
      packageFirst: flightSignal()?.packageFirst,
      packageLast: flightSignal()?.packageLast,
      flexFirst: flightSignal()?.flexLast,
      flexLast: flightSignal()?.flexLast,
      seatFirst: flightSignal()?.seatFirst,
      seatLast: flightSignal()?.seatLast,
      totalPrice: flightSignal()?.totalPrice,
      operationDate: Date.now(),
    };
    flightSignal.set(flightData);

    await this.flightService
      .addDataWithCustomDocId(flightData, flightSignal()?.id!)
      .then(() => {
        console.log('success second operation');
      })
      .catch(() => {
        this.errorService.errorHandler(6);
      });

    // Ödeme işlemi burada gerçekleştirilecek
    console.log('Ödeme işlemi gerçekleşti');
    this.router.navigateByUrl('/find-flight/flight-done');
  }
}
