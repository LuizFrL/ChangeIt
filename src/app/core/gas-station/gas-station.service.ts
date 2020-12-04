import { Injectable } from '@angular/core';
import {AngularFireDatabase, SnapshotAction} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {GasStationInf} from './GasStationInf';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GasStationService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAll(): Observable<GasStationInf[]> {
    return this.db.list<GasStationInf>('/gasStations/').valueChanges();
  }

  insertGasStation(gasStationInf: GasStationInf): void {
    this.db.list(`gasStations/${gasStationInf.region}`).push(gasStationInf.inf);
  }

  getRegions(): Observable<string[]>{
    return this.db.list('gasStations/')
      .snapshotChanges().pipe(
        map(changes => {
          return changes.map( c => (c.payload.key));
        })
      );
  }
}
