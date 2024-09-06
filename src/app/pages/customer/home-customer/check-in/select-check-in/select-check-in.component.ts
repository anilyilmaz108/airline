import { Component, inject } from '@angular/core';
import {
  flightSignal,
  flightUserSignal,
} from '../../../../../core/data-values';
import {
  generateDate,
  generateId,
  generateLetter,
} from '../../../../../helpers';
import { CommonModule } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-select-check-in',
  standalone: true,
  imports: [CommonModule, NzTypographyModule, NzButtonModule, TranslateModule],
  templateUrl: './select-check-in.component.html',
  styleUrl: './select-check-in.component.less',
})
export class SelectCheckInComponent {
  user = flightUserSignal();
  flight = flightSignal();
  ticketNo: any;
  flightHour: any;
  flightHourTime: any;
  firstCity: any;
  lastCity: any;
  formattedDate: any;
  formattedPhone: any;
  isCheckIn: any;
  onSelect = false;
  private router = inject(Router);

  ngOnInit(): void {
    // console.log(flightSignal()?.dateFirst);
    // console.log(flightUserSignal());
    // console.log(generateDate.checkIfNextDay(flightSignal()?.dateFirst!));
    this.isCheckIn = generateDate.checkIfNextDay(flightSignal()?.dateFirst!);
    this.ticketNo = generateId.generateRandom13DigitNumber();
    this.flightHour = generateDate.generateDateToHour(
      flightSignal()?.dateFirst!
    );
    this.flightHourTime = generateDate.generateDateToHourFlight(
      flightSignal()?.dateFirst!
    );
    this.firstCity = generateLetter.getFirstWord(flightSignal()?.fromCity!);
    this.lastCity = generateLetter.getFirstWord(flightSignal()?.toCity!);
    this.formattedDate = generateDate.generateFormattedDate(
      flightSignal()?.dateFirst!
    );
    this.formattedPhone = generateLetter.formatPhoneNumber(
      flightUserSignal()?.phone!
    );
  }

  onSelectFunc() {
    if (this.isCheckIn) {
      this.onSelect = !this.onSelect;
    }
  }
  onContinue() {
    this.router.navigateByUrl('/check-in/check-in-done');
  }
}
