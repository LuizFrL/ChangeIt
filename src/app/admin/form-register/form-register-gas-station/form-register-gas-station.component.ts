import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GasStationService} from '../../../core/gas-station/gas-station.service';
import {GasStationSearchService} from '../../../core/admin/gas-station-search.service';
import {formatCoordsInRegion, getDistance} from '../../../core/utils';

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
    private searchGasStation: GasStationSearchService
  ) {
  }

  ngOnInit(): void {
    this.formRegisterGasStation = this.formBuilder.group({
      gasStationNearby: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.getActualLocation();
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

  getActualLocation(): void {
    navigator?.geolocation.getCurrentPosition(position => {
        this.actualLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      },
      error => {
        alert(error.message);
      }, {enableHighAccuracy: true});
  }

  getDistanceGasStation(gasStation: any): string {
    // @ts-ignore
    return getDistance(window.currentUserLocation, this.getGasStationCoords(gasStation.geometry.location));
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
