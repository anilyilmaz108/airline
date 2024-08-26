import { Component } from '@angular/core';
import { CustomerStatsComponent } from './customer-stats/customer-stats/customer-stats.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [CustomerStatsComponent, FindFlightComponent, NzCardModule, NzCarouselModule, NzSkeletonModule],
  templateUrl: './home-customer.component.html',
  styleUrl: './home-customer.component.less',
  host: {ngSkipHydration: 'true'},

})
export class HomeCustomerComponent {
  array = [1, 2, 3, 4];
}
