import { Component } from '@angular/core';
import { flightSignal } from '../../../../../core/data-values';

@Component({
  selector: 'app-selected-flights',
  standalone: true,
  imports: [],
  templateUrl: './selected-flights.component.html',
  styleUrl: './selected-flights.component.less'
})
export class SelectedFlightsComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('selected-flights', flightSignal());
  }
}
