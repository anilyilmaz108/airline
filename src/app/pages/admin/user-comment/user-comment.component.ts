import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AdminService } from '../../../services';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-user-comment',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzTypographyModule,
    NzListModule,
    NzCommentModule,
    NzDividerModule,
    NzSpinModule
  ],
  templateUrl: './user-comment.component.html',
  styleUrl: './user-comment.component.less',
})
export class UserCommentComponent {
  adminService = inject(AdminService);
  destroyRef = inject(DestroyRef)
  commentList: any = [];
  loading = false;

  ngOnInit(): void {
    this.getComment();    
  }

    // Commentleri çağıralım
    getComment(){
      this.loading = true;
      this.adminService.getTwoComments().pipe(takeUntilDestroyed(this.destroyRef), take(1)).subscribe((data) => {
        this.commentList = data;
        this.loading = false;
      })
    }
}
