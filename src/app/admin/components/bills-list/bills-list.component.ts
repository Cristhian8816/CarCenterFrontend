import { Component, OnInit } from '@angular/core';

import { ClientsService } from '../../../core/services/clients/clients.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})
export class BillConsultComponent implements OnInit {

  clients = [];
  displayedColumns: string[] = ['Clients_key','FullName','DocumentType','ID','Cellphone','Address','email', 'actions'];

  constructor(
    private clientServices: ClientsService
  ) { }

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients() {
    this.clientServices.getAllClients()
    .subscribe(clients => {
      this.clients = clients;
    });
  }
  deletepatient(id: string) {
    this.clientServices.deleteClient(id)
    .subscribe(rta => {
      this.fetchClients();
    });
  }

}
