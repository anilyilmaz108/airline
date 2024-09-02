import { Component } from '@angular/core';
import { flightSignal, flightUserSignal } from '../../../../../core/data-values';

@Component({
  selector: 'app-flight-seat',
  standalone: true,
  imports: [],
  templateUrl: './flight-seat.component.html',
  styleUrl: './flight-seat.component.less'
})
export class FlightSeatComponent {

  ngOnInit(): void {
    // console.log('==>', flightSignal());
    // console.log('=>', flightUserSignal());
  }

}
