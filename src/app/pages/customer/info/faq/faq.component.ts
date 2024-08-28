import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NzTypographyComponent, NzCollapseModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.less'
})
export class FaqComponent {
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
      active: false,
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
