import { Component } from '@angular/core';
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
  ],
  templateUrl: './selected-flights.component.html',
  styleUrl: './selected-flights.component.less',
  host: { ngSkipHydration: 'true' },
})
export class SelectedFlightsComponent {
  title: string;
  subtitle: string;
  price: number;
  selectedDate: Date | null = null;

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
    this.subtitle = `${formattedDate1} - ${formattedDate2} | ${
      flightSignal()?.adultNumber
    } Yetişkin`;
    this.price = flightSignal()?.totalPrice!;
    // console.log('==>', this.title);
  }

  onDateSelected(date: Date) {
    this.selectedDate = date;
    console.log('Seçilen tarih:', this.selectedDate);
  }

  flightList = [
    { 
      id: 1, 
      departureTime: '07:25', 
      arrivalTime: '08:30', 
      origin: 'Antalya', 
      originCode: 'AYT', 
      destination: 'Çukurova - Adana/Mersin', 
      price: 56.88, 
      duration: '1S 5DK' 
    },
    { 
      id: 2, 
      departureTime: '19:45', 
      arrivalTime: '20:50', 
      origin: 'Antalya', 
      originCode: 'AYT', 
      destination: 'Çukurova - Adana/Mersin', 
      price: 66.13, 
      duration: '1S 5DK' 
    }
  ];

  selectedCardId: number | null = null;  // Seçilen Card'ın ID'si burada tutulacak
  selectedDetail: any = null;            // Seçilen detay burada tutulacak

  selectCard(cardId: number) {
    if(this.selectedDetail){
      this.selectedCardId = cardId;
    } else {
      this.selectedCardId = this.selectedCardId === cardId ? null : cardId;  // Seçilen card ID'si toggle yapar
    }
  }

  onCardDetailSelected(detail: any) {
    this.selectedDetail = detail; // Child'dan gelen detayı burada alırız
    console.log('Seçilen Detay:', detail);
  }

  
}
