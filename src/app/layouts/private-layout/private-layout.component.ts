import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
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
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../services/translate.service';

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
    TranslateModule
  ],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.less',
  host: { ngSkipHydration: 'true' },
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayoutComponent {
  themeService = inject(ThemeService);
  private fbAuth = inject(Auth);
  authService = inject(AuthService);
  userService = inject(UserService);
  //translate = inject(TranslateService);
  tranlationService = inject(TranslationService);

  router = inject(Router);
  airScore = 0;
  appName = appName;
  isCollapsed = false;
  isDarkMode: boolean;
  isEnglish = false;
  user!: UserModel;
  profilePhoto: string = "https://cdn-icons-png.freepik.com/512/6915/6915987.png";
  lang: string = "TR";


  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    
  }

  constructor() {
    this.tranlationService.initTranslate();
    this.isDarkMode = this.themeService.isDarkMode();
    effect(() => {
      if (this.authService.userSignal()) {
        this.user = this.authService.userSignal()!;
      } 
    });
    user(this.fbAuth).subscribe((fbuser: any) => {
      this.getUserData(this.fbAuth.currentUser?.uid!);
      // console.log('==>', this.authService.userSignal());
      // console.log('localStoreage', localStorage.getItem('user'));
      // currentUser bilgisini yeniden yükleyip photoURL'yi güncelle

      if(this.fbAuth.currentUser !== null && localStorage.getItem('user') !== null){
        const userObject = JSON.parse(localStorage.getItem('user')!); 
          this.authService.userSignal.set(userObject);
          // console.log('storageJson', this.authService.userSignal());
      }

      if(this.fbAuth.currentUser) {
        this.profilePhoto = this.fbAuth.currentUser?.photoURL
      ? this.fbAuth.currentUser?.photoURL
      : "https://cdn-icons-png.freepik.com/512/6915/6915987.png";
      } else {
        this.profilePhoto = "https://cdn-icons-png.freepik.com/512/6915/6915987.png";
      }
    
    // console.log('layout-profile', this.profilePhoto);
    this.user = this.authService.userSignal()!;
    // console.log('layout-user', this.authService.userSignal(), 'fb', this.fbAuth.currentUser);
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

  toggleLanguage(val: string) {
    this.isEnglish = !this.isEnglish;
    this.tranlationService.changeLanguage(val);
    this.lang = val;
  }

  logout() {
    this.authService.logout();
    //this.authService.userSignal.set(null);
    this.profilePhoto = "https://cdn-icons-png.freepik.com/512/6915/6915987.png";
  }
}
