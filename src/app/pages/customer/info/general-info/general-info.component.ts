import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [NzTypographyComponent, NzCollapseModule, TranslateModule],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.less',
})
export class GeneralInfoComponent {
  panels = [
    {
      active: true,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA1.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA1.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA2.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA2.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA3.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA3.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA4.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA4.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA5.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA5.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA6.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA6.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA7.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA7.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA8.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA8.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA9.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA9.ANSWER',
    },
    {
      active: false,
      disabled: false,
      name: 'GENERAL_INFO.DATAS.DATA10.QUESTION',
      description: 'GENERAL_INFO.DATAS.DATA10.ANSWER',
    },
  ];
}
