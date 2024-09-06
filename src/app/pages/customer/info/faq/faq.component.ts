import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NzTypographyComponent, NzCollapseModule, TranslateModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.less',
})
export class FaqComponent {
  panels = [
    {
      active: true,
      disabled: false,
      name: 'FAQ.DATAS.DATA1.QUESTION',
      description: 'FAQ.DATAS.DATA1.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA2.QUESTION',
      description: 'FAQ.DATAS.DATA2.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA3.QUESTION',
      description: 'FAQ.DATAS.DATA3.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA4.QUESTION',
      description: 'FAQ.DATAS.DATA4.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA5.QUESTION',
      description: 'FAQ.DATAS.DATA5.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA6.QUESTION',
      description: 'FAQ.DATAS.DATA6.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA7.QUESTION',
      description: 'FAQ.DATAS.DATA7.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA8.QUESTION',
      description: 'FAQ.DATAS.DATA8.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA9.QUESTION',
      description: 'FAQ.DATAS.DATA9.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'FAQ.DATAS.DATA10.QUESTION',
      description: 'FAQ.DATAS.DATA10.ANSWER',
    },
  ];
}
