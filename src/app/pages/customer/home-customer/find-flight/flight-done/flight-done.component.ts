import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FlightStepsComponent } from '../../../../../shared/flight-steps/flight-steps.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AuthService, FlightService } from '../../../../../services';
import { flightSignal, flightUserSignal } from '../../../../../core/data-values';
import { generateId } from '../../../../../helpers/generate-id';
import { generateDate } from '../../../../../helpers/generate-date';
import { generateLetter } from '../../../../../helpers/generate-letter';

@Component({
  selector: 'app-flight-done',
  standalone: true,
  imports: [CommonModule, FlightStepsComponent, NzCardModule, NzAvatarModule, NzIconModule, NzTypographyModule],
  templateUrl: './flight-done.component.html',
  styleUrl: './flight-done.component.less'
})
export class FlightDoneComponent {
  flightService = inject(FlightService);
  authService = inject(AuthService);
  user = flightUserSignal();
  flight = flightSignal();
  ticketNo = generateId.generateRandom13DigitNumber();
  flightHour = generateDate.generateDateToHour(flightSignal()?.dateFirst!);
  flightHourTime = generateDate.generateDateToHourFlight(flightSignal()?.dateFirst!);
  firstCity = generateLetter.getFirstWord(flightSignal()?.fromCity!);
  lastCity = generateLetter.getFirstWord(flightSignal()?.toCity!);
  formattedDate = generateDate.generateFormattedDate(flightSignal()?.dateFirst!);
  formattedPhone = generateLetter.formatPhoneNumber(flightUserSignal()?.phone!);
  flightFullTime = generateDate.generateFullDateTime(flightSignal()?.dateFirst!);
  flightFullTimeArrive = generateDate.generateFullDateTimeArrive(flightSignal()?.dateFirst!);


  ngOnInit(): void {
    this.getFlightData(flightSignal()?.id!);
    console.log('flight signal:', this.flight);
    console.log('user signal:', this.user);
  }

  async getFlightData(userId: string) {
     try {
       const flightDoc = await this.flightService.get(userId); 
       if (flightDoc.exists()) {
         console.log('User Data:', flightDoc.data());  // Veriyi konsola yazdırıyoruz         
       } else {
         console.log('No such document!');
       }
     } catch (error) {
       console.error('Error fetching user:', error);
     }
   }
}
