import { Routes } from '@angular/router';
import { setLayout } from '../../../../core/layout-resolver';
import { CheckInComponent } from './check-in.component';
import { PageLayout } from '../../../../services/layout.service';
import { SelectCheckInComponent } from './select-check-in/select-check-in.component';
import { CheckInDoneComponent } from './check-in-done/check-in-done.component';

export const CHECK_IN_ROUTES: Routes = [
  { path: '', resolve: { layout: setLayout(PageLayout.Private) }, component: CheckInComponent},
  { path: 'select-check-in', resolve: { layout: setLayout(PageLayout.Private) }, component: SelectCheckInComponent},
  { path: 'check-in-done', resolve: { layout: setLayout(PageLayout.Private) }, component: CheckInDoneComponent},
];
