import { Routes } from '@angular/router';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { SeatSelectionComponent } from './pages/customer/seat-selection/seat-selection.component';
import { BaggageAllowanceComponent } from './pages/customer/baggage-allowance/baggage-allowance.component';
import { VipSelectionComponent } from './pages/customer/vip-selection/vip-selection.component';
import { FlexReservationComponent } from './pages/customer/flex-reservation/flex-reservation.component';
import { InflightServicesComponent } from './pages/customer/inflight-services/inflight-services.component';

export const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/customer/home-customer/home-customer.routes').then(m => m.HOME_ROUTES) },
      { path: 'additional-services/seat-selection', component: SeatSelectionComponent },
      { path: 'additional-services/baggage-allowance', component: BaggageAllowanceComponent },
      { path: 'additional-services/vip-selection', component: VipSelectionComponent },
      { path: 'additional-services/flex-reservation', component: FlexReservationComponent },
      { path: 'additional-services/inflight-services', component: InflightServicesComponent }

    ]
  }



];
