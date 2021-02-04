import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiKey} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GasStationSearchService {
  private baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
  private currentUserCoords: string;

  constructor(
    private http: HttpClient
  ) {
  }

  getNearbyGasStations(): Observable<object> {
    navigator?.geolocation.getCurrentPosition(position => {
        this.currentUserCoords = String(position.coords.latitude) + ', ' + String(position.coords.longitude);
      }
    );
    return this.http.get(this.baseUrl, {
      params: {
        location: this.currentUserCoords,
        radius: '1000',
        type: 'gas_station',
        key: apiKey
      }
    });
  }
}
