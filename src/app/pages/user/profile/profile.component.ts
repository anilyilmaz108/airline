import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTypographyComponent } from 'ng-zorro-antd/typography';
import { AuthService } from '../../../services/auth.service';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { UserModel } from '../../../models/user';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UserService } from '../../../services';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NzTypographyComponent,
    CommonModule,
    NzCardModule,
    NzIconModule,
    NzContentComponent,
    NzModalModule,
    NzDescriptionsModule,
    NzProgressModule,
    NzTableModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less',

})
export class ProfileComponent {
  userPhotos = false;
  loading = false;
  profileRate = 100;

  authService = inject(AuthService);
  modalService = inject(NzModalService);
  userService = inject(UserService);
  user!: UserModel;

  data: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // console.log(this.authService.userSignal());
    this.user = this.authService.userSignal()!;
    console.log('Profil', this.user);
   /** this.userService.getUser(this.user.id!).then((data) => {
      data.subscribe((val) => {
        console.log(val[0]);
        this.user = val[0];
      });
    }); */

    this.data = [
      {
        title: 'Email',
        desc:
          this.user &&
          (this.user.email === '' ||
            this.user.email === undefined ||
            this.user.email === null)
            ? '-'
            : this.user.email,
      },
      {
        title: 'Parola',
        desc:
          this.user &&
          (this.user.pass === '' ||
            this.user.pass === undefined ||
            this.user.pass === null)
            ? '-'
            : this.user.pass,
      },
      {
        title: 'İsim',
        desc:
          this.user &&
          (this.user.firstName === '' ||
            this.user.firstName === undefined ||
            this.user.firstName === null)
            ? '-'
            : this.user.firstName,
      },
      {
        title: 'Soyisim',
        desc:
          this.user &&
          (this.user.lastName === '' ||
            this.user.lastName === undefined ||
            this.user.lastName === null)
            ? '-'
            : this.user.lastName,
      },
      {
        title: 'Cep Telefonu',
        desc:
          this.user &&
          (this.user.phone === '' ||
            this.user.phone === undefined ||
            this.user.phone === null)
            ? '-'
            : this.user.phone,
      },
      {
        title: 'Cinsiyet',
        desc:
          this.user &&
          (this.user.gender === '' ||
            this.user.gender === undefined ||
            this.user.gender === null)
            ? '-'
            : this.user.gender,
      },
      {
        title: 'Doğum Tarihi',
        desc:
          this.user &&
          (this.user.birth === undefined || this.user.birth === null)
            ? '-'
            : this.user.birth,
      },
      {
        title: 'TC Kimlik No',
        desc:
          this.user &&
          (this.user.TCID === '' ||
            this.user.TCID === undefined ||
            this.user.TCID === null)
            ? '-'
            : this.user.TCID,
      },
      {
        title: 'Uyruk',
        desc:
          this.user &&
          (this.user.nationality === '' ||
            this.user.nationality === undefined ||
            this.user.nationality === null)
            ? '-'
            : this.user.nationality,
      },
    ];
    /** this.data.push(
      "Email",
      );
    this.userInfo.push(
      this.user && (this.user.email === "" || this.user.email === undefined || this.user.email === null) ? "" : this.user.email,
    ); */
    // console.log(this.user);
    this.getProfileRate();
    // this.userService.update(this.user.id!, {"firstName": "anil"});
   
  }

  edit(title: string, desc: string): void {
    this.modalService.create({
      nzTitle: 'Profil Güncelle',
      nzContent: EditProfileComponent,
      nzData: {id: this.user.id, title: title, desc: desc}
    });
    /**this.modalService.afterAllClose.subscribe(result => {
      this.user = this.authService.userSignal()!;
      console.log('user yeniden atandı');
    });  */
    this.modalService.afterAllClose.subscribe(result => {
      this.userService.getUser(this.user.id!).subscribe((data) => {
        this.user = {
          "TCID" : data[0].TCID,
          "active" : data[0].active, 
          "birth" : data[0].birth,
          "created_at" : data[0].created_at,
          "email" : data[0].email,
          "firstName" : data[0].firstName,
          "gender" : data[0].gender,
          "id" : data[0].id,
          "lastName" : data[0].lastName,
          "nationality": data[0].nationality,
          "pass": data[0].pass,
          "phone": data[0].phone,
          "role": data[0].role
        }
        this.authService.userSignal.set(this.user);
        console.log('signalle', this.authService.userSignal());
        this.cdr.detectChanges();
        this.data = [
          {
            title: 'Email',
            desc:
              this.user &&
              (this.user.email === '' ||
                this.user.email === undefined ||
                this.user.email === null)
                ? '-'
                : this.user.email,
          },
          {
            title: 'Parola',
            desc:
              this.user &&
              (this.user.pass === '' ||
                this.user.pass === undefined ||
                this.user.pass === null)
                ? '-'
                : this.user.pass,
          },
          {
            title: 'İsim',
            desc:
              this.user &&
              (this.user.firstName === '' ||
                this.user.firstName === undefined ||
                this.user.firstName === null)
                ? '-'
                : this.user.firstName,
          },
          {
            title: 'Soyisim',
            desc:
              this.user &&
              (this.user.lastName === '' ||
                this.user.lastName === undefined ||
                this.user.lastName === null)
                ? '-'
                : this.user.lastName,
          },
          {
            title: 'Cep Telefonu',
            desc:
              this.user &&
              (this.user.phone === '' ||
                this.user.phone === undefined ||
                this.user.phone === null)
                ? '-'
                : this.user.phone,
          },
          {
            title: 'Cinsiyet',
            desc:
              this.user &&
              (this.user.gender === '' ||
                this.user.gender === undefined ||
                this.user.gender === null)
                ? '-'
                : this.user.gender,
          },
          {
            title: 'Doğum Tarihi',
            desc:
              this.user &&
              (this.user.birth === undefined || this.user.birth === null)
                ? '-'
                : this.user.birth,
          },
          {
            title: 'TC Kimlik No',
            desc:
              this.user &&
              (this.user.TCID === '' ||
                this.user.TCID === undefined ||
                this.user.TCID === null)
                ? '-'
                : this.user.TCID,
          },
          {
            title: 'Uyruk',
            desc:
              this.user &&
              (this.user.nationality === '' ||
                this.user.nationality === undefined ||
                this.user.nationality === null)
                ? '-'
                : this.user.nationality,
          },
        ];
        this.getProfileRate();
      });
    });
  }

  /// 9 veri data arrayden 1 veri profil fotodan
  getProfileRate() {
    var rate = 0;
    if (this.user) {
      this.user.email === '' ||
      this.user.email === undefined ||
      this.user.email === null
        ? (rate += 0)
        : (rate += 10);
      this.user.pass === '' ||
      this.user.pass === undefined ||
      this.user.pass === null
        ? (rate += 0)
        : (rate += 10);
      this.user.firstName === '' ||
      this.user.firstName === undefined ||
      this.user.firstName === null
        ? (rate += 0)
        : (rate += 10);
      this.user.lastName === '' ||
      this.user.lastName === undefined ||
      this.user.lastName === null
        ? (rate += 0)
        : (rate += 10);
      this.user.phone === '' ||
      this.user.phone === undefined ||
      this.user.phone === null
        ? (rate += 0)
        : (rate += 10);
      this.user.gender === '' ||
      this.user.gender === undefined ||
      this.user.gender === null
        ? (rate += 0)
        : (rate += 10);
      this.user.birth === undefined || this.user.birth === null
        ? (rate += 0)
        : (rate += 10);
      this.user.TCID === '' ||
      this.user.TCID === undefined ||
      this.user.TCID === null
        ? (rate += 0)
        : (rate += 10);
      this.user.nationality === '' ||
      this.user.nationality === undefined ||
      this.user.nationality === null
        ? (rate += 0)
        : (rate += 10);
      this.userPhotos ? (rate += 10) : (rate += 0);
      this.profileRate = rate;
    } else {
      this.profileRate = 100;
    }
  }


  async getUserData(userId: string) {
    // Kullanıcı ID'si ile path oluşturuyoruz
    try {
      const userDoc = await this.userService.getDocumentData(userId); // UserService'den çağırıyoruz
      userDoc.subscribe((data) => {
        this.authService.userSignal.set(data[0]);
        this.user = this.authService.userSignal()!;
      });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }
}
