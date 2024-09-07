import { Routes } from '@angular/router';
import { PageLayout } from '../../services/layout.service';
import { setLayout } from '../../core/layout-resolver';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';



export const ADMIN_ROUTES: Routes = [
  // { path: '', resolve: { layout: setLayout(PageLayout.Private) }, component: AdminComponent },
  { path: 'admin-home', resolve: { layout: setLayout(PageLayout.Private) }, component: AdminHomeComponent },
];