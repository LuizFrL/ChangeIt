import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GasStationService} from '../../../core/gas-station/gas-station.service';
import {GasStationSearchService} from '../../../core/admin/gas-station-search.service';
import {formatCoordsInRegion, getDistance} from '../../../core/utils';
import {UserService} from '../../../core/user/user.service';

@Component({
  selector: 'app-form-register-gas-station',
  templateUrl: './form-register-gas-station.component.html',
  styleUrls: ['./form-register-gas-station.component.css']
})
export class FormRegisterGasStationComponent implements OnInit {
  formRegisterGasStation: FormGroup;

  gasStationsNearby = [];
  gasStationSelected;
  actualLocation;

  constructor(
    private formBuilder: FormBuilder,
    private gasStationService: GasStationService,
    private searchGasStation: GasStationSearchService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.formRegisterGasStation = this.formBuilder.group({
      gasStationNearby: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.userService.currentPosition$.subscribe( position => {
      this.actualLocation = position;
    });
    this.searchGasStation.getNearbyGasStations()
      .subscribe(value => {
      // @ts-ignore
      this.gasStationsNearby = value.results;
    });
  }

  addGasStation(): void {
    const gasStationInf = {
      inf: {
        coordinates: this.getGasStationCoords(this.gasStationSelected.geometry.location),
        gasStationName: this.gasStationSelected.name,
        location: this.formRegisterGasStation.value.location
      },
      region: this.getRegionOfGasStation(this.gasStationSelected),
      place_id: this.gasStationSelected.place_id
    };
    this.gasStationService.insertGasStation(gasStationInf);
    this.formRegisterGasStation.reset();
  }

  getDistanceGasStation(gasStation: any): string {
    if (this.userService.currentPosition$.getValue()) {
      return getDistance(this.userService.currentPosition$.getValue(), this.getGasStationCoords(gasStation.geometry.location));
    }
    return;
  }

  getGasStationCoords(gasStation): any {
    return {
      latitude: gasStation.lat,
      longitude: gasStation.lng
    };
  }

  private getRegionOfGasStation(gasStationSelected): string {
    const coords = this.getGasStationCoords(gasStationSelected.geometry.location);
    return formatCoordsInRegion(coords);
  }
}
