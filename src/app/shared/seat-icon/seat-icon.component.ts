import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seat-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-icon.component.html',
  styleUrl: './seat-icon.component.less'
})
export class SeatIconComponent {
  @Input() activeIcon: boolean = true;
}
