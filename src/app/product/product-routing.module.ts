import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PatientsComponent} from './components/products/products.component';
import {PatientDetailComponent} from './components/product-detail/product-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PatientsComponent
    },
    {
        path: ':id',
        component: PatientDetailComponent
    }
];

@NgModule({
imports: [
   RouterModule.forChild(routes),
],
exports: [
    RouterModule
]
})
export class ProductRoutingModule {}
