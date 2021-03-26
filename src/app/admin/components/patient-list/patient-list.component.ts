import { Component, OnInit } from '@angular/core';

import { PatientsService } from '../../../core/services/patients/patients.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  clients = [];
  displayedColumns: string[] = ['Clients_key','FullName','DocumentType','ID','Cellphone','Address','email', 'actions'];

  constructor(
    private patientServices: PatientsService
  ) { }

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients() {
    this.patientServices.getAllClients()
    .subscribe(clients => {
      this.clients = clients;
    });
  }
  deletepatient(id: string) {
    this.patientServices.deletepatient(id)
    .subscribe(rta => {
      this.fetchPatients();
    });
  }

}
