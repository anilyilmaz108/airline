import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflightServicesComponent } from './inflight-services.component';

describe('InflightServicesComponent', () => {
  let component: InflightServicesComponent;
  let fixture: ComponentFixture<InflightServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InflightServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InflightServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
