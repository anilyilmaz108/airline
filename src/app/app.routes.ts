import { Routes } from '@angular/router';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { SeatSelectionComponent } from './pages/customer/seat-selection/seat-selection.component';

export const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/customer/home-customer/home-customer.routes').then(m => m.HOME_ROUTES) },
      { path: 'seat-selection', component: SeatSelectionComponent }
    ]
  }



];
