import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { AuthService } from '../../../services/auth.service';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NzTypographyComponent,
    CommonModule,
    NzCardModule,
    NzIconModule,
    NzContentComponent,
    NzModalModule,
    NzDescriptionsModule,
    NzProgressModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less',
})
export class ProfileComponent {
  userPhotos = false;
  loading = false;
  profileRate = 75;

  authService = inject(AuthService);
  modalService = inject(NzModalService);

  data: any[] = [];

  ngOnInit(): void {
  
  }

  edit(): void {
  
  }


}
