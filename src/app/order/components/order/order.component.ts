import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Patient } from '../../../core/services/models/patient.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  product$: Observable<Patient[]>;

  constructor(
    private cartService: CartService
  ) {
    this.product$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
