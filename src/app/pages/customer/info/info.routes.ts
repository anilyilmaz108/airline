import { Routes } from '@angular/router';
import { setLayout } from '../../../core/layout-resolver';
import { PageLayout } from '../../../services/layout.service';
import { InfoComponent } from './info.component';
import { AirportInfoComponent } from './airport-info/airport-info.component';

export const INFO_ROUTES: Routes = [
  //{ path: '', resolve: { layout: setLayout(PageLayout.Private) }, component: InfoComponent },
  { path: 'airport-info', resolve: { layout: setLayout(PageLayout.Private) }, component: AirportInfoComponent },
];
