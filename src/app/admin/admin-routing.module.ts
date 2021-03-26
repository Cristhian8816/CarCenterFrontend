import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { TableComponent} from './components/table/table.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { FormPatientComponent } from './components/form-patient/form-patient.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: PatientListComponent
      },
      {
        path: 'appointments',
        component: AppointmentListComponent
      },
      {
        path: 'products/create',
        component: FormPatientComponent
      },
      {
        path: 'products/edit/:id',
        component: PatientEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
