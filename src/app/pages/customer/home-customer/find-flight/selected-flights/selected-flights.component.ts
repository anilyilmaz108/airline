import { Component } from '@angular/core';
import { flightSignal } from '../../../../../core/data-values';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FlightStepsComponent } from '../../../../../shared/flight-steps/flight-steps.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { FlightHeaderComponent } from '../../../../../shared/flight-header/flight-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-flights',
  standalone: true,
  imports: [NzCardModule, NzIconModule, FlightStepsComponent, NzPageHeaderModule, NzSpaceModule, FlightHeaderComponent, CommonModule],
  templateUrl: './selected-flights.component.html',
  styleUrl: './selected-flights.component.less',
  host: {ngSkipHydration: 'true'},

})
export class SelectedFlightsComponent {
  title:string;
  subtitle:string;
  price:number;

  ngOnInit(): void {
    //console.log('selected-flights', flightSignal());   
  }

  constructor(){
    this.title = `${flightSignal()?.fromCity} - ${flightSignal()?.toCity}`;
    this.subtitle = `${flightSignal()?.dateFirst} - ${flightSignal()?.dateLast} | ${flightSignal()?.adultNumber} Yetişkin`;
    this.price = flightSignal()?.totalPrice!;
    console.log('==>', this.title);
  }

}
