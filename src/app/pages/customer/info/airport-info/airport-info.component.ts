import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  terminal: string
}

@Component({
  selector: 'app-airport-info',
  standalone: true,
  imports: [NzTypographyModule, NzTableModule, NzDropDownModule, CommonModule, FormsModule, NzButtonModule, NzInputModule, NzIconModule],
  templateUrl: './airport-info.component.html',
  styleUrl: './airport-info.component.less',
  host: {ngSkipHydration: 'true'},
})
export class AirportInfoComponent {
  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      airportName: 'Adana-Şakirpaşa Havalimanı',
      airportCode: 'ADA',
      city: 'Adana',
      terminal: 'TERMINAL INTERNATIONAL'
    },
    {
      airportName: 'Sabiha Gökçen Havalimanı',
      airportCode: 'SAW',
      city: 'İstanbul',
      terminal: 'TERMINAL 1'
    },
    {
      airportName: 'Ankara Esenboğa Havalimanı',
      airportCode: 'ESB',
      city: 'Ankara',
      terminal: 'TERMINAL 3'
    },
    {
      airportName: 'İzmir Adnan Menderes Havalimanı	',
      airportCode: 'ADB',
      city: 'İzmir',
      terminal: 'MAIN'
    },
    {
      airportName: 'Antalya Havalimanı',
      airportCode: 'AYT',
      city: 'Antalya',
      terminal: 'DOMESTIC T1, INTERNATIONAL T1'
    },
    {
      airportName: 'Trabzon Havalimanı',
      airportCode: 'TZX',
      city: 'Trabzon',
      terminal: '-'
    },
    {
      airportName: 'Konya Havalimanı',
      airportCode: 'KYA',
      city: 'Konya',
      terminal: 'TERMINAL PRINCIPAL'
    },
   
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.airportName.indexOf(this.searchValue) !== -1);
  }

  onBack(): void {
    console.log('onBack');
  }
}
