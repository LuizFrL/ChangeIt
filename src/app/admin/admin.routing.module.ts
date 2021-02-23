import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IsAdminUserGuard} from '../core/admin/is-admin-user-guard.service';
import {AdminPageComponent} from './admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [ IsAdminUserGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {
}
