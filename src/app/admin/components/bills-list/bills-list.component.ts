import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientsService } from '../../../core/services/clients/clients.service';
import { CarsService } from '../../../core/services/cars/cars.service';
import { MaintenancesService } from '../../../core/services/maintenances/maintenances.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})
export class BillConsultComponent implements OnInit {
  form: FormGroup;  
  clients = [];
  client_key: string;

  FullName: string; 
  identificationtype :string;
  ID: string;
  CellPhone: string;
  Address: string;
  Email: string;
  Marca: string;
  Description: string;
  maintenanceDate: Date;


  displayedColumns: string[] = ['Clients_key','FullName','DocumentType','ID','Cellphone','Address','email', 'actions'];

  constructor(
    private formBuilder: FormBuilder,
    private clientServices: ClientsService,
    private carsService: CarsService,
    private maintenancesService  : MaintenancesService,   
  ) { }

  ngOnInit(): void {
    this.fetchClients();
  }

  consultBills(event: Event) {
    this.clientServices.getClient(this.client_key)
    .subscribe((Client) => { 
      this.FullName = Client.FullName;
      this.identificationtype = Client.DocumentType;
      this.CellPhone = Client.Cellphone;
      this.carsService.getCar(Client.Clients_key)
      .subscribe((car) => { 
        this.maintenancesService.getMaintenance(Client.Clients_key);

      });
    });
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
