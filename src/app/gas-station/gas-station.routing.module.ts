import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GasStationComponent} from './gas-station.component';

const routes: Routes = [
  {
    path: '',
    component: GasStationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GasStationRoutingModule {
}
