import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-baggage-allowance',
  standalone: true,
  imports: [NzInputModule, NzButtonModule, NzDescriptionsModule, NzTypographyModule, NzDividerModule, CommonModule],
  templateUrl: './baggage-allowance.component.html',
  styleUrl: './baggage-allowance.component.less',
  host: { ngSkipHydration: 'true' },
})
export class BaggageAllowanceComponent {
  findFlight() {
    console.log('Uçuş aranıyor..');
  }

  data = [
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
    "Satın alınmış ek bagaj paketleri iade edilemez ve bagaj hakkı başka kişilere devredilemez.",
  ];
}
