import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {GasStationInf} from './GasStationInf';
import {map} from 'rxjs/operators';
import {GasStation} from './gas-station';

@Injectable({
  providedIn: 'root'
})
export class GasStationService {

  constructor(
    private db: AngularFireDatabase
  ) {
  }

  getAllByRegion(region: string): Observable<any> {
    return this.db.list<GasStationInf>(`/gasStations/${region}`).snapshotChanges().pipe(
      map(changes => {
        // @ts-ignore
        return changes.map( c => ({key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  insertGasStation(gasStationInf: any): void {
    this.db.list(`gasStations/${gasStationInf.region}`).update(gasStationInf.place_id, gasStationInf.inf);
  }

  getGasStationsOfRegion(region: string): Observable<GasStation[]> {
    return this.db.list(`gasStations/${region}`)
      .snapshotChanges().pipe(
        map(changes => {
          // @ts-ignore
          return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
        })
      );
  }

  getGasStationsValues(region: string, id: string): Observable<any> {
    return this.db.list(`gasStations/${region}/${id}`).valueChanges();
  }

  setGasStationsValues(id: string, region: string, data): void {
    this.db.list(`gasStations/${region}/${id}`).set('Values', data);
    this.updateDateOfGasStation(region, id, Date.now());
  }

  updateDateOfGasStation(region: string, id: string, date: number): void {
    this.db.list(`gasStations/${region}/${id}/Values`).set('date', date);
  }

}
