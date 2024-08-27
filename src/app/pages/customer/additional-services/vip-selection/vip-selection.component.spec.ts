import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipSelectionComponent } from './vip-selection.component';

describe('VipSelectionComponent', () => {
  let component: VipSelectionComponent;
  let fixture: ComponentFixture<VipSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
