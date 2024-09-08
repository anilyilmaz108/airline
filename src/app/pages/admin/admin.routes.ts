import { Routes } from '@angular/router';
import { PageLayout } from '../../services/layout.service';
import { setLayout } from '../../core/layout-resolver';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { UserListComponent } from './user-list/user-list.component';



export const ADMIN_ROUTES: Routes = [
  // { path: '', resolve: { layout: setLayout(PageLayout.Private) }, component: AdminComponent },
  { path: 'admin-home', resolve: { layout: setLayout(PageLayout.Private) }, component: AdminHomeComponent },
  { path: 'user-comment', resolve: { layout: setLayout(PageLayout.Private) }, component: UserCommentComponent },
  { path: 'user-list', resolve: { layout: setLayout(PageLayout.Private) }, component: UserListComponent },
];