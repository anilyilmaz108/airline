import { CommonModule } from '@angular/common';
import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AuthService, ErrorService, SuccessService, UserService } from '../../../services';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NzCustomColumn } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { generateDate } from '../../../helpers';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NewUserComponent } from './new-user/new-user.component';
import * as XLSX from 'xlsx';
import { adminSignal, isSimulate } from '../../../core/data-values';
import { UserModel } from '../../../models';
import { Router } from '@angular/router';


interface CustomColumn extends NzCustomColumn {
  name: string;
  required?: boolean;
  position?: 'left' | 'right';
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NzPageHeaderModule,
    CommonModule,
    NzLayoutModule,
    NzModalModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    DragDropModule,
    NzIconModule,
    NzToolTipModule,
    NzTypographyModule,
    NzTagModule,
    NzPopconfirmModule,
    NzCardModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.less',
})
export class UserListComponent {
  list!: any[];
  filteredList: any[] = [];
  isActiveList = false;

  userLoading = false;

  checked = false;
  loading = false;
  indeterminate = false;
  setOfCheckedId = new Set<number>();

  userService = inject(UserService);
  modalService = inject(NzModalService);
  errorService = inject(ErrorService);
  successService = inject(SuccessService);
  authService = inject(AuthService);
  router = inject(Router);

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
   
  }

  onAllChecked(checked: boolean): void {
    this.list
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
  }

  // Çoklu sil
  async sendRequest(): Promise<void> {
    const requestData = this.list.filter(data => this.setOfCheckedId.has(data.id));
    for (const arr of requestData) {
      try {
        // console.log(arr.id);
        await this.userService.delete(arr.id);
      } catch (error) {
        // console.error("Error deleting data:", error);
      }
    }
    this.setOfCheckedId.clear();
    this.successService.successHandler(207);
  }

  // Excel İndir
  exportCSV() {
    /* pass here the table id */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.list);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'kullanici_listesi.xlsx');
  }

  // Aktifleri göster-gizle
  showActiveUser(){
    this.isActiveList = !this.isActiveList;
    if(this.isActiveList){
      this.filteredList = this.list.filter(item => item.active === true);
      this.list = this.filteredList;
    } else {
      this.getUsers();
    }
  }

  getUsers() {
    this.userLoading = true;
    let filterID = 1;
    this.userService.getAll().subscribe((data) => {
      this.list = data;
      this.list = data.map(item => {
        return {
          ...item, // Mevcut veriyi koruyoruz
          filterID: filterID++ // filterID'yi ekleyip her defasında artırıyoruz
        };
      });
      this.userLoading = false;
      // console.log(this.list);
    });
  }

  cancel(): void {
    // console.log('canceled');
  }

  confirm(id: string): void {
    // console.log('deleted');
    this.userService.delete(id).then(() => {
      this.successService.successHandler(204);
    });
  }

  listOfColumns = [
    {
      name: 'İsim',
      sortOrder: null,
      cellControll: "firstName",
      sortFn: (a: any, b: any) => a.firstName.localeCompare(b.firstName),
      filterFn: (list: string[], item: any) => list.some(firstName => item.firstName.indexOf(firstName) !== -1)
    },
    {
      name: 'Soyisim',
      sortOrder: null,
      cellControll: "lastName",
      sortFn: (a: any, b: any) => a.lastName.localeCompare(b.lastName),
      filterFn: (list: string[], item: any) => list.some(lastName => item.lastName.indexOf(lastName) !== -1)
    },
    {
      name: 'Rol',
      sortOrder: null,
      cellControll: "role",
      sortFn: (a: any, b: any) => a.role.localeCompare(b.role),
      filterFn: (list: string[], item: any) => list.some(role => item.role.indexOf(role) !== -1)
    },
    {
      name: 'Cinsiyet',
      sortOrder: null,
      cellControll: "gender",
      sortFn: (a: any, b: any) => a.gender.localeCompare(b.gender),
      filterFn: (list: string[], item: any) => list.some(role => item.role.indexOf(role) !== -1)
    },
    {
      name: 'Email',
      sortOrder: null,
      cellControll: "email",
      sortFn: (a: any, b: any) => a.email.localeCompare(b.email),
      filterFn: (list: string[], item: any) => list.some(email => item.email.indexOf(email) !== -1)
    },
    {
      name: 'Telefon',
      sortOrder: null,
      cellControll: "phone",
      sortFn: (a: any, b: any) => a.phone.localeCompare(b.phone),
      filterFn: (list: string[], item: any) => list.some(phone => item.phone.indexOf(phone) !== -1)
    },
    {
      name: 'Uyruk',
      sortOrder: null,
      cellControll: "nationality",
      sortFn: (a: any, b: any) => a.nationality.localeCompare(b.nationality),
      filterFn: (list: string[], item: any) => list.some(nationality => item.nationality.indexOf(nationality) !== -1)
    },
    {
      name: 'Air Puan',
      sortOrder: null,
      cellControll: "airScore",
      sortFn: (a: any, b: any) => a.airScore - b.airScore, // Sayısal sıralama için doğrudan çıkarma işlemi
      filterFn: (list: number[], item: any) => list.some(airScore => item.airScore === airScore) // Sayısal karşılaştırma
    },
    {
      name: 'Aktiflik',
      sortOrder: null,
      cellControll: "active",
      sortFn: (a: any, b: any) => Number(b.active) - Number(a.active), // Booleanları sayıya çevirip sıralama yapıyoruz
      filterFn: (list: boolean[], item: any) => list.some(active => item.active === active) // Boolean karşılaştırma
    },    

    {
      name: 'Action',
      sortOrder: null,
      cellControll: "action",
      sortFn: (a: any, b: any) => a.name.localeCompare(b.name),
      filterFn: (list: string[], item: any) => list.some(name => item.name.indexOf(name) !== -1)
    },
  ]

  customColumn: CustomColumn[] = [
    {
      name: 'İsim',
      value: 'firstName',
      default: true,
      required: true,
      position: 'left',
      width: 200,
      fixWidth: true
    },
    {
      name: 'Soyisim',
      value: 'lastName',
      default: true,
      width: 200
    },
    {
      name: 'Rol',
      value: 'role',
      default: true,
      width: 200
    },
    {
      name: 'Cinsiyet',
      value: 'gender',
      default: true,
      width: 200
    },
    {
      name: 'Email',
      value: 'email',
      default: true,
      width: 200
    },
    {
      name: 'Telefon',
      value: 'phone',
      default: true,
      width: 200
    },
    {
      name: 'Uyruk',
      value: 'nationality',
      default: true,
      width: 200
    },
    {
      name: 'Air Puan',
      value: 'airScore',
      default: true,
      width: 200
    },
    {
      name: 'Aktiflik',
      value: 'active',
      default: true,
      width: 200
    },

    {
      name: 'Action',
      value: 'action',
      default: true,
      required: true,
      position: 'right',
      width: 200
    }
  ];

  isVisible: boolean = false;
  title: CustomColumn[] = [];
  footer: CustomColumn[] = [];
  fix: CustomColumn[] = [];
  notFix: CustomColumn[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getUsers();
    this.title = this.customColumn.filter(item => item.position === 'left' && item.required);
    this.footer = this.customColumn.filter(item => item.position === 'right' && item.required);
    this.fix = this.customColumn.filter(item => item.default && !item.required);
    this.notFix = this.customColumn.filter(item => !item.default && !item.required);
  }

  drop(event: CdkDragDrop<CustomColumn[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    this.fix = this.fix.map(item => {
      item.default = true;
      return item;
    });
    this.notFix = this.notFix.map(item => {
      item.default = false;
      return item;
    });
    this.cdr.markForCheck();
  }

  deleteCustom(value: CustomColumn, index: number): void {
    value.default = false;
    this.notFix = [...this.notFix, value];
    this.fix.splice(index, 1);
    this.cdr.markForCheck();
  }

  addCustom(value: CustomColumn, index: number): void {
    value.default = true;
    this.fix = [...this.fix, value];
    this.notFix.splice(index, 1);
    this.cdr.markForCheck();
  }

  showModal(): void {
    this.isVisible = true;
  }

  // Simulasyon
  simulate(data: UserModel) {
    isSimulate.set(true);
    const tempUser = this.authService.userSignal();
    adminSignal.set(tempUser);
    this.authService.logout();
    this.authService.fbLogin(data.email!, data.pass!);
    this.authService.userSignal.set(data);
    this.router.navigateByUrl('/');
  }

  //Ekle-Güncelle Modal
  addOrEditModal(data?: any) {
    this.modalService.create({
      nzTitle: 'Yeni Kullanıcı',
      nzWidth: '900px',
      nzData: {data: data},
      nzContent: NewUserComponent
    });
  }

  // Filteleri Kaldırma
  removeAllFilter() {
    var noFilterCustomColumn: CustomColumn[] = [
      {
        name: 'İsim',
        value: 'firstName',
        default: true,
        required: true,
        position: 'left',
        width: 200,
        fixWidth: true
      },
      {
        name: 'Soyisim',
        value: 'lastName',
        default: true,
        width: 200
      },
      {
        name: 'Rol',
        value: 'role',
        default: true,
        width: 200
      },
      {
        name: 'Cinsiyet',
        value: 'gender',
        default: true,
        width: 200
      },
      {
        name: 'Email',
        value: 'email',
        default: true,
        width: 200
      },
      {
        name: 'Telefon',
        value: 'phone',
        default: true,
        width: 200
      },
      {
        name: 'Uyruk',
        value: 'nationality',
        default: true,
        width: 200
      },
      {
        name: 'Air Puan',
        value: 'airScore',
        default: true,
        width: 200
      },
      {
        name: 'Aktiflik',
        value: 'active',
        default: true,
        width: 200
      },
  
      {
        name: 'Action',
        value: 'action',
        default: true,
        required: true,
        position: 'right',
        width: 200
      }
    ];    
    this.customColumn = noFilterCustomColumn;
    this.cdr.markForCheck();
  }

  handleOk(): void {
    this.customColumn = [...this.title, ...this.fix, ...this.notFix, ...this.footer];
    this.isVisible = false;
    this.cdr.markForCheck();
  }

  handleCancel(): void {
    this.isVisible = false;
  }
 
}
