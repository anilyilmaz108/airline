import { Component } from '@angular/core';
import { SeatIconComponent } from '../../../../shared/seat-icon/seat-icon.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TranslateModule } from '@ngx-translate/core';

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
    NzTypographyModule,
    TranslateModule
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
}
