import { Component } from '@angular/core';
import { CustomerStatsComponent } from './customer-stats/customer-stats/customer-stats.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [CustomerStatsComponent, FindFlightComponent, NzCardModule, NzCarouselModule, NzSkeletonModule, NzTypographyModule],
  templateUrl: './home-customer.component.html',
  styleUrl: './home-customer.component.less',
  host: {ngSkipHydration: 'true'},

})
export class HomeCustomerComponent {
  array = [
    {
      title: "Kış kaçamağınızı erkenden planlayın ve Antalya'yı daha ucuza keşfedin!",
      desc: "59,99€‘dan başlayan fiyatlarla",
      image: "https://static.sunexpress.com/media/wvvbic3e/sxs-zeynep-desktop-3840x800.webp", 
    },
    {
      title: "SunSave: sınırlı sayıda yerimiz var!",
      desc: "İzmir ve Anadolu bagaj dahil 79,99€.",
      image: "https://static.sunexpress.com/media/cwwgr4b5/hp-banner-thumbs-3840x800.webp", 
    },
    {
      title: "Uçağınıza giden treni kaçırmayın!",
      desc: "39,99€‘dan başlayan fiyatlarla",
      image: "https://xq-static-dev.newshore.es/media/vfqaqbe4/sxs-sunsave-banner-without-coins-3840x680.jpg",
    },
    {
      title: "Seyahat Planlayıcısı",
      desc: "19,99€‘dan başlayan fiyatlarla",
      image: "https://static.sunexpress.com/media/ombniusz/sxs-railfly-3840x800.webp", 
    }
  ];
}
