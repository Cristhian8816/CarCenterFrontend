import { Component, OnInit } from '@angular/core';

import { Client } from '../../../core/services/models/client.model';
import { ClientsService } from '../../../core/services/patients/clients.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class PatientsComponent implements OnInit {

   products: Client[] = [];
  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.clientsService.getAllClients()
    .subscribe(products => {
      this.products = products;
    });
  }
}
