import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlterGasValuesComponent } from './form-alter-gas-values.component';

describe('FormAlterGasValuesComponent', () => {
  let component: FormAlterGasValuesComponent;
  let fixture: ComponentFixture<FormAlterGasValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlterGasValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlterGasValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
