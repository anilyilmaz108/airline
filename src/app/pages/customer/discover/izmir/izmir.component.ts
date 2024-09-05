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
  selector: 'app-izmir',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzStatisticModule, NzSkeletonModule, NzGridModule, NzTypographyModule, NzDividerModule, TranslateModule],
  templateUrl: './izmir.component.html',
  styleUrl: './izmir.component.less'
})
export class IzmirComponent {
  items = [
    {
      image : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/izmir-saat-kulesi-37062.webp",
      title: 'DISCOVER.IZMIR.DATAS.FIRST_DATA.TITLE',
      subtitle: 'DISCOVER.IZMIR.DATAS.FIRST_DATA.SUBTITLE',
    },
    {
      image : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/izmir-asansor-37060.webp",
      title: 'DISCOVER.IZMIR.DATAS.SECOND_DATA.TITLE',
      subtitle: 'DISCOVER.IZMIR.DATAS.SECOND_DATA.SUBTITLE',
    },
    {
      image : "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/konak-meydani-349.webp",
      title: 'DISCOVER.IZMIR.DATAS.THIRD_DATA.TITLE',
      subtitle: 'DISCOVER.IZMIR.DATAS.THIRD_DATA.SUBTITLE',
    },
    
  ]
}
