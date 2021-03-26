import { Component, OnInit } from '@angular/core';

import { Patient } from '../../../core/services/models/patient.model';
import { PatientsService } from '../../../core/services/patients/patients.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class PatientsComponent implements OnInit {

   products: Patient[] = [];
  constructor(
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.patientsService.getAllPatients()
    .subscribe(products => {
      this.products = products;
    });
  }
}
