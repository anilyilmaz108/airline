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
import { Auth } from '@angular/fire/auth';
import { FlightService } from '../../../../services/flight.service';
import { ErrorService } from '../../../../services';
import { generateId } from '../../../../helpers/generate-id';
import { flightSignal } from '../../../../core/data-values';
import { FlightModel } from '../../../../models/flight';
import { Router } from '@angular/router';

// Ülke & Şehir Bilgileri
const options = [
  {
    label: 'Adana',
    value: 'Adana',
    children: [
      {
        label: 'Adana-Şakirpaşa Havalimanı',
        value: 'Adana-Şakirpaşa Havalimanı - ADA',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Adıyaman',
    value: 'Adıyaman',
    children: [
      {
        label: 'Adıyaman Havalimanı',
        value: 'Adıyaman Havalimanı - ADF',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Ağrı',
    value: 'Ağrı',
    children: [
      {
        label: 'Ağrı Ahmed-i Hani Havalimanı',
        value: 'Ağrı Ahmed-i Hani Havalimanı - AJI',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Amasya',
    value: 'Amasya',
    children: [
      {
        label: 'Amasya Merzifon Havalimanı',
        value: 'Amasya Merzifon Havalimanı - MZH',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Ankara',
    value: 'Ankara',
    children: [
      {
        label: 'Ankara Esenboğa Havalimanı',
        value: 'Ankara Esenboğa Havalimanı - ESB',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Antalya',
    value: 'Antalya',
    children: [
      {
        label: 'Antalya Havaalanı',
        value: 'Antalya Havaalanı- AYT',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Balıkesir',
    value: 'Balıkesir',
    children: [
      {
        label: 'Balıkesir Koca Seyit Havalimanı',
        value: 'Balıkesir Koca Seyit Havalimanıı- EDO',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'İstanbul',
    value: 'İstanbul',
    children: [
      {
        label: 'Sabiha Gökçen Havaalanı',
        value: 'Sabiha Gökçen Havaalanı - SAW',
        isLeaf: true,
      },
      {
        label: 'İstanbul Yeni Havalimanı',
        value: 'İstanbul Yeni Havalimanı - IST',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'İzmir',
    value: 'İzmir',
    children: [
      {
        label: 'İzmir Adnan Menderes Havalimanı',
        value: 'İzmir Adnan Menderes Havalimanı - ADB',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Konya',
    value: 'Konya',
    children: [
      {
        label: 'Konya Havalimanı',
        value: 'Konya Havalimanı - KYA',
        isLeaf: true,
      },
    ],
  },
];

const options2 = [
  {
    label: 'Adana',
    value: 'Adana',
    children: [
      {
        label: 'Adana-Şakirpaşa Havalimanı',
        value: 'Adana-Şakirpaşa Havalimanı - ADA',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Adıyaman',
    value: 'Adıyaman',
    children: [
      {
        label: 'Adıyaman Havalimanı',
        value: 'Adıyaman Havalimanı - ADF',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Ağrı',
    value: 'Ağrı',
    children: [
      {
        label: 'Ağrı Ahmed-i Hani Havalimanı',
        value: 'Ağrı Ahmed-i Hani Havalimanı - AJI',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Amasya',
    value: 'Amasya',
    children: [
      {
        label: 'Amasya Merzifon Havalimanı',
        value: 'Amasya Merzifon Havalimanı - MZH',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Ankara',
    value: 'Ankara',
    children: [
      {
        label: 'Ankara Esenboğa Havalimanı',
        value: 'Ankara Esenboğa Havalimanı - ESB',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Antalya',
    value: 'Antalya',
    children: [
      {
        label: 'Antalya Havaalanı',
        value: 'Antalya Havaalanı- AYT',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Balıkesir',
    value: 'Balıkesir',
    children: [
      {
        label: 'Balıkesir Koca Seyit Havalimanı',
        value: 'Balıkesir Koca Seyit Havalimanıı- EDO',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'İstanbul',
    value: 'İstanbul',
    children: [
      {
        label: 'Sabiha Gökçen Havaalanı',
        value: 'Sabiha Gökçen Havaalanı - SAW',
        isLeaf: true,
      },
      {
        label: 'İstanbul Yeni Havalimanı',
        value: 'İstanbul Yeni Havalimanı - IST',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'İzmir',
    value: 'İzmir',
    children: [
      {
        label: 'İzmir Adnan Menderes Havalimanı',
        value: 'İzmir Adnan Menderes Havalimanı - ADB',
        isLeaf: true,
      },
    ],
  },
  {
    label: 'Konya',
    value: 'Konya',
    children: [
      {
        label: 'Konya Havalimanı',
        value: 'Konya Havalimanı - KYA',
        isLeaf: true,
      },
    ],
  },
];

var adultNumberGlobal = signal("1");
var childNumberGlobal = signal("0");
var babyNumberGlobal = signal("0");


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
  auth = inject(Auth);
  flightService = inject(FlightService);
  errorService = inject(ErrorService);
  private router = inject(Router);
  
  nzOptions = options;
  nzOptions2 = options2;
  values: any = null;
  values2: any = null;

  onChanges(values: any): void {
    // console.log(values, this.values);
  }

  onChanges2(values: any): void {
    // console.log(values, this.values2);
  }

  swapValues(){
    const tempVal1 = this.values;
    const tempVal2 = this.values2;
    this.values = tempVal2;
    this.values2 = tempVal1;
  }

  date: any = null;
  twoWays = true;
  inputValue: string | null = null;


  adultNumberGlobal = adultNumberGlobal();
  childNumberGlobal = childNumberGlobal();
  babyNumberGlobal = babyNumberGlobal();
  

  async findFlight(){
    try{
      const userPath = this.auth.currentUser ? this.auth.currentUser?.uid : generateId.generateUniqueId(10);
      // console.log('Uçuş aranıyor..');
      // console.log('FindFlight: ', this.values, this.values2, this.date, this.twoWays, adultNumberGlobal(), childNumberGlobal(), babyNumberGlobal());
      const data: FlightModel = {
        "id": userPath,
        "userId": userPath,
        "PNRNO": "",
        "earningAirScore": 0,
        "fromCity": this.values,
        "toCity": this.values2,
        "dateFirst": this.date!.length == 2 ? this.date![0] : this.date,
        "dateLast": this.date!.length == 2 ? this.date![1] : null,
        "hourFirst": 0,
        "hourLast": 0,
        "priceFirst": 0,
        "priceLast": 0,
        "adultNumber": adultNumberGlobal(),
        "childNumber": childNumberGlobal(),
        "babyNumber": babyNumberGlobal(),
        "flightTimeFirst": "",
        "flightTimeLast": "",
        "package": "",
        "flexFirst": false,
        "flexLast": false,
        "seatFirst": "",
        "seatLast": "",
        "totalPrice": 0,
        "operationDate": Date.now()
      }  
      flightSignal.set(data);
      console.log('find flight', flightSignal());
      this.router.navigateByUrl('/find-flight/selected-flights');
    } catch(err){
      console.log(err);
      this.errorService.errorHandler(4);
    }
    // Geçmiş Uçuş Bilgileri DB Alanı
    /**
     * id
     * userId
     * flightId
     */
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
      this.adultNumberGlobal = adultNumberGlobal();
      this.childNumberGlobal = childNumberGlobal();
      this.babyNumberGlobal = babyNumberGlobal();
      //console.log(babyNumberGlobal());
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
    NzInputNumberModule,
    NzModalModule,
    NzButtonModule
  ],
  template: `
  <form [formGroup]="form" (ngSubmit)="save()">
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
      İptal
    </button>
    <button nz-button nzType="primary" (click)="save()" [disabled]="(adultNumber === '0' && childNumber === '0' && babyNumber === '0')">
      Onayla
    </button>
  </div>
</form>
`,
  styles: ``,
  host: {ngSkipHydration: 'true'},

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

  save(){
    // console.log('Tıklandı..');
    adultNumberGlobal.set(this.form.controls['adult'].value);
    childNumberGlobal.set(this.form.controls['child'].value);
    babyNumberGlobal.set(this.form.controls['baby'].value);
    console.log('Değerler', adultNumberGlobal(), childNumberGlobal(), babyNumberGlobal());
    this.nzModalRef.destroy();
  }
}