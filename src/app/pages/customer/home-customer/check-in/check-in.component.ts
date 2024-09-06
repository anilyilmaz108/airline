import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { ErrorService, FlightService, UserService } from '../../../../services';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { Router } from '@angular/router';
import { flightSignal, flightUserSignal } from '../../../../core/data-values';
import { FlightModel } from '../../../../models/flight';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzTypographyModule,
    NzButtonModule,
    NzCardModule,
    NzSpinModule,
    TranslateModule
  ],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.less',
})
export class CheckInComponent {
  form!: FormGroup;
  private formBuilder = inject(NonNullableFormBuilder);
  errorService = inject(ErrorService);
  userService = inject(UserService);
  flightService = inject(FlightService);
  private router = inject(Router);

  list: any = [];
  loading = false;

  ngOnInit(): void {
    this.getAllFlight();
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      pnrNo: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    try {
      this.list.map((data: FlightModel) => {
        //console.log(data);
        if(this.form.value['pnrNo'] === data.PNRNO){ //ULSFC9
          // console.log('==>', data);
          this.userService.getAll().subscribe((matchData) => { //YILMAZ
            matchData.map((user) => {
              if(user.lastName?.toUpperCase() === this.form.value['lastName'].toUpperCase()){
                // console.log('==>', user);
                // console.log('-->', data);
                const userData = {
                  id: user.id,
                  role: user.role,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  gender: user.gender,
                  phone: user.phone,
                  birth: user.birth,
                  nationality: user.nationality,
                  TCID: user.TCID,
                  created_at: user.created_at,
                  active: true,
                  email: user.email,
                  pass: user.pass,
                  airScore: user.airScore
                };
                flightUserSignal.set(userData);
  
                const flightData: FlightModel = {
                  id: data.id,
                  userId: data.userId,
                  PNRNO: data.PNRNO,
                  earningAirScore: data.earningAirScore,
                  fromCity: data.fromCity,
                  toCity: data.toCity,
                  dateFirst: data.dateFirst,
                  dateLast: data.dateLast,
                  hourFirst: data.hourFirst,
                  hourLast: data.hourLast,
                  priceFirst: data.priceFirst,
                  priceLast: data.priceLast,
                  adultNumber: data.adultNumber,
                  childNumber: data.childNumber,
                  babyNumber: data.babyNumber,
                  flightTimeFirst: data.flightTimeFirst,
                  flightTimeLast: data.flightTimeLast,
                  packageFirst: data.packageFirst,
                  packageLast: data.packageLast,
                  flexFirst: data.flexLast,
                  flexLast: data.flexLast,
                  seatFirst: data.seatFirst,
                  seatLast: data.seatLast,
                  totalPrice: data.totalPrice,
                  operationDate: data.operationDate,
                };
                flightSignal.set(flightData);
                this.form.reset();
                this.router.navigateByUrl('/check-in/select-check-in');
              }
            })
          })
        }
  
      });
     
    } catch (err) {
      this.errorService.errorHandler(5);
    }    
  }

  getAllFlight(){
    this.loading = true;
    this.flightService.getAll().subscribe((data) => {
      this.list = data;
      this.loading = false;
    });
  }
}
