import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {GasStationService} from '../core/gas-station/gas-station.service';

@Component({
  selector: 'app-gas-station',
  templateUrl: './gas-station.component.html',
  styleUrls: ['./gas-station.component.css']
})
export class GasStationComponent implements OnInit {
  gasStations$: Observable<any>;
  constructor(
    private gasStationService: GasStationService
  ) { }

  ngOnInit(): void {
    this.gasStations$ = this.gasStationService.getAllByRegion('Aguas Claras');
  }

}
