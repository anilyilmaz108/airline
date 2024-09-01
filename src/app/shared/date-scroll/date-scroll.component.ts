import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-scroll.component.html',
  styleUrl: './date-scroll.component.less'
})
export class DateScrollComponent {
  @Output() dateSelected = new EventEmitter<Date>();

  dates: Date[] = [];
  selectedDate: Date | null = null;

  constructor() {}

  ngOnInit(): void {
    this.generateDates(); // Tarihleri oluştur
  }

  generateDates() {
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i); // Gelecek 30 günü oluştur
      this.dates.push(date);
    }
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    // console.log('Selected date:', this.selectedDate);
    this.dateSelected.emit(date); 
    // Seçilen tarih ile ilgili bir işlem yapılabilir
  }
}
