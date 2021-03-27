import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Car } from '../models/car.model';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(
    private http: HttpClient
  ) { }

  getAllCars() { 
    return this.http.get<Car[]>(`${environment.url_api}/cars`);
  }

  getCar(id: string) {   
    return this.http.get<Car>(`${environment.url_api}/cars/${id}`);
  }

  createCar( car: any) {
    return this.http.post(`${environment.url_api}/cars`, car);
  }

  updateCar( id: string, changes: Partial<Car>) {
    return this.http.put(`${environment.url_api}/cars/${id}`, changes);
  }

  deleteCar( id: string) {
    return this.http.delete(`${environment.url_api}/cars/${id}`);
  }

}
