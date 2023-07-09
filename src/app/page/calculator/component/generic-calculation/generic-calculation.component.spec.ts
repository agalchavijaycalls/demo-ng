import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCalculationComponent } from './generic-calculation.component';

describe('GenericCalculationComponent', () => {
  let component: GenericCalculationComponent;
  let fixture: ComponentFixture<GenericCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericCalculationComponent]
    });
    fixture = TestBed.createComponent(GenericCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
