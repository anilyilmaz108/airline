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
  tempPrice = 1499.99;

  priceOptions = [
    { name: 'Eco', details: '15 kg bagaj, online check-in', price: this.tempPrice },
    { name: 'Classic', details: '20 kg bagaj, esnek değişiklik', price: this.tempPrice + this.tempPrice * 0.2 },
    { name: 'Premium', details: '25 kg bagaj, esnek değişiklik', price: this.tempPrice + this.tempPrice * 0.5 }
  ];


  selectPriceOption(option: any) {
    this.selectedCard = option; // Sadece renk değişmesine yarıyor.
    this.selectedDetail.emit(option); // Seçilen detayı parent bileşene ilet
  }
}
