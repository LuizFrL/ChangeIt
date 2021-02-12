import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingForGasStationComponent } from './looking-for-gas-station.component';

describe('LookingForGasStationComponent', () => {
  let component: LookingForGasStationComponent;
  let fixture: ComponentFixture<LookingForGasStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookingForGasStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookingForGasStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
