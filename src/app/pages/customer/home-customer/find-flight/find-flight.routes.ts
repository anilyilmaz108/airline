import { Routes } from '@angular/router';
import { setLayout } from '../../../../core/layout-resolver';
import { PageLayout } from '../../../../services/layout.service';
import { FindFlightComponent } from './find-flight.component';
import { SelectedFlightsComponent } from './selected-flights/selected-flights.component';
import { PassengerInformationsComponent } from './passenger-informations/passenger-informations.component';
import { FlightSeatComponent } from './flight-seat/flight-seat.component';
import { FlightPaymentComponent } from './flight-payment/flight-payment.component';


export const FIND_FLIGHT_ROUTES: Routes = [
  { path: '', resolve: { layout: setLayout(PageLayout.Private) }, component: FindFlightComponent },
  { path: 'selected-flights', resolve: { layout: setLayout(PageLayout.Private) }, component: SelectedFlightsComponent },
  { path: 'passenger-informations', resolve: { layout: setLayout(PageLayout.Private) }, component: PassengerInformationsComponent },
  { path: 'flight-seat', resolve: { layout: setLayout(PageLayout.Private) }, component: FlightSeatComponent },
  { path: 'flight-payment', resolve: { layout: setLayout(PageLayout.Private) }, component: FlightPaymentComponent },
];
