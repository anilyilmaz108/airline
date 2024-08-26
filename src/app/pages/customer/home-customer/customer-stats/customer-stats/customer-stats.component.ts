import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@Component({
  selector: 'app-customer-stats',
  standalone: true,
  imports: [NzCardModule,CommonModule, NzGridModule, NzStatisticModule, NzSkeletonModule],
  templateUrl: './customer-stats.component.html',
  styleUrl: './customer-stats.component.less'
})
export class CustomerStatsComponent {

}
