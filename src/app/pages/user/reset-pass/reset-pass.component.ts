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
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
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
  templateUrl: './reset-pass.component.html',
  styleUrl: './reset-pass.component.less'
})
export class ResetPassComponent {
  appName = appName;
    formBuilder = inject(FormBuilder);
    authService = inject(AuthService);
    private router = inject(Router);

    form!: FormGroup;

    ngOnInit(): void {
      this.buildForm();
    }
 
    buildForm() {
      this.form = this.formBuilder.group({
        email: [
          '',
          [Validators.required, Validators.minLength(2), Validators.email],
        ]
      });
    }

    submitForm() {
      this.authService.fbResetPassword(this.form.controls['email'].value);
      console.log('FB reset-pass işlemi yapıldı');
      this.resetForm();
      this.router.navigateByUrl('/user/login');
    }
  
    resetForm() {
      this.form.reset();
    }
}
