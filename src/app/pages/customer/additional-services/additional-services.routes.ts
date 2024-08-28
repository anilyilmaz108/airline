import { Routes } from '@angular/router';
import { AdditionalServicesComponent } from './additional-services.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BaggageAllowanceComponent } from './baggage-allowance/baggage-allowance.component';
import { VipSelectionComponent } from './vip-selection/vip-selection.component';
import { FlexReservationComponent } from './flex-reservation/flex-reservation.component';
import { InflightServicesComponent } from './inflight-services/inflight-services.component';
import { setLayout } from '../../../core/layout-resolver';
import { PageLayout } from '../../../services/layout.service';

export const ADDITIONAL_SERVICES_ROUTES: Routes = [
  // { path: '', component: AdditionalServicesComponent },
  { path: 'seat-selection', resolve: { layout: setLayout(PageLayout.Private) }, component: SeatSelectionComponent },
  { path: 'baggage-allowance', resolve: { layout: setLayout(PageLayout.Private) }, component: BaggageAllowanceComponent },
  { path: 'vip-selection', resolve: { layout: setLayout(PageLayout.Private) }, component: VipSelectionComponent },
  { path: 'flex-reservation', resolve: { layout: setLayout(PageLayout.Private) }, component: FlexReservationComponent },
  { path: 'inflight-services', resolve: { layout: setLayout(PageLayout.Private) }, component: InflightServicesComponent }
];
