import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'app-flight-steps',
  standalone: true,
  imports: [NzCardModule, NzStepsModule, NzIconModule],
  templateUrl: './flight-steps.component.html',
  styleUrl: './flight-steps.component.less'
})
export class FlightStepsComponent {
  @Input() steps1: string = "";
  @Input() steps2: string = "";
  @Input() steps3: string = "";
  @Input() steps4: string = "";
  @Input() steps5: string = "";
  @Input() steps6: string = "";
}
