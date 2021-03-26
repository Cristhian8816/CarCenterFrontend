import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Appointment } from '../models/appointment.model';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  constructor(
    private http: HttpClient
  ) { }

  getAllAppointments() {
    // return this.products;
    return this.http.get<Appointment[]>(`${environment.url_api}/appointments`);
  }

  getAppointment(id: string) {
    // return this.products.find(item => id === item.id);
    return this.http.get<Appointment>(`${environment.url_api}/appointments/${id}`);
  }

  createAppointment( appointment: any) {
    return this.http.post(`${environment.url_api}/appointments`, appointment);
  }

  updateAppointment( id: string, changes: Partial<Appointment>) {
    return this.http.put(`${environment.url_api}/appointments/${id}`, changes);
  }

  deleteAppointment( id: string) {
    return this.http.delete(`${environment.url_api}/appointments/${id}`);
  }

}
