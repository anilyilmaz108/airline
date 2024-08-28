import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkaraComponent } from './ankara.component';

describe('AnkaraComponent', () => {
  let component: AnkaraComponent;
  let fixture: ComponentFixture<AnkaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnkaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnkaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
