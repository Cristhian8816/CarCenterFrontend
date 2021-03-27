import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsService } from './services/clients/clients.service';
import { CarsService } from './services/cars/cars.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ClientsService,
    CarsService
  ]
})
export class CoreModule { }
