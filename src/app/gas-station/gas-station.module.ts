import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GasStationRoutingModule} from './gas-station.routing.module';
import {GasStationFormInfComponent} from './gas-station-form-inf/gas-station-form-inf.component';
import {GasStationComponent} from './gas-station.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {OrderValuesListPipe} from './order-values-list.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {FormDistanceComponent} from './form-distance/form-distance.component';
import {MatInputModule} from '@angular/material/input';
import {WithoutGasStationForRegionComponent} from './without-gas-station-for-region/without-gas-station-for-region.component';
import {LookingForGasStationComponent} from './looking-for-gas-station/looking-for-gas-station.component';
import {LottieModule} from 'ngx-lottie';
import {AnimationLottieComponent} from './animation-lottie/animation-lottie.component';



@NgModule({
  declarations: [
    GasStationFormInfComponent,
    GasStationComponent,
    OrderValuesListPipe,
    FormDistanceComponent,
    WithoutGasStationForRegionComponent,
    LookingForGasStationComponent,
    AnimationLottieComponent
  ],
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
    LottieModule,
    MatMenuModule
  ]
})
export class GasStationModule {
}
