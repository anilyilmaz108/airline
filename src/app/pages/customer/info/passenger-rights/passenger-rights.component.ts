import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
@Component({
  selector: 'app-passenger-rights',
  standalone: true,
  imports: [NzDividerModule, CommonModule, NzTypographyModule, NzImageModule, RouterLink],
  templateUrl: './passenger-rights.component.html',
  styleUrl: './passenger-rights.component.less'
})
export class PassengerRightsComponent {
  data = [
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
  ];
}
