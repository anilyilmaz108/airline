import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TranslationService } from '../../../../services/translate.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-baggage-allowance',
  standalone: true,
  imports: [
    NzInputModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzDividerModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './baggage-allowance.component.html',
  styleUrl: './baggage-allowance.component.less',
  host: { ngSkipHydration: 'true' },
})
export class BaggageAllowanceComponent {
  tranlationService = inject(TranslationService);

  findFlight() {
    console.log('Uçuş aranıyor..');
  }
}
