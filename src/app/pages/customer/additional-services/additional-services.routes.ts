import { Routes } from '@angular/router';
import { AdditionalServicesComponent } from './additional-services.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BaggageAllowanceComponent } from './baggage-allowance/baggage-allowance.component';
import { VipSelectionComponent } from './vip-selection/vip-selection.component';
import { FlexReservationComponent } from './flex-reservation/flex-reservation.component';
import { InflightServicesComponent } from './inflight-services/inflight-services.component';

export const ADDITIONAL_SERVICES_ROUTES: Routes = [
  // { path: '', component: AdditionalServicesComponent },
  { path: 'seat-selection', component: SeatSelectionComponent },
  { path: 'baggage-allowance', component: BaggageAllowanceComponent },
  { path: 'vip-selection', component: VipSelectionComponent },
  { path: 'flex-reservation', component: FlexReservationComponent },
  { path: 'inflight-services', component: InflightServicesComponent }
];
