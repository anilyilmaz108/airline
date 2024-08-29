import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { appName } from '../../../core/constants';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    RegisterComponent,
    NzTypographyModule,
    LoginComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less',
  host: {ngSkipHydration: 'true'},

})
export class RegisterComponent {

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  error = '';
  appName = appName;
  

  confirmValidator: ValidatorFn = (control: AbstractControl) => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.form.controls.pass.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  form = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      rePass: ['', [this.confirmValidator]],
      confirmPrivacy: ['', [Validators.requiredTrue]],
    }
  );


  submitForm() {
    this.authService.fbRegister(this.form.controls['email'].value!,this.form.controls['pass'].value!);
    console.log('FB register işlemi yapıldı');
    this.resetForm();
  }

  resetForm() {
    this.form.reset();
  }


}


