import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-distance',
  templateUrl: './form-distance.component.html',
  styleUrls: ['./form-distance.component.css']
})
export class FormDistanceComponent implements OnInit {
  formDistanceRadius: FormGroup;
  actualRequestDistanceKm = 10;

  @Output() changeWantedDistance = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formDistanceRadius = this.formBuilder.group({
      distanceKm: [this.actualRequestDistanceKm, Validators.required]
    });
  }

}
