import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { LayoutService, PageLayout } from '../services/layout.service';

export const setLayout = (inputLayout: PageLayout): ResolveFn<void> => {
  return (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    inject(LayoutService).setLayout(inputLayout);
  };
};
