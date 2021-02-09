import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GasStationRoutingModule} from './gas-station.routing.module';
import {GasStationFormInfComponent} from './gas-station-form-inf/gas-station-form-inf.component';
import { GasStationComponent } from './gas-station.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {OrderValuesListPipe} from './order-values-list.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormDistanceComponent} from './form-distance/form-distance.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [GasStationFormInfComponent, GasStationComponent, OrderValuesListPipe, FormDistanceComponent],
  imports: [
    CommonModule,
    MatCardModule,
    GasStationRoutingModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class GasStationModule { }
