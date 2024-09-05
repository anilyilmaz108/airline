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
  selector: 'app-antalya',
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
  templateUrl: './antalya.component.html',
  styleUrl: './antalya.component.less',
})
export class AntalyaComponent {
  items = [
    {
      image:
        'https://www.novacar.com.tr/upload/news/duden-selalesi_original.webp',
      title: 'DISCOVER.ANTALYA.DATAS.FIRST_DATA.TITLE',
      subtitle: 'DISCOVER.ANTALYA.DATAS.FIRST_DATA.SUBTITLE',
    },
    {
      image:
        'https://www.novacar.com.tr/upload/news/olimpos-antik-kenti_original.webp',
      title: 'DISCOVER.ANTALYA.DATAS.SECOND_DATA.TITLE',
      subtitle: 'DISCOVER.ANTALYA.DATAS.SECOND_DATA.SUBTITLE',
    },
    {
      image:
        'https://resim.gezinomi.com/assets/customhtmleditor/shutterstock_338801360-2.02.2021191827.jpg',
      title: 'DISCOVER.ANTALYA.DATAS.THIRD_DATA.TITLE',
      subtitle: 'DISCOVER.ANTALYA.DATAS.THIRD_DATA.SUBTITLE',
    },
  ];
}
