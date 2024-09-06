import { Component, inject } from '@angular/core';
import {
  flightSignal,
  flightUserSignal,
} from '../../../../../core/data-values';
import { FlightHeaderComponent } from '../../../../../shared/flight-header/flight-header.component';
import { FlightStepsComponent } from '../../../../../shared/flight-steps/flight-steps.component';
import { CommonModule } from '@angular/common';
import { SeatIconComponent } from '../../../../../shared/seat-icon/seat-icon.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Router } from '@angular/router';
import { ErrorService } from '../../../../../services/error.service';
import { FlightModel } from '../../../../../models/flight';
import { generateId } from '../../../../../helpers/generate-id';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-flight-seat',
  standalone: true,
  imports: [
    FlightHeaderComponent,
    FlightStepsComponent,
    SeatIconComponent,
    NzListModule,
    NzCardModule,
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule,
    TranslateModule
  ],
  templateUrl: './flight-seat.component.html',
  styleUrl: './flight-seat.component.less',
  // host: { ngSkipHydration: 'true' },
})
export class FlightSeatComponent {
  title: string;
  subtitle: string;
  price: number;
  tempPrice!: number;
  seatPrice = 0;
  seatValue = "";

  errorService = inject(ErrorService);
  private router = inject(Router);
  flightSignalVal = flightSignal();
  
  ngOnInit(): void {
    // console.log('==>', flightSignal());
    // console.log('=>', flightUserSignal());
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
    this.tempPrice = this.price;
  }

  extraLargeSeat = false;
  frontSeat = false;
  windowSeat = false;
  sideSeat = false;
  otherSeat = false;

  extraSeatSelection() {
    this.extraLargeSeat = true;
    this.frontSeat = false;
    this.windowSeat = false;
    this.sideSeat = false;
    this.otherSeat = false;
    this.selectedCardId = 1;
    this.seatValue = `1 - ${generateId.generateRandomSeat()}`;
    this.seatPrice = 499.99;
    const newPrice = this.tempPrice + this.seatPrice;
    const body: FlightModel = {
      "id": flightSignal()?.id,
      "userId": flightUserSignal()?.id,
      "PNRNO": generateId.generateUniqueId(6),
      "earningAirScore": 1000, 
      "fromCity": flightSignal()?.fromCity,
      "toCity": flightSignal()?.toCity,
      "dateFirst": flightSignal()?.dateFirst,
      "dateLast": flightSignal()?.dateLast,
      "hourFirst": flightSignal()?.hourFirst,
      "hourLast": flightSignal()?.hourLast,
      "priceFirst": flightSignal()?.priceFirst,
      "priceLast": flightSignal()?.priceLast, 
      "adultNumber": flightSignal()?.adultNumber,
      "childNumber": flightSignal()?.childNumber,
      "babyNumber": flightSignal()?.babyNumber,
      "flightTimeFirst": flightSignal()?.flightTimeFirst,
      "flightTimeLast": flightSignal()?.flightTimeLast,
      "packageFirst": flightSignal()?.packageFirst,
      "packageLast": flightSignal()?.packageLast,
      "flexFirst": false,
      "flexLast": false,
      "seatFirst": this.seatValue,
      "seatLast": "",
      "totalPrice": parseFloat(newPrice.toFixed(2)),
      "operationDate": Date.now()
    }
    flightSignal.set(body);
    this.price = flightSignal()?.totalPrice!;
  }
  frontSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = true;
    this.windowSeat = false;
    this.sideSeat = false;
    this.otherSeat = false;
    this.selectedCardId = 2;
    this.seatValue = `${generateId.getRandomNumber(2,6)} - ${generateId.generateRandomSeat()}`;
    this.seatPrice = 499.99;
    const newPrice = this.tempPrice + this.seatPrice;
    const body: FlightModel = {
      "id": flightSignal()?.id,
      "userId": flightUserSignal()?.id,
      "PNRNO": generateId.generateUniqueId(6),
      "earningAirScore": 1000, 
      "fromCity": flightSignal()?.fromCity,
      "toCity": flightSignal()?.toCity,
      "dateFirst": flightSignal()?.dateFirst,
      "dateLast": flightSignal()?.dateLast,
      "hourFirst": flightSignal()?.hourFirst,
      "hourLast": flightSignal()?.hourLast,
      "priceFirst": flightSignal()?.priceFirst,
      "priceLast": flightSignal()?.priceLast, 
      "adultNumber": flightSignal()?.adultNumber,
      "childNumber": flightSignal()?.childNumber,
      "babyNumber": flightSignal()?.babyNumber,
      "flightTimeFirst": flightSignal()?.flightTimeFirst,
      "flightTimeLast": flightSignal()?.flightTimeLast,
      "packageFirst": flightSignal()?.packageFirst,
      "packageLast": flightSignal()?.packageLast,
      "flexFirst": false,
      "flexLast": false,
      "seatFirst": this.seatValue,
      "seatLast": "",
      "totalPrice": parseFloat(newPrice.toFixed(2)),
      "operationDate": Date.now()
    }
    flightSignal.set(body);
    this.price = flightSignal()?.totalPrice!;
  }
  windowSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = false;
    this.windowSeat = true;
    this.sideSeat = false;
    this.otherSeat = false;
    this.selectedCardId = 3;
    this.seatValue = `${generateId.getRandomNumber(7,15)} - ${generateId.generateWindowSeat()}`;
    this.seatPrice = 499.99;
    const newPrice = this.tempPrice + this.seatPrice;
    const body: FlightModel = {
      "id": flightSignal()?.id,
      "userId": flightUserSignal()?.id,
      "PNRNO": generateId.generateUniqueId(6),
      "earningAirScore": 1000, 
      "fromCity": flightSignal()?.fromCity,
      "toCity": flightSignal()?.toCity,
      "dateFirst": flightSignal()?.dateFirst,
      "dateLast": flightSignal()?.dateLast,
      "hourFirst": flightSignal()?.hourFirst,
      "hourLast": flightSignal()?.hourLast,
      "priceFirst": flightSignal()?.priceFirst,
      "priceLast": flightSignal()?.priceLast, 
      "adultNumber": flightSignal()?.adultNumber,
      "childNumber": flightSignal()?.childNumber,
      "babyNumber": flightSignal()?.babyNumber,
      "flightTimeFirst": flightSignal()?.flightTimeFirst,
      "flightTimeLast": flightSignal()?.flightTimeLast,
      "packageFirst": flightSignal()?.packageFirst,
      "packageLast": flightSignal()?.packageLast,
      "flexFirst": false,
      "flexLast": false,
      "seatFirst": this.seatValue,
      "seatLast": "",
      "totalPrice": parseFloat(newPrice.toFixed(2)),
      "operationDate": Date.now()
    }
    flightSignal.set(body);
    this.price = flightSignal()?.totalPrice!;
  }
  sideSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = false;
    this.windowSeat = false;
    this.sideSeat = true;
    this.otherSeat = false;
    this.selectedCardId = 4;
    this.seatValue = `${generateId.getRandomNumber(7,15)} - ${generateId.generateSideSeat()}`;
    this.seatPrice = 499.99;
    const newPrice = this.tempPrice + this.seatPrice;
    const body: FlightModel = {
      "id": flightSignal()?.id,
      "userId": flightUserSignal()?.id,
      "PNRNO": generateId.generateUniqueId(6),
      "earningAirScore": 1000, 
      "fromCity": flightSignal()?.fromCity,
      "toCity": flightSignal()?.toCity,
      "dateFirst": flightSignal()?.dateFirst,
      "dateLast": flightSignal()?.dateLast,
      "hourFirst": flightSignal()?.hourFirst,
      "hourLast": flightSignal()?.hourLast,
      "priceFirst": flightSignal()?.priceFirst,
      "priceLast": flightSignal()?.priceLast, 
      "adultNumber": flightSignal()?.adultNumber,
      "childNumber": flightSignal()?.childNumber,
      "babyNumber": flightSignal()?.babyNumber,
      "flightTimeFirst": flightSignal()?.flightTimeFirst,
      "flightTimeLast": flightSignal()?.flightTimeLast,
      "packageFirst": flightSignal()?.packageFirst,
      "packageLast": flightSignal()?.packageLast,
      "flexFirst": false,
      "flexLast": false,
      "seatFirst": this.seatValue,
      "seatLast": "",
      "totalPrice": parseFloat(newPrice.toFixed(2)),
      "operationDate": Date.now()
    }
    flightSignal.set(body);
    this.price = flightSignal()?.totalPrice!;
  }
  otherSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = false;
    this.windowSeat = false;
    this.sideSeat = false;
    this.otherSeat = true;
    this.selectedCardId = 5;
    this.seatValue = `${generateId.getRandomNumber(7,15)} - ${generateId.generateRandomSeat()}`;
    this.seatPrice = 499.99;
    const newPrice = this.tempPrice + this.seatPrice;
    const body: FlightModel = {
      "id": flightSignal()?.id,
      "userId": flightUserSignal()?.id,
      "PNRNO": generateId.generateUniqueId(6),
      "earningAirScore": 1000, 
      "fromCity": flightSignal()?.fromCity,
      "toCity": flightSignal()?.toCity,
      "dateFirst": flightSignal()?.dateFirst,
      "dateLast": flightSignal()?.dateLast,
      "hourFirst": flightSignal()?.hourFirst,
      "hourLast": flightSignal()?.hourLast,
      "priceFirst": flightSignal()?.priceFirst,
      "priceLast": flightSignal()?.priceLast, 
      "adultNumber": flightSignal()?.adultNumber,
      "childNumber": flightSignal()?.childNumber,
      "babyNumber": flightSignal()?.babyNumber,
      "flightTimeFirst": flightSignal()?.flightTimeFirst,
      "flightTimeLast": flightSignal()?.flightTimeLast,
      "packageFirst": flightSignal()?.packageFirst,
      "packageLast": flightSignal()?.packageLast,
      "flexFirst": false,
      "flexLast": false,
      "seatFirst": this.seatValue,
      "seatLast": "",
      "totalPrice": parseFloat(newPrice.toFixed(2)),
      "operationDate": Date.now()
    }
    flightSignal.set(body);
    this.price = flightSignal()?.totalPrice!;
  }
  randomSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = false;
    this.windowSeat = false;
    this.sideSeat = false;
    this.otherSeat = false;
    this.selectedCardId = 6;
    this.seatValue = `${generateId.getRandomNumber(1,15)} - ${generateId.generateRandomSeat()}`;
    this.seatPrice = 0;
    const newPrice = this.tempPrice + this.seatPrice;
    const body: FlightModel = {
      "id": flightSignal()?.id,
      "userId": flightUserSignal()?.id,
      "PNRNO": generateId.generateUniqueId(6),
      "earningAirScore": 1000, 
      "fromCity": flightSignal()?.fromCity,
      "toCity": flightSignal()?.toCity,
      "dateFirst": flightSignal()?.dateFirst,
      "dateLast": flightSignal()?.dateLast,
      "hourFirst": flightSignal()?.hourFirst,
      "hourLast": flightSignal()?.hourLast,
      "priceFirst": flightSignal()?.priceFirst,
      "priceLast": flightSignal()?.priceLast, 
      "adultNumber": flightSignal()?.adultNumber,
      "childNumber": flightSignal()?.childNumber,
      "babyNumber": flightSignal()?.babyNumber,
      "flightTimeFirst": flightSignal()?.flightTimeFirst,
      "flightTimeLast": flightSignal()?.flightTimeLast,
      "packageFirst": flightSignal()?.packageFirst,
      "packageLast": flightSignal()?.packageLast,
      "flexFirst": false,
      "flexLast": false,
      "seatFirst": this.seatValue,
      "seatLast": "",
      "totalPrice": parseFloat(newPrice.toFixed(2)),
      "operationDate": Date.now()
    }
    flightSignal.set(body);
    this.price = flightSignal()?.totalPrice!;
  }

  findFlight() {
    console.log('Uçuş aranıyor..');
  }

  data = [
    {
      id: 1,
      title: 'SEAT_SELECTION.SEATS.EXTRA_LEGROOM.TITLE',
      subtitle: 'SEAT_SELECTION.SEATS.EXTRA_LEGROOM.SUBTITLE',
      domestic_price: 'SEAT_SELECTION.SEATS.EXTRA_LEGROOM.DOMESTIC_PRICE',
      abroad_price: 'SEAT_SELECTION.SEATS.EXTRA_LEGROOM.ABROAD_PRICE'
    },
    {
      id: 2,
      title: 'SEAT_SELECTION.SEATS.FRONT_SEATS.TITLE',
      subtitle: 'SEAT_SELECTION.SEATS.FRONT_SEATS.SUBTITLE',
      domestic_price: 'SEAT_SELECTION.SEATS.FRONT_SEATS.DOMESTIC_PRICE',
      abroad_price: 'SEAT_SELECTION.SEATS.FRONT_SEATS.ABROAD_PRICE'
    },
    {
      id: 3,
      title: 'SEAT_SELECTION.SEATS.WINDOW_SEATS.TITLE',
      subtitle: 'SEAT_SELECTION.SEATS.WINDOW_SEATS.SUBTITLE',
      domestic_price: 'SEAT_SELECTION.SEATS.WINDOW_SEATS.DOMESTIC_PRICE',
      abroad_price: 'SEAT_SELECTION.SEATS.WINDOW_SEATS.ABROAD_PRICE'
    },
    {
      id: 4,
      title: 'SEAT_SELECTION.SEATS.AISLE_SEATS.TITLE',
      subtitle: 'SEAT_SELECTION.SEATS.AISLE_SEATS.SUBTITLE',
      domestic_price: 'SEAT_SELECTION.SEATS.AISLE_SEATS.DOMESTIC_PRICE',
      abroad_price: 'SEAT_SELECTION.SEATS.AISLE_SEATS.ABROAD_PRICE'
    },
    {
      id: 5,
      title: 'SEAT_SELECTION.SEATS.OTHER_SEATS.TITLE',
      subtitle: 'SEAT_SELECTION.SEATS.OTHER_SEATS.SUBTITLE',
      domestic_price: 'SEAT_SELECTION.SEATS.OTHER_SEATS.DOMESTIC_PRICE',
      abroad_price: 'SEAT_SELECTION.SEATS.OTHER_SEATS.ABROAD_PRICE'
    },
    {
      id: 6,
      title: 'SEAT_SELECTION.SEATS.RANDOM_SEAT.TITLE',
      subtitle: 'SEAT_SELECTION.SEATS.RANDOM_SEAT.SUBTITLE',
      domestic_price: 'SEAT_SELECTION.SEATS.RANDOM_SEAT.DOMESTIC_PRICE',
      abroad_price: 'SEAT_SELECTION.SEATS.RANDOM_SEAT.ABROAD_PRICE'
    }
  ];

  selectedCardId: number | null = null;

  // Track function for *ngFor
  trackByItem(index: number, item: any): number {
    return item.id;
  }

  onContinue() {
    try {
     // Burada gerekli yönlendirme ya da işlem yapılabilir
    
     console.log('Flight Seat Signal:', flightSignal());
     this.router.navigateByUrl('/find-flight/flight-payment');
    } catch (e) {
     this.errorService.errorHandler(5);
    }
   }
}
