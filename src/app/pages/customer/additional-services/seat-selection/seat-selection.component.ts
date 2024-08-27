import { Component } from '@angular/core';
import { SeatIconComponent } from '../../../../shared/seat-icon/seat-icon.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [
    SeatIconComponent,
    NzListModule,
    NzCardModule,
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzInputModule,
  ],
  templateUrl: './seat-selection.component.html',
  styleUrl: './seat-selection.component.less',
  host: { ngSkipHydration: 'true' },
})
export class SeatSelectionComponent {
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
  }
  frontSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = true;
    this.windowSeat = false;
    this.sideSeat = false;
    this.otherSeat = false;
    this.selectedCardId = 2;
  }
  windowSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = false;
    this.windowSeat = true;
    this.sideSeat = false;
    this.otherSeat = false;
    this.selectedCardId = 3;
  }
  sideSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = false;
    this.windowSeat = false;
    this.sideSeat = true;
    this.otherSeat = false;
    this.selectedCardId = 4;
  }
  otherSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = false;
    this.windowSeat = false;
    this.sideSeat = false;
    this.otherSeat = true;
    this.selectedCardId = 5;
  }
  randomSeatSelection() {
    this.extraLargeSeat = false;
    this.frontSeat = false;
    this.windowSeat = false;
    this.sideSeat = false;
    this.otherSeat = false;
    this.selectedCardId = 6;
  }

  findFlight() {
    console.log('Uçuş aranıyor..');
  }

  data = [
    {
      id: 1,
      title: 'Ekstra Diz Mesafesi',
      subtitle: 'Uzun boylu olanlar ve rahat etmek isteyenler için',
      domestic_price: "199.99 TL'den başlayan",
      abroad_price: "399.99 TL'den başlayan",
    },
    {
      id: 2,
      title: 'Ön Koltuklar',
      subtitle: 'Rahatça inip binmek isteyenler için',
      domestic_price: "199.99 TL'den başlayan",
      abroad_price: "399.99 TL'den başlayan",
    },
    {
      id: 3,
      title: 'Pencere Kenarı',
      subtitle: 'Rahatsız edilmek istemeyenler için',
      domestic_price: "199.99 TL'den başlayan",
      abroad_price: "399.99 TL'den başlayan",
    },
    {
      id: 4,
      title: 'Koridor Kenarı',
      subtitle: 'Sıkça yerinden kalkanlar için',
      domestic_price: "199.99 TL'den başlayan",
      abroad_price: "399.99 TL'den başlayan",
    },
    {
      id: 5,
      title: 'Diğer Koltuklar',
      subtitle: 'Birlikte oturmak isteyenler için',
      domestic_price: "199.99 TL'den başlayan",
      abroad_price: "399.99 TL'den başlayan",
    },
    {
      id: 6,
      title: 'Rastgele Koltuk',
      subtitle: 'Ek koltuk ücreti vermek istemeyenler için',
      domestic_price: '0 TL (rastgele gelen koltuk)',
      abroad_price: '0 TL (rastgele gelen koltuk)',
    },
  ];

  selectedCardId: number | null = null;

  // Track function for *ngFor
  trackByItem(index: number, item: any): number {
    return item.id;
  }
}
