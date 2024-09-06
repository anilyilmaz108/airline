import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Observable, Observer } from 'rxjs';
import { ErrorService, HelpContactService, SuccessService } from '../../../../services';
import { generateId } from '../../../../helpers/generate-id';
import { HelpContact } from '../../../../models/help-contact';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-help-contact',
  standalone: true,
  imports: [
    NzTypographyModule,
    NzImageModule,
    RouterLink,
    NzStatisticModule,
    NzCardModule,
    NzSkeletonModule,
    NzGridModule,
    CommonModule,
    NzDividerModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    TranslateModule
  ],
  templateUrl: './help-contact.component.html',
  styleUrl: './help-contact.component.less',
})
export class HelpContactComponent {
  helpContactService = inject(HelpContactService);
  errorService = inject(ErrorService);
  successService = inject(SuccessService);

  validateForm: FormGroup<{
    userName: FormControl<string>;
    email: FormControl<string>;
    comment: FormControl<string>;
  }>;

  submitForm(): void {
    //console.log('submit', this.validateForm.value);
    try {
      const data: HelpContact = {
        "id": generateId.generateUniqueId(10),
        "fullName": this.validateForm.value.userName,
        "email": this.validateForm.value.email,
        "comment": this.validateForm.value.comment,
        "operationDate": Date.now()
      }
  
      this.helpContactService.add(data);
      this.successService.successHandler(200);
      this.validateForm.reset();
    } catch (err) {
      console.log(err);
      this.errorService.errorHandler(5);
    }
  }


  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', [Validators.required]],
    });
  }
}
