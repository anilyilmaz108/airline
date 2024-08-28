import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [NzTypographyComponent, NzCollapseModule],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.less'
})
export class GeneralInfoComponent {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    },
    {
      active: true,
      name: 'This is panel header 4',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 5'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 6'
    }
  ];
}
