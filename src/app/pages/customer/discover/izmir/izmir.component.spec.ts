import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmirComponent } from './izmir.component';

describe('IzmirComponent', () => {
  let component: IzmirComponent;
  let fixture: ComponentFixture<IzmirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IzmirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzmirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
