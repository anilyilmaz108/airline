import { Routes } from '@angular/router';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/customer/home-customer/home-customer.routes').then(m => m.HOME_ROUTES) },
      { path: 'additional-services', loadChildren: () => import('./pages/customer/additional-services/additional-services.routes').then(m => m.ADDITIONAL_SERVICES_ROUTES) },
      { path: 'discover', loadChildren: () => import('./pages/customer/discover/discover.routes').then(m => m.DISCOVER_ROUTES) },
      { path: 'info', loadChildren: () => import('./pages/customer/info/info.routes').then(m => m.INFO_ROUTES) },
    ]
  }



];
