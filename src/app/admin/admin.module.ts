import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin.routing.module';
import {FormRegisterModule} from './form-register/form-register.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormRegisterModule,
  ],
})
export class AdminModule {
}
