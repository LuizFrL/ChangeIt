import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDistanceComponent } from './form-distance.component';

describe('FormDistanceComponent', () => {
  let component: FormDistanceComponent;
  let fixture: ComponentFixture<FormDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
