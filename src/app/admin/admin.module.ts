import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule} from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';;
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { FormPatientComponent } from './components/form-patient/form-patient.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';



@NgModule({
  declarations: [
    NavComponent,
    TableComponent,
    DashboardComponent,
    PatientListComponent,
    AppointmentListComponent,
    FormPatientComponent,
    PatientEditComponent 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
