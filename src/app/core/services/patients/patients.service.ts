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

  getAllPatients() {
    // return this.products;
    return this.http.get<Patient[]>(`${environment.url_api}/patients`);
  }

  getPatient(id: string) {
    // return this.products.find(item => id === item.id);
    return this.http.get<Patient>(`${environment.url_api}/patients/${id}`);
  }

  createpatient( patient: Patient) {
    return this.http.post(`${environment.url_api}/patients`, patient);
  }

  updatePatient( id: string, changes: Partial<Patient>) {
    return this.http.put(`${environment.url_api}/patients/${id}`, changes);
  }

  deletepatient( id: string) {
    return this.http.delete(`${environment.url_api}/patients/${id}`);
  }

}
