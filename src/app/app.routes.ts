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
      { path: 'user', loadChildren: () => import('./pages/user/user.routes').then(m => m.USER_ROUTES) },
      { path: 'find-flight', loadChildren: () => import('./pages/customer/home-customer/find-flight/find-flight.routes').then(m => m.FIND_FLIGHT_ROUTES) },
      { path: 'check-in', loadChildren: () => import('./pages/customer/home-customer/check-in/check-in.routes').then(m => m.CHECK_IN_ROUTES) },
      { path: 'admin', loadChildren: () => import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES) },
    ]
  }
];
