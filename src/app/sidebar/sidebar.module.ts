import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {GasStationModule} from '../gas-station/gas-station.module';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    GasStationModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
