import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    pathMatch: 'full',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gasStations'
  },
  {
    path: 'gasStations',
    loadChildren: () => import('./gas-station/gas-station.module').then(module => module.GasStationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
