import { Component } from '@angular/core';
import { CustomerStatsComponent } from './customer-stats/customer-stats/customer-stats.component';
import { FindFlightComponent } from './find-flight/find-flight.component';

@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [CustomerStatsComponent, FindFlightComponent],
  templateUrl: './home-customer.component.html',
  styleUrl: './home-customer.component.less'
})
export class HomeCustomerComponent {

}
