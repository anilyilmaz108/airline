import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-istanbul',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzStatisticModule,
    NzSkeletonModule,
    NzGridModule,
    NzTypographyModule,
    NzDividerModule,
    TranslateModule,
  ],
  templateUrl: './istanbul.component.html',
  styleUrl: './istanbul.component.less',
})
export class IstanbulComponent {
  items = [
    {
      image:
        'https://cdn2.enuygun.com/media/lib/825x620/uploads/image/ayasofya-39474.webp',
      title: 'DISCOVER.ISTANBUL.DATAS.FIRST_DATA.TITLE',
      subtitle: 'DISCOVER.ISTANBUL.DATAS.FIRST_DATA.SUBTITLE',
    },
    {
      image:
        'https://cdn2.enuygun.com/media/lib/825x620/uploads/image/kiz-kulesi-39480.webp',
      title: 'DISCOVER.ISTANBUL.DATAS.SECOND_DATA.TITLE',
      subtitle: 'DISCOVER.ISTANBUL.DATAS.SECOND_DATA.SUBTITLE',
    },
    {
      image:
        'https://cdn2.enuygun.com/media/lib/825x620/uploads/image/kapali-carsi-39479.webp',
      title: 'DISCOVER.ISTANBUL.DATAS.THIRD_DATA.TITLE',
      subtitle: 'DISCOVER.ISTANBUL.DATAS.THIRD_DATA.SUBTITLE',
    },
  ];
}
