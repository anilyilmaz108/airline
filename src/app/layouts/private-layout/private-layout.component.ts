import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule, NzMenuThemeType } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SvgIconComponent } from 'angular-svg-icon';
import { ThemeService } from '../../services/theme.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    SvgIconComponent,
    FooterComponent
  ],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.css',
})
export class PrivateLayoutComponent {
  themeService = inject(ThemeService);
  isCollapsed = false;
  isDarkMode: boolean;

  constructor() {
    this.isDarkMode = this.themeService.isDarkMode();
  }
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.themeService.setDarkMode(this.isDarkMode);
  }
}
