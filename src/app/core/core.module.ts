import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsService } from './services/patients/patients.service';
import { AppointmentsService } from './services/appointments/appointments.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PatientsService,
    AppointmentsService
  ]
})
export class CoreModule { }
