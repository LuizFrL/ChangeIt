import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterGasStationComponent } from './form-register-gas-station.component';

describe('FormRegisterGasStationComponent', () => {
  let component: FormRegisterGasStationComponent;
  let fixture: ComponentFixture<FormRegisterGasStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterGasStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegisterGasStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
