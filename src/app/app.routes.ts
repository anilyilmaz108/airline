import { Routes } from '@angular/router';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { SeatSelectionComponent } from './pages/customer/seat-selection/seat-selection.component';
import { BaggageAllowanceComponent } from './pages/customer/baggage-allowance/baggage-allowance.component';
import { VipSelectionComponent } from './pages/customer/vip-selection/vip-selection.component';
import { FlexReservationComponent } from './pages/customer/flex-reservation/flex-reservation.component';

export const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/customer/home-customer/home-customer.routes').then(m => m.HOME_ROUTES) },
      { path: 'seat-selection', component: SeatSelectionComponent },
      { path: 'baggage-allowance', component: BaggageAllowanceComponent },
      { path: 'vip-selection', component: VipSelectionComponent },
      { path: 'flex-reservation', component: FlexReservationComponent }

    ]
  }



];
