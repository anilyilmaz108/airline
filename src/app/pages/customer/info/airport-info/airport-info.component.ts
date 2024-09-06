import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

interface DataItem {
  airportName: string;
  airportCode: string;
  city: string;
  terminal: string;
}

@Component({
  selector: 'app-airport-info',
  standalone: true,
  imports: [
    NzTypographyModule,
    NzTableModule,
    NzDropDownModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    TranslateModule,
  ],
  templateUrl: './airport-info.component.html',
  styleUrl: './airport-info.component.less',
  host: { ngSkipHydration: 'true' },
})
export class AirportInfoComponent {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      airportName: 'AIRPORT_INFO.AIRPORTS.ADANA_AIRPORT',
      airportCode: 'ADA',
      city: 'Adana',
      terminal: 'TERMINAL INTERNATIONAL',
    },
    {
      airportName: 'AIRPORT_INFO.AIRPORTS.ISTANBUL_AIRPORT',
      airportCode: 'SAW',
      city: 'İstanbul',
      terminal: 'TERMINAL 1',
    },
    {
      airportName: 'AIRPORT_INFO.AIRPORTS.ANKARA_AIRPORT',
      airportCode: 'ESB',
      city: 'Ankara',
      terminal: 'TERMINAL 3',
    },
    {
      airportName: 'AIRPORT_INFO.AIRPORTS.IZMIR_AIRPORT',
      airportCode: 'ADB',
      city: 'İzmir',
      terminal: 'MAIN',
    },
    {
      airportName: 'AIRPORT_INFO.AIRPORTS.ANTALYA_AIRPORT',
      airportCode: 'AYT',
      city: 'Antalya',
      terminal: 'DOMESTIC T1, INTERNATIONAL T1',
    },
    {
      airportName: 'AIRPORT_INFO.AIRPORTS.TRABZON_AIRPORT',
      airportCode: 'TZX',
      city: 'Trabzon',
      terminal: '-',
    },
    {
      airportName: 'AIRPORT_INFO.AIRPORTS.KONYA_AIRPORT',
      airportCode: 'KYA',
      city: 'Konya',
      terminal: 'TERMINAL PRINCIPAL',
    },
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: DataItem) => item.airportName.indexOf(this.searchValue) !== -1
    );
  }

  onBack(): void {
    console.log('onBack');
  }
}
