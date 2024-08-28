import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzFooterComponent } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NzFooterComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {

}
