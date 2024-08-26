import { Component } from '@angular/core';
import { CustomerStatsComponent } from './customer-stats/customer-stats/customer-stats.component';

@Component({
  selector: 'app-home-customer',
  standalone: true,
  imports: [CustomerStatsComponent],
  templateUrl: './home-customer.component.html',
  styleUrl: './home-customer.component.less'
})
export class HomeCustomerComponent {

}
