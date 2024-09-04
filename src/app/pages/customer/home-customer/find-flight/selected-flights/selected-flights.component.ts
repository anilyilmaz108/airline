import { Component, inject } from '@angular/core';
import { flightSignal } from '../../../../../core/data-values';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FlightStepsComponent } from '../../../../../shared/flight-steps/flight-steps.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { FlightHeaderComponent } from '../../../../../shared/flight-header/flight-header.component';
import { CommonModule } from '@angular/common';
import { DateScrollComponent } from '../../../../../shared/date-scroll/date-scroll.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CardDetailComponent } from '../../../../../shared/card-detail/card-detail.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Auth } from '@angular/fire/auth';
import { FlightModel } from '../../../../../models/flight';
import { ErrorService } from '../../../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-flights',
  standalone: true,
  imports: [
    NzCardModule,
    NzIconModule,
    FlightStepsComponent,
    NzPageHeaderModule,
    NzSpaceModule,
    FlightHeaderComponent,
    CommonModule,
    DateScrollComponent,
    NzTypographyModule,
    CardDetailComponent,
    NzButtonModule
  ],
  templateUrl: './selected-flights.component.html',
  styleUrl: './selected-flights.component.less',
  host: { ngSkipHydration: 'true' },
})
export class SelectedFlightsComponent {
  title: string;
  subtitle: string;

  titleReverse: string;
  subtitleReverse: string;

  price: number;
  selectedDate: Date | null = null;
  selectedDateBack: Date | null | undefined = null;

  errorService = inject(ErrorService);
  private router = inject(Router);
  flightSignalVal = flightSignal();
  
  ngOnInit(): void {
    //console.log('selected-flights', flightSignal());
  }

  constructor() {
    const timestamp = flightSignal()?.dateFirst;
    const date = new Date(timestamp!);
    const formattedDate1 = date.toLocaleDateString('en-GB');

    const timestamp2 = flightSignal()?.dateLast;
    const date2 = new Date(timestamp2!);
    const formattedDate2 = date2.toLocaleDateString('en-GB');

    this.title = `${flightSignal()?.fromCity} - ${flightSignal()?.toCity}`;
    this.subtitle = `${formattedDate1} | ${
      flightSignal()?.adultNumber
    } Yetişkin`;

    this.titleReverse = `${flightSignal()?.toCity} - ${flightSignal()?.fromCity}`;
    this.subtitleReverse = `${formattedDate2} | ${
      flightSignal()?.adultNumber
    } Yetişkin`;

    this.price = flightSignal()?.totalPrice!;
    // console.log('==>', this.title);
  }

  onDateSelected(date: Date) {
    this.selectedDate = date;
    // console.log('Seçilen tarih:', this.selectedDate);
  }

  onDateSelectedBack(date: Date){
    this.selectedDateBack = date;
  }

  flightList = [
    { 
      id: 1, 
      departureTime: '07:25', 
      arrivalTime: '08:30', 
      origin: flightSignal()?.fromCity, 
      destination: flightSignal()?.toCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
    { 
      id: 2, 
      departureTime: '09:45', 
      arrivalTime: '10:50', 
      origin: flightSignal()?.fromCity, 
      destination: flightSignal()?.toCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
    { 
      id: 3, 
      departureTime: '11:20', 
      arrivalTime: '12:25', 
      origin: flightSignal()?.fromCity, 
      destination: flightSignal()?.toCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
    { 
      id: 4, 
      departureTime: '14:30', 
      arrivalTime: '15:35', 
      origin: flightSignal()?.fromCity, 
      destination: flightSignal()?.toCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
    { 
      id: 5, 
      departureTime: '19:55', 
      arrivalTime: '21:00', 
      origin: flightSignal()?.fromCity, 
      destination: flightSignal()?.toCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
  ];

  flightListBack = [
    { 
      id: 1, 
      departureTime: '07:25', 
      arrivalTime: '08:30', 
      origin: flightSignal()?.toCity, 
      destination: flightSignal()?.fromCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
    { 
      id: 2, 
      departureTime: '09:45', 
      arrivalTime: '10:50', 
      origin: flightSignal()?.toCity, 
      destination: flightSignal()?.fromCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
    { 
      id: 3, 
      departureTime: '11:20', 
      arrivalTime: '12:25', 
      origin: flightSignal()?.toCity, 
      destination: flightSignal()?.fromCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
    { 
      id: 4, 
      departureTime: '14:30', 
      arrivalTime: '15:35', 
      origin: flightSignal()?.toCity, 
      destination: flightSignal()?.fromCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
    { 
      id: 5, 
      departureTime: '19:55', 
      arrivalTime: '21:00', 
      origin: flightSignal()?.toCity, 
      destination: flightSignal()?.fromCity, 
      price: 1499.99, 
      duration: '1S 5DK' 
    },
  ];

  selectedCardId: number | null = null;  // Seçilen Card'ın ID'si burada tutulacak
  selectedDetail: any = null;            // Seçilen detay burada tutulacak
  cardSelect: any;

  selectedCardIdBack: number | null = null;  
  selectedDetailBack: any = null;            
  cardSelectBack: any;

  selectCard(cardId: number, card: any) {
    this.cardSelect = card;
    // console.log('cardSelect', this.cardSelect);
    // console.log('duration', this.cardSelect.duration);
    if(this.selectedDetail){
      this.selectedCardId = cardId;      
      this.price += this.selectedDetail.price;
    } else {
      this.selectedCardId = this.selectedCardId === cardId ? null : cardId;  // Seçilen card ID'si toggle yapar
    }
  }

  selectCardBack(cardId: number, card: any) {
    this.cardSelectBack = card;
    if(this.selectedDetailBack){
      this.selectedCardIdBack = cardId;
      this.price += this.selectedDetailBack.price;
    } else {
      this.selectedCardIdBack = this.selectedCardIdBack === cardId ? null : cardId;  // Seçilen card ID'si toggle yapar
    }
  }

  onCardDetailSelectedBack(detail: any) {
    this.selectedDetailBack = detail; // Child'dan gelen detayı burada alırız
    // console.log('Seçilen Detay:', detail);
    // console.log('datay name', detail.name);
    // console.log('Seçilen Card', this.selectedCardId);
  }

  onCardDetailSelected(detail: any) {
    this.selectedDetail = detail; // Child'dan gelen detayı burada alırız
    // console.log('Seçilen Detay:', detail);
    // console.log('datay name', detail.name);
    // console.log('Seçilen Card', this.selectedCardId);
  }

  onContinue() {
   try {
    // console.log('Devam butonuna tıklandı');
    // Burada gerekli yönlendirme ya da işlem yapılabilir
    const body: FlightModel = {
      "id": flightSignal()?.id,
      "userId": flightSignal()?.id,
      "PNRNO": "",
      "earningAirScore": 0,
      "fromCity": flightSignal()?.fromCity,
      "toCity": flightSignal()?.toCity,
      "dateFirst": this.selectedDate!,
      "dateLast": this.flightSignalVal?.dateLast === null || this.flightSignalVal?.dateLast === undefined  ? undefined : this.selectedDateBack!,
      "hourFirst": `${this.selectedDate!.getHours() - this.selectedDate!.getMinutes()}`,
      "hourLast": this.flightSignalVal?.dateLast === null || this.flightSignalVal?.dateLast === undefined  ? "" : `${this.selectedDateBack!.getHours() - this.selectedDateBack!.getMinutes()}`,
      "priceFirst": this.cardSelect.price,
      "priceLast": this.flightSignalVal?.dateLast === null || this.flightSignalVal?.dateLast === undefined ? 0 : this.cardSelectBack.price, 
      "adultNumber": flightSignal()?.adultNumber,
      "childNumber": flightSignal()?.childNumber,
      "babyNumber": flightSignal()?.babyNumber,
      "flightTimeFirst": `${this.cardSelect.duration}`,
      "flightTimeLast": this.flightSignalVal?.dateLast === null || this.flightSignalVal?.dateLast === undefined  ? "" : `${this.cardSelectBack.duration}`,
      "packageFirst": `${this.selectedDetail.name}`,
      "packageLast": this.flightSignalVal?.dateLast === null || this.flightSignalVal?.dateLast === undefined  ? "" : `${this.selectedDetailBack.name}`,
      "flexFirst": this.selectedDetail.name !== 'Eco' ? true : false,
      "flexLast": this.flightSignalVal?.dateLast === null || this.flightSignalVal?.dateLast === undefined ? false : this.selectedDetailBack.name !== 'Eco' ? true : false,
      "seatFirst": "",
      "seatLast": "",
      "totalPrice": this.flightSignalVal?.dateLast === null || this.flightSignalVal?.dateLast === undefined ? this.cardSelect.price : this.cardSelect.price + this.cardSelectBack.price,
      "operationDate": Date.now()
    }
    flightSignal.set(body);
    console.log('new Flight Signal:', flightSignal());
    this.router.navigateByUrl('/find-flight/passenger-informations');
   } catch (e) {
    console.log(e);
    this.errorService.errorHandler(5);
   }
  }
  
}
