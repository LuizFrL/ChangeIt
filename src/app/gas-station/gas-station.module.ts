import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GasStationRoutingModule} from './gas-station.routing.module';
import {GasStationFormInfComponent} from './gas-station-form-inf/gas-station-form-inf.component';
import { GasStationComponent } from './gas-station.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [GasStationFormInfComponent, GasStationComponent],
  imports: [
    CommonModule,
    MatCardModule,
    GasStationRoutingModule,
    MatIconModule,
  ]
})
export class GasStationModule { }
