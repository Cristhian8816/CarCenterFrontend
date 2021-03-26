import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Client } from './models/client.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Client[] = [];
  private cart = new BehaviorSubject<Client[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Client) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
