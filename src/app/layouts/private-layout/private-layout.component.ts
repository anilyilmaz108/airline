import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule, NzMenuThemeType } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SvgIconComponent } from 'angular-svg-icon';
import { ThemeService } from '../../services/theme.service';
import { FooterComponent } from './footer/footer.component';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment';
import { Auth, user } from '@angular/fire/auth';
import { appName } from '../../core/constants';
import { UserModel } from '../../models/user';
import { UserService } from '../../services/user.service';

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
    FooterComponent,
    NzBackTopModule,
    NzIconModule,
  ],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.less',
  host: { ngSkipHydration: 'true' },
})
export class PrivateLayoutComponent {
  themeService = inject(ThemeService);
  private fbAuth = inject(Auth);
  authService = inject(AuthService);
  userService = inject(UserService);

  router = inject(Router);
  airScore = 0;
  appName = appName;
  isCollapsed = false;
  isDarkMode: boolean;
  isEnglish = false;
  user!: UserModel;
  profilePhoto = "";

  constructor() {
    this.isDarkMode = this.themeService.isDarkMode();
    user(this.fbAuth).subscribe((fbuser: any) => {
      this.getUserData(this.fbAuth.currentUser?.uid!);
    
      // currentUser bilgisini yeniden yükleyip photoURL'yi güncelle
      if(this.fbAuth.currentUser) {
        this.profilePhoto = this.fbAuth.currentUser?.photoURL
      ? this.fbAuth.currentUser?.photoURL
      : "https://cdn-icons-png.freepik.com/512/6915/6915987.png";
      } else {
        this.profilePhoto = "https://cdn-icons-png.freepik.com/512/6915/6915987.png";
      }
    
    console.log(this.profilePhoto);
    this.user = this.authService.userSignal()!;
    });
    // console.log('FbUserSignal: ', this.user);
    // this.user = this.authService.userSignal()!;
    // console.log(user);
  }

  // Kullanıcı ID'sine göre User Çekme
  async getUserData(userId: string) {
    // Kullanıcı ID'si ile path oluşturuyoruz
    try {
      const userDoc = await this.userService.getUser(userId); // UserService'den çağırıyoruz
      userDoc.subscribe((data) => {
        this.authService.userSignal.set(data[0]);
        this.airScore = this.authService.userSignal()?.airScore!;
      });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }

  logout() {
    this.authService.logout();
    this.authService.userSignal.set(null);
    this.profilePhoto = "https://cdn-icons-png.freepik.com/512/6915/6915987.png";
  }
}
