import { CommonModule } from '@angular/common';
import { Component, SimpleChanges, inject, signal } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzOptionComponent } from 'ng-zorro-antd/select';
import { NZ_MODAL_DATA, NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

// Ülke & Şehir Bilgileri
const options = [
  {
    label: 'Ant Design',
    value: 'antd',
    children: [
      {
        label: 'ng-zorro-antd',
        value: 'ng-zorro-antd',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Angular',
    value: 'angular',
    children: [
      {
        label: 'CDK',
        value: 'cdk',
        isLeaf: true,
      },
    ],
  },
];

var adultNumberGlobal = signal("1");
var childNumberGlobal = signal("0");
var babyNumberGlobal = signal("0");

var tempAdult = "";
var tempChild = "";
var tempBaby = "";

@Component({
  selector: 'app-find-flight',
  standalone: true,
  imports: [
    NzTabsModule,
    NzCardModule,
    CommonModule,
    NzIconModule,
    NzStatisticModule,
    NzSkeletonModule,
    NzCascaderModule,
    FormsModule,
    NzDividerModule,
    NzDatePickerModule,
    NzInputModule,
    NzOptionComponent,
    NzModalModule,
    NzButtonModule,
    NzCheckboxModule,
    NzToolTipModule,
  ],
  templateUrl: './find-flight.component.html',
  styleUrl: './find-flight.component.less',
  host: {ngSkipHydration: 'true'},
})
export class FindFlightComponent {
  nzOptions = options;
  values: any[] | null = null;

  onChanges(values: any): void {
    console.log(values, this.values);
  }

  date = null;
  twoWays = true;
  inputValue: string | null = null;


  adultNumberGlobal = adultNumberGlobal();
  childNumberGlobal = childNumberGlobal();
  babyNumberGlobal = babyNumberGlobal();
  

  findFlight(){
    console.log('Uçuş aranıyor..');
  }
 

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  nzModalService = inject(NzModalService);
  showModal2(): void {
    this.nzModalService.create({
      nzTitle: 'Yolcu Seçiniz',
      nzContent: PassengerSelectComponent,
      nzData: {adultNumber: this.adultNumberGlobal, childNumber: this.childNumberGlobal, babyNumber: this.babyNumberGlobal},
    });
    this.nzModalService.afterAllClose.subscribe(result => {
      this.adultNumberGlobal = "2";
      this.childNumberGlobal = "0";
      this.babyNumberGlobal = "0";
    });
  }
 
}

@Component({
  selector: 'app-passenger-select',
  standalone: true,
  imports: [
    NzInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    CommonModule,
    NzInputNumberModule
  ],
  template: `
  <form [formGroup]="form">
  <!-- Yetişkin -->
  <nz-input-group nzCompact style="padding-bottom: 8px">
    <input
    formControlName="adultText"
      type="text"
      nz-input
      [ngModel]="'Yetişkin'"
      readonly
      style="width: 50%"
    />
    <nz-input-number formControlName="adult" nzMin="0"></nz-input-number>
  </nz-input-group>
  <!-- Çocuk -->
  <nz-input-group nzCompact style="padding-bottom: 8px">
    <input
      formControlName="childText"
      type="text"
      nz-input
      [ngModel]="'Çocuk (2-12 yaş)'"
      readonly
      style="width: 50%"
    />
    <nz-input-number formControlName="child" nzMin="0"></nz-input-number>
  </nz-input-group>
  <!-- Bebek -->
  <nz-input-group nzCompact style="padding-bottom: 8px">
    <input
    formControlName="babyText"
      type="text"
      nz-input
      [ngModel]="'Bebek (0-2 yaş)'"
      readonly
      style="width: 50%"
    />
    <nz-input-number formControlName="baby" nzMin="0"></nz-input-number>
  </nz-input-group>

  <div *nzModalFooter>
    <button nz-button nzType="default" (click)="destroyModal()">
      Custom Callback
    </button>
    <button nz-button nzType="primary" (click)="save()" [disabled]="(adultNumber === '0' && childNumber === '0' && babyNumber === '0')">
      Custom Submit
    </button>
  </div>
</form>
`,
  styles: ``,
})
export class PassengerSelectComponent {
  nzModalData = inject(NZ_MODAL_DATA);
  adultNumber = this.nzModalData.adultNumber;
  childNumber = this.nzModalData.childNumber;
  babyNumber = this.nzModalData.babyNumber;

  form!: FormGroup;
  private formBuilder = inject(NonNullableFormBuilder);
  nzModalRef = inject(NzModalRef);

  ngOnInit(): void {
    this.buildForm();
    // console.log(this.adultNumber, this.childNumber, this.babyNumber);
  }

  buildForm() {
    this.form = this.formBuilder.group({
      adult: [this.adultNumber],
      child: [this.childNumber],
      baby: [this.babyNumber],
      adultText: [''],
      childText: [''],
      babyText: [''],
    });
  }

  destroyModal(): void {
    this.nzModalRef.destroy();
  }

  save(): void {
    // console.log('Tıklandı..');
    adultNumberGlobal.set(this.form.controls['adult'].value);
    childNumberGlobal.set(this.form.controls['child'].value);
    babyNumberGlobal.set(this.form.controls['baby'].value);
    // console.log(tempAdult, tempChild, tempBaby);
    this.nzModalRef.destroy();
  }
}