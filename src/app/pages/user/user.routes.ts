import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageLayout } from '../../services/layout.service';
import { setLayout } from '../../core/layout-resolver';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';


export const USER_ROUTES: Routes = [
  // { path: '', resolve: { layout: setLayout(PageLayout.Private) }, component: UserComponent },
  { path: 'login', resolve: { layout: setLayout(PageLayout.Private) }, component: LoginComponent },
  { path: 'register', resolve: { layout: setLayout(PageLayout.Private) }, component: RegisterComponent },
  { path: 'reset-pass', resolve: { layout: setLayout(PageLayout.Private) }, component: ResetPassComponent },
];
