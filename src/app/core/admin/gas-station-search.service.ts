import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API, apiKey} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class GasStationSearchService {
  private currentUserCoords: string;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  getNearbyGasStations(): Observable<object> {
    this.userService.currentPosition$.subscribe(position => {
      this.currentUserCoords = String(position.latitude) + ', ' + String(position.longitude);
    });
    const options = {
      params: new HttpParams()
        .set('location', this.currentUserCoords)
        .set('radius', '600')
        .set('type', 'gas_station')
        .set('key', apiKey)
    };
    return this.http.post(`${API}/nearbyGasStations`, {}, options);
  }
}
