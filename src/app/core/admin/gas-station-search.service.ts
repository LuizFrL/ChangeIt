import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {API, apiKey} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GasStationSearchService {
  private baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1000&type=gas_station&key=AIzaSyAqeOfBwS7p5prTHGqfxsAYD7c2XfT_zLk';
  private currentUserCoords: string;

  constructor(
    private http: HttpClient
  ) {
  }

  getNearbyGasStations(): Observable<object> {
    // @ts-ignore
    this.currentUserCoords = String(window.currentUserLocation.latitude) + ', ' + String(window.currentUserLocation.longitude);
    const options = {
      params: new HttpParams()
        .set('location', this.currentUserCoords)
        .set('radius', '500')
        .set('type', 'gas_station')
        .set('key', apiKey)
    };
    return this.http.post(`${API}/nearbyGasStations`, {}, options);
  }
}
