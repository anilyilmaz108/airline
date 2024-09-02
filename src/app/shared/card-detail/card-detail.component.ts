import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzButtonModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.less',
  host: { ngSkipHydration: 'true' },

})
export class CardDetailComponent {
  selectedCard: any;
  @Input() card: any;
  @Output() selectedDetail = new EventEmitter<any>();

  priceOptions = [
    { name: 'Eco', details: '15 kg bagaj, online check-in', price: 56.88 },
    { name: 'Classic', details: '20 kg bagaj, koltuk seçimi', price: 66.94 },
    { name: 'Premium', details: '25 kg bagaj, yemek servisi', price: 71.44 }
  ];


  selectPriceOption(option: any) {
    this.selectedCard = option; // Sadece renk değişmesine yarıyor.
    this.selectedDetail.emit(option); // Seçilen detayı parent bileşene ilet
  }
}
