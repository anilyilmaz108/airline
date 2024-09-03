import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FlightStepsComponent } from '../../../../../shared/flight-steps/flight-steps.component';
import { FlightHeaderComponent } from '../../../../../shared/flight-header/flight-header.component';
import { flightSignal } from '../../../../../core/data-values';
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
    CreditCardNumberPipe
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

  submitPayment() {
    // Ödeme işlemi burada gerçekleştirilecek
    console.log(
      'Ödeme işlemi gerçekleşti',
      this.form.controls['cardHolder'].value
    );
    // this.router.navigateByUrl('/find-flight/success-flight');
  }
}
