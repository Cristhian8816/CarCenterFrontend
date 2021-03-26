import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Patient } from '../models/patient.model';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  constructor(
    private http: HttpClient
  ) { }

  getAllClients() {
    // return this.products;
    return this.http.get<Patient[]>(`${environment.url_api}/clients`);
  }

  getPatient(id: string) {
    // return this.products.find(item => id === item.id);
    return this.http.get<Patient>(`${environment.url_api}/clients/${id}`);
  }

  createpatient( patient: Patient) {
    return this.http.post(`${environment.url_api}/clients`, patient);
  }

  updatePatient( id: string, changes: Partial<Patient>) {
    return this.http.put(`${environment.url_api}/clients/${id}`, changes);
  }

  deletepatient( id: string) {
    return this.http.delete(`${environment.url_api}/clients/${id}`);
  }

}
