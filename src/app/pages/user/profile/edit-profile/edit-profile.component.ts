import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NZ_MODAL_DATA, NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import {
  AuthService,
  ErrorService,
  SuccessService,
  UserService,
} from '../../../../services';
import { UserModel } from '../../../../models/user';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    NzFormModule,
    CommonModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzModalModule,
    TranslateModule,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.less',
  host: { ngSkipHydration: 'true' },
})
export class EditProfileComponent {
  nzModalData = inject(NZ_MODAL_DATA);
  nzModalRef = inject(NzModalRef);
  authService = inject(AuthService);
  userService = inject(UserService);
  successService = inject(SuccessService);
  errorService = inject(ErrorService);
  user!: UserModel;

  title = this.nzModalData.title;
  desc = this.nzModalData.desc;
  id = this.nzModalData.id;

  fb = inject(NonNullableFormBuilder);

  ngOnInit(): void {
    this.user = this.authService.userSignal()!;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  validateForm: FormGroup<{
    title: FormControl<string>;
    desc: FormControl<string>;
  }> = this.fb.group({
    title: [this.title, [Validators.required]],
    desc: [this.desc, [Validators.required]],
  });

  async submitForm() {
    //console.log('submit', this.validateForm.value);
    var key = this.validateForm.value.title;
    const value = this.validateForm.value.desc;

    if (key === 'Email') {
      key = 'email';
    } else if (key === 'Parola') {
      key = 'pass';
    } else if (key === 'İsim') {
      key = 'firstName';
    } else if (key === 'Soyisim') {
      key = 'lastName';
    } else if (key === 'Cep Telefonu') {
      key = 'phone';
    } else if (key === 'Cinsiyet') {
      key = 'gender';
    } else if (key === 'Doğum Tarihi') {
      key = 'birth';
    } else if (key === 'TC Kimlik No') {
      key = 'TCID';
    } else if (key === 'Uyruk') {
      key = 'nationality';
    } else {
      // console.log(key);
    }

    // Dinamik key kullanarak nesneyi oluşturuyoruz
    const updateData = {
      [key!]: value,
    };

    await this.userService
      .update(this.id!, updateData)
      .then(async () => {
        // console.log('Update İşlemi');
        await this.getUserData(this.id);
        this.nzModalRef.destroy();
        // this.cdr.detectChanges();
        this.successService.successHandler(200);
      })
      .catch(() => {
        this.errorService.errorHandler(0);
      });
  }

  async getUserData(userId: string) {
    // Kullanıcı ID'si ile path oluşturuyoruz
    try {
      const userDoc = await this.userService.getDocumentData(userId); // UserService'den çağırıyoruz
      userDoc.subscribe((data) => {
        this.authService.userSignal.set(data[0]);
      });
    } catch (error) {
      // console.error('Error fetching user:', error);
    }
  }
}
