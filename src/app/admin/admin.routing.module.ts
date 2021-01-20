import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormRegisterComponent} from './form-register/form-register.component';
import {IsAdminUserGuard} from '../core/admin/is-admin-user-guard.service';

const routes: Routes = [
  {
    path: '',
    component: FormRegisterComponent,
    canActivate: [ IsAdminUserGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {
}
