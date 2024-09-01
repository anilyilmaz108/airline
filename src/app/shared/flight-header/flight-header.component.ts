import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-flight-header',
  standalone: true,
  imports: [NzCardModule, NzPageHeaderModule, NzSpaceModule],
  templateUrl: './flight-header.component.html',
  styleUrl: './flight-header.component.less'
})
export class FlightHeaderComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() price: number = 0;

}
