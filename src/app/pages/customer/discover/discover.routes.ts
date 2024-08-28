import { Routes } from '@angular/router';
import { IstanbulComponent } from './istanbul/istanbul.component';
import { setLayout } from '../../../core/layout-resolver';
import { PageLayout } from '../../../services/layout.service';
import { AnkaraComponent } from './ankara/ankara.component';
import { IzmirComponent } from './izmir/izmir.component';
import { AntalyaComponent } from './antalya/antalya.component';

export const DISCOVER_ROUTES: Routes = [
  { path: 'istanbul', resolve: { layout: setLayout(PageLayout.Private) }, component: IstanbulComponent },
  { path: 'ankara', resolve: { layout: setLayout(PageLayout.Private) }, component: AnkaraComponent },
  { path: 'izmir', resolve: { layout: setLayout(PageLayout.Private) }, component: IzmirComponent },
  { path: 'antalya', resolve: { layout: setLayout(PageLayout.Private) }, component: AntalyaComponent },
];
