import { Routes } from '@angular/router';
import { HomeCustomerComponent } from './home-customer.component';
import { setLayout } from '../../../core/layout-resolver';
import { PageLayout } from '../../../services/layout.service';

export const HOME_ROUTES: Routes = [
  { path: '', resolve: { layout: setLayout(PageLayout.Private) }, component: HomeCustomerComponent },
];
