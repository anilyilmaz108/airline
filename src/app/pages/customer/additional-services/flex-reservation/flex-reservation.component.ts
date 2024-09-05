import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-flex-reservation',
  standalone: true,
  imports: [NzDividerModule, CommonModule, NzTypographyModule, NzImageModule, TranslateModule],
  templateUrl: './flex-reservation.component.html',
  styleUrl: './flex-reservation.component.less'
})
export class FlexReservationComponent {
}
