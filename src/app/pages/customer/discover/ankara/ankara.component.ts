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
  selector: 'app-ankara',
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
  templateUrl: './ankara.component.html',
  styleUrl: './ankara.component.less',
})
export class AnkaraComponent {
  items = [
    {
      image:
        'https://cdn2.enuygun.com/media/lib/825x620/uploads/image/ankara-anitkabir-2496.webp',
      title: 'DISCOVER.ANKARA.DATAS.FIRST_DATA.TITLE',
      subtitle: 'DISCOVER.ANKARA.DATAS.FIRST_DATA.SUBTITLE',
    },
    {
      image:
        'https://cdn2.enuygun.com/media/lib/825x620/uploads/image/augustus-tapinagi-35724.webp',
      title: 'DISCOVER.ANKARA.DATAS.SECOND_DATA.TITLE',
      subtitle: 'DISCOVER.ANKARA.DATAS.SECOND_DATA.SUBTITLE',
    },
    {
      image:
        'https://cdn2.enuygun.com/media/lib/825x620/uploads/image/haci-bayram-35707.webp',
      title: 'DISCOVER.ANKARA.DATAS.THIRD_DATA.TITLE',
      subtitle: 'DISCOVER.ANKARA.DATAS.THIRD_DATA.SUBTITLE',
    },
  ];
}
