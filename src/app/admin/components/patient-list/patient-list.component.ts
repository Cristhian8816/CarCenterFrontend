import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../../../core/services/clients/clients.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  clients = [];
  displayedColumns: string[] = ['Clients_key','FullName','DocumentType','ID','Cellphone','Address','email', 'actions'];

  constructor(
    private clientServices: ClientsService
  ) { }

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients() {
    this.clientServices.getAllClients()
    .subscribe(clients => {
      this.clients = clients;
    });
  }
  deletepatient(id: string) {
    this.clientServices.deleteClient(id)
    .subscribe(rta => {
      this.fetchPatients();
    });
  }

}
