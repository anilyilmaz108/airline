import { Routes } from '@angular/router';
import { setLayout } from '../../../core/layout-resolver';
import { PageLayout } from '../../../services/layout.service';
import { InfoComponent } from './info.component';
import { AirportInfoComponent } from './airport-info/airport-info.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { PassengerRightsComponent } from './passenger-rights/passenger-rights.component';
import { HelpContactComponent } from './help-contact/help-contact.component';

export const INFO_ROUTES: Routes = [
  //{ path: '', resolve: { layout: setLayout(PageLayout.Private) }, component: InfoComponent },
  { path: 'airport-info', resolve: { layout: setLayout(PageLayout.Private) }, component: AirportInfoComponent },
  { path: 'general-info', resolve: { layout: setLayout(PageLayout.Private) }, component: GeneralInfoComponent },
  { path: 'passenger-rights', resolve: { layout: setLayout(PageLayout.Private) }, component: PassengerRightsComponent },
  { path: 'help-contact', resolve: { layout: setLayout(PageLayout.Private) }, component: HelpContactComponent },
];
