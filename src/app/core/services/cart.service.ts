import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Patient } from './models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Patient[] = [];
  private cart = new BehaviorSubject<Patient[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Patient) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
