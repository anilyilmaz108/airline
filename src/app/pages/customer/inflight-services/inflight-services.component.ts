import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-inflight-services',
  standalone: true,
  imports: [NzDividerModule, CommonModule, NzTypographyModule, NzImageModule],
  templateUrl: './inflight-services.component.html',
  styleUrl: './inflight-services.component.less'
})
export class InflightServicesComponent {
  data = [
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
  ];
}
