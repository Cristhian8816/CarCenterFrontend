import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {ClientsService} from '../../../core/services/clients/clients.service';
import {Client} from '../../../core/services/models/client.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  patient: Client;

  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productService.getProducts(id);
    } );
  }

  fetchProduct(id: string) {
    this.clientsService.getClient(id)
    .subscribe(patient => {
     this.patient = patient;
    });
  }
}
