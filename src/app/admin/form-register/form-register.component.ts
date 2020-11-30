import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  gasStationRegister = false;
  gasAlterValues = false;

  constructor() { }

  ngOnInit(): void {
  }

}
