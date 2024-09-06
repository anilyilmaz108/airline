import { Component } from '@angular/core';
import { CustomerStatsComponent } from './customer-stats/customer-stats/customer-stats.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [
    CustomerStatsComponent,
    FindFlightComponent,
    NzCardModule,
    NzCarouselModule,
    NzSkeletonModule,
    NzTypographyModule,
    TranslateModule,
  ],
  templateUrl: './home-customer.component.html',
  styleUrl: './home-customer.component.less',
  host: { ngSkipHydration: 'true' },
})
export class HomeCustomerComponent {
  array = [
    {
      title: 'HOME_CUSTOMER.DATAS.DATA1.TITLE',
      desc: 'HOME_CUSTOMER.DATAS.DATA1.DESCRIPTION',
      image:
        'https://static.sunexpress.com/media/wvvbic3e/sxs-zeynep-desktop-3840x800.webp',
    },
    {
      title: 'HOME_CUSTOMER.DATAS.DATA2.TITLE',
      desc: 'HOME_CUSTOMER.DATAS.DATA2.DESCRIPTION',
      image:
        'https://static.sunexpress.com/media/cwwgr4b5/hp-banner-thumbs-3840x800.webp',
    },
    {
      title: 'HOME_CUSTOMER.DATAS.DATA3.TITLE',
      desc: 'HOME_CUSTOMER.DATAS.DATA3.DESCRIPTION',
      image:
        'https://xq-static-dev.newshore.es/media/vfqaqbe4/sxs-sunsave-banner-without-coins-3840x680.jpg',
    },
    {
      title: 'HOME_CUSTOMER.DATAS.DATA4.TITLE',
      desc: 'HOME_CUSTOMER.DATAS.DATA4.DESCRIPTION',
      image:
        'https://static.sunexpress.com/media/ombniusz/sxs-railfly-3840x800.webp',
    },
  ];
}
