import { Component } from '@angular/core';
import { CustomerStatsComponent } from '../../customer/home-customer/customer-stats/customer-stats/customer-stats.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CustomerStatsComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.less'
})
export class AdminHomeComponent {

}
