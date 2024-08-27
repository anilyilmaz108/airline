import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-flex-reservation',
  standalone: true,
  imports: [NzDividerModule, CommonModule, NzTypographyModule, NzImageModule],
  templateUrl: './flex-reservation.component.html',
  styleUrl: './flex-reservation.component.less'
})
export class FlexReservationComponent {
  data = [
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
  ];
}
