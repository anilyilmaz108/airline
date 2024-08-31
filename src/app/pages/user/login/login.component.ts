import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RegisterComponent } from '../register/register.component';
import { appName } from '../../../core/constants';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    RegisterComponent,
    NzTypographyModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
  host: {ngSkipHydration: 'true'},
})
export class LoginComponent {
    appName = appName;
    formBuilder = inject(FormBuilder);
    authService = inject(AuthService);
    userService = inject(UserService);
    private fbAuth = inject(Auth);

    form!: FormGroup;

    ngOnInit(): void {
      this.buildForm();
    }
 
    buildForm() {
      this.form = this.formBuilder.group({
        email: [
          environment.testEmail,
          [Validators.required, Validators.minLength(2), Validators.email],
        ],
        pass: [
          environment.testPass,
          [Validators.required, Validators.minLength(6)],
        ],
        rememberMe: false,
      });
    }

 

 
  async submitForm() {
    await this.authService.fbLogin(this.form.controls['email'].value,this.form.controls['pass'].value);
    await this.getUserData(this.fbAuth.currentUser?.uid!);
    // console.log('Get User:', this.authService.userSignal());
    console.log('FB login işlemi yapıldı');
    this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }

    // Kullanıcı ID'sine göre User Çekme
    async getUserData(userId: string) {
      // Kullanıcı ID'si ile path oluşturuyoruz
       try {
         const userDoc = await this.userService.get(userId);  // UserService'den çağırıyoruz
         if (userDoc.exists()) {
           // console.log('User Data:', userDoc.data());  // Veriyi konsola yazdırıyoruz
           this.authService.userSignal.set(userDoc.data());
           
         } else {
           console.log('No such document!');
         }
       } catch (error) {
         console.error('Error fetching user:', error);
       }
     }


}

