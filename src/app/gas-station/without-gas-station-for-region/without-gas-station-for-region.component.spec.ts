import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutGasStationForRegionComponent } from './without-gas-station-for-region.component';

describe('WithoutGasStationForRegionComponent', () => {
  let component: WithoutGasStationForRegionComponent;
  let fixture: ComponentFixture<WithoutGasStationForRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutGasStationForRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutGasStationForRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
