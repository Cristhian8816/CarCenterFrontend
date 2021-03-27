import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators  } from '../../../utils/validators';

import { ClientsService } from '../../../core/services/clients/clients.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.clientsService.getClient(this.id)
      .subscribe(product => {
       this.form.patchValue(product);
      });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.clientsService.updateClient(this.id, product)
      .subscribe((newProduct) => {
      console.log(newProduct);
      this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
     title: ['', [Validators.required]],
     price: [0, [Validators.required, MyValidators.isPriceValid]],
     image: [''],
     description: ['', [Validators.required]]
    });
  }

  get proceField() {
    return this.form.get('price');
  }

}
