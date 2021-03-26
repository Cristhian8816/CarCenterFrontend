import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {PatientComponent} from './components/product/product.component';
import {PatientsComponent} from './components/products/products.component';
import {PatientDetailComponent} from './components/product-detail/product-detail.component';

import {ProductRoutingModule} from './product-routing.module';
import {SharedModule} from './../shared/shared.module';
import {MaterialModule} from '../material/material.module';

@NgModule({
    declarations: [
        PatientComponent,
        PatientsComponent,
        PatientDetailComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        MaterialModule
    ]
  })

export class ProductModule {
}
