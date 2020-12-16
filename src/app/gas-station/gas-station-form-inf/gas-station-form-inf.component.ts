import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-gas-station-form-inf',
  templateUrl: './gas-station-form-inf.component.html',
  styleUrls: ['./gas-station-form-inf.component.css']
})
export class GasStationFormInfComponent implements OnInit {
  @Input() gasStation;
  constructor() { }

  ngOnInit(): void {

  }

}
