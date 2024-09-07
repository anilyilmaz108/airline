import { Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { CustomerStatsComponent } from '../../customer/home-customer/customer-stats/customer-stats/customer-stats.component';
import { CommonModule } from '@angular/common';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { NzCardModule } from 'ng-zorro-antd/card';
import * as ApexCharts from 'apexcharts';
import { TranslateModule } from '@ngx-translate/core';
import { AdminService } from '../../../services';
import { generateDate } from '../../../helpers';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { addDays, formatDistance } from 'date-fns';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NzSpinModule } from 'ng-zorro-antd/spin';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  title: ApexTitleSubtitle;
  chart: any;
  xaxis: ApexXAxis;
  stroke: any;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    CustomerStatsComponent,
    CommonModule,
    NgApexchartsModule,
    NzCardModule,
    TranslateModule,
    NzTypographyModule,
    NzListModule,
    NzCommentModule,
    NzAvatarModule,
    NzDividerModule,
    NzButtonModule,
    NzSpinModule
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.less',
})
export class AdminHomeComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  adminService = inject(AdminService);
  router = inject(Router);
  destroyRef = inject(DestroyRef)

  flightList: any = [];
  userList: any = [];
  dateList: any = [];
  commentList: any = [];
  chartLoading!: boolean;
  commentLoading!: boolean;

  constructor() {
    this.getChartData();
    this.chartOptions = {
      series: [
        {
          name: 'Kullanıcılar',
          data: this.userList,
        },
        {
          name: 'Uçuşlar',
          data: this.flightList,
        },
      ],
      title: {
        text: 'Kullanıcılar & Uçuşlar',
      },
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: this.dateList,
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }

  ngOnInit(): void {
    this.getComment();    
  }

  // Chart verilerini çağıralım
  getChartData() {
    this.chartLoading = true;
    this.adminService.getStats().pipe(takeUntilDestroyed(this.destroyRef), take(1)).subscribe((data) => {
      data.map((value) => {
        this.flightList.push(value.flightCount);
        this.userList.push(value.userCount);
        this.dateList.push(generateDate.convertTimestampToISO(value.date));
      });
      this.chartLoading = false;
    });
  }

  // Commentleri çağıralım
  getComment(){
    this.commentLoading = true;
    this.adminService.getTwoComments().pipe(takeUntilDestroyed(this.destroyRef), take(1)).subscribe((data) => {
      this.commentList = data;
      this.commentLoading = false;
    })
  }

  seeAll() {
    this.router.navigateByUrl('/admin/user-comment');
  }

}
