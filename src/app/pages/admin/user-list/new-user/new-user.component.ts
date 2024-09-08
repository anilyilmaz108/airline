import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NZ_MODAL_DATA, NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AuthService, ErrorService, SuccessService, UserService } from '../../../../services';
import { generateDate, generateId } from '../../../../helpers';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzFormModule, NzGridModule, NzModalModule, NzLayoutModule, NzInputNumberModule, NzInputModule, NzSelectModule, NzCheckboxModule, NzButtonModule, NzDatePickerModule, NzInputNumberModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.less'
})
export class NewUserComponent {
  registrationForm!: FormGroup;
  errorService = inject(ErrorService);
  successService = inject(SuccessService);
  userService = inject(UserService);
  nzModalData = inject(NZ_MODAL_DATA);
  fb = inject(FormBuilder);
  nzModalRef = inject(NzModalRef);
  authService = inject(AuthService);
  auth = inject(Auth);
  
  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  destroyModal(): void {
    this.nzModalRef.destroy();
  }


  buildForm() {

      this.registrationForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        role: ['', Validators.required],
        gender: ['', Validators.required],
        birth: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        phone: ['', Validators.required],
        nationality: ['', Validators.required],
        airScore: [0, [Validators.required, Validators.min(0)]],
        active: [false],
        TCID: ['', Validators.required]
      });

    if(this.nzModalData.data !== null) {
      {
        this.registrationForm = this.fb.group({
          firstName: [this.nzModalData.data.firstName, Validators.required],
          lastName: [this.nzModalData.data.lastName, Validators.required],
          role: [this.nzModalData.data.role, Validators.required],
          gender: [this.nzModalData.data.gender, Validators.required],
          birth: [generateDate.convertTimestampToDate(this.nzModalData.data.birth), Validators.required],
          email: [this.nzModalData.data.email, [Validators.required, Validators.email]],
          password: [this.nzModalData.data.pass, [Validators.required, Validators.minLength(6)]],
          phone: [this.nzModalData.data.phone, Validators.required],
          nationality: [this.nzModalData.data.nationality, Validators.required],
          airScore: [this.nzModalData.data.airScore, [Validators.required, Validators.min(0)]],
          active: [this.nzModalData.data.active],
          TCID: [this.nzModalData.data.TCID, Validators.required]
        });
      }
    }
  }

  async onSubmit() {
    if (this.registrationForm.valid) {
      if(this.nzModalData.data == null) {
        const randomID = generateId.generateUniqueId(10);
        await this.authService.fbRegister(this.registrationForm.value.email, this.registrationForm.value.password)
        const userData = {
          id: randomID,
          role: this.registrationForm.value.role,
          firstName: this.registrationForm.value.firstName, 
          lastName: this.registrationForm.value.lastName,  
          gender: this.registrationForm.value.gender, 
          phone: this.registrationForm.value.phone, 
          birth: this.registrationForm.value.birth, 
          nationality: this.registrationForm.value.nationality,  
          TCID: this.registrationForm.value.TCID, 
          created_at: Date.now(),
          active: this.registrationForm.value.active,
          email: this.registrationForm.value.email, 
          pass: this.registrationForm.value.password, 
          airScore: this.registrationForm.value.airScore
        }
        await this.userService.addDataWithCustomDocId(userData, randomID).then(() => {
          this.successService.successHandler(205);
          this.nzModalRef.destroy();
        }).catch((err) => {

        });
      } else {
        const userData = {
          id: this.nzModalData.data.id,
          role: this.registrationForm.value.role,
          firstName: this.registrationForm.value.firstName, 
          lastName: this.registrationForm.value.lastName,  
          gender: this.registrationForm.value.gender, 
          phone: this.registrationForm.value.phone, 
          birth: this.registrationForm.value.birth, 
          nationality: this.registrationForm.value.nationality,  
          TCID: this.registrationForm.value.TCID, 
          created_at: Date.now(),
          active: this.registrationForm.value.active,
          email: this.registrationForm.value.email, 
          pass: this.registrationForm.value.password, 
          airScore: this.registrationForm.value.airScore
        }
        console.log(this.nzModalData.data.id);
        await this.userService.update(this.nzModalData.data.id, userData).then(() => {
          this.successService.successHandler(206);
          this.nzModalRef.destroy();
        }).catch(err => {
          console.log(err);
        });
      }
      //console.log(this.registrationForm.value);
     
    } else {
      
      // this.nzModalRef.destroy();
    }
  }
}
