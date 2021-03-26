import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsService } from './services/patients/clients.service';
import { AppointmentsService } from './services/appointments/appointments.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ClientsService,
    AppointmentsService
  ]
})
export class CoreModule { }
