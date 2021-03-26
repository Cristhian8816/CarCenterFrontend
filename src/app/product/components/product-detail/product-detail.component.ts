import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {PatientsService} from '../../../core/services/patients/patients.service';
import {Patient} from '../../../core/services/models/patient.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {

  patient: Patient;

  constructor(
    private route: ActivatedRoute,
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productService.getProducts(id);
    } );
  }

  fetchProduct(id: string) {
    this.patientsService.getPatient(id)
    .subscribe(patient => {
     this.patient = patient;
    });
  }
}
