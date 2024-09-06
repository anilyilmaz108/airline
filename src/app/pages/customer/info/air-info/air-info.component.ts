import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-air-info',
  standalone: true,
  imports: [
    NzTypographyModule,
    NzTimelineModule,
    NzIconModule,
    NzBadgeModule,
    NzCardModule,
    NzGridModule,
    TranslateModule,
  ],
  templateUrl: './air-info.component.html',
  styleUrl: './air-info.component.less',
})
export class AirInfoComponent {}
