import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormRegisterComponent} from './form-register.component';
import {FormRegisterGasStationComponent} from './form-register-gas-station/form-register-gas-station.component';
import { FormAlterGasValuesComponent } from './form-alter-gas-values/form-alter-gas-values.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FilterByRegionPipe } from './filter-by-region.pipe';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [FormRegisterComponent, FormRegisterGasStationComponent, FormAlterGasValuesComponent, FilterByRegionPipe ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class FormRegisterModule { }
