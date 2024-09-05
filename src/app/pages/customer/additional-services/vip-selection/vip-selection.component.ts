import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-vip-selection',
  standalone: true,
  imports: [
    NzDividerModule,
    CommonModule,
    NzTypographyModule,
    NzImageModule,
    TranslateModule,
  ],
  templateUrl: './vip-selection.component.html',
  styleUrl: './vip-selection.component.less',
})
export class VipSelectionComponent {

}
