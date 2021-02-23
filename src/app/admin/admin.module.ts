import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin.routing.module';
import {FormRegisterComponent} from './form-register/form-register.component';
import {FormRegisterGasStationComponent} from './form-register/form-register-gas-station/form-register-gas-station.component';
import {FormAlterGasValuesComponent} from './form-register/form-alter-gas-values/form-alter-gas-values.component';
import {FilterByRegionPipe} from './form-register/filter-by-region.pipe';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {AdminPageComponent} from './admin-page.component';
import {ShowFeedbacksComponent} from './show-feedbacks/show-feedbacks.component';


@NgModule({
  declarations: [
    FormRegisterComponent,
    FormRegisterGasStationComponent,
    FormAlterGasValuesComponent,
    FilterByRegionPipe,
    AdminPageComponent,
    ShowFeedbacksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    AdminRoutingModule
  ],
})
export class AdminModule {
}
