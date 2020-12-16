import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationFormInfComponent } from './gas-station-form-inf.component';

describe('GasStationFormInfComponent', () => {
  let component: GasStationFormInfComponent;
  let fixture: ComponentFixture<GasStationFormInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasStationFormInfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GasStationFormInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
