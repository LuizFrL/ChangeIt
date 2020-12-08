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

  getAll(): Observable<GasStationInf[]> {
    return this.db.list<GasStationInf>('/gasStations/').valueChanges();
  }

  insertGasStation(gasStationInf: GasStationInf): void {
    this.db.list(`gasStations/${gasStationInf.region}`).push(gasStationInf.inf);
  }

  getRegions(): Observable<string[]> {
    return this.db.list('gasStations/')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map(c => (c.payload.key));
        })
      );
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

  getGasStationsGasolineValues(region: string, id: string): Observable<any> {
    return this.db.list(`gasStations/${region}/${id}/Values`).snapshotChanges().pipe(
      map(changes => {
        // @ts-ignore
        return changes.map(c => ({...c.payload.val()}))[0];
      })
    );
  }

  setGasStationsGasolineValues(id: string, region: string, data): void {
    data.date = Date.now();
    this.db.list(`gasStations/${region}/${id}/Values`).set('gasoline', data);
  }
}
