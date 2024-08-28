import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntalyaComponent } from './antalya.component';

describe('AntalyaComponent', () => {
  let component: AntalyaComponent;
  let fixture: ComponentFixture<AntalyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntalyaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntalyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
