import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Client } from '../models/client.model';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(
    private http: HttpClient
  ) { }

  getAllClients() {   
    return this.http.get<Client[]>(`${environment.url_api}/clients`);
  }

  getClient(id: string) {  
    return this.http.get<Client>(`${environment.url_api}/clients/${id}`);
  }

  createClient( client: Client) {
    return this.http.post(`${environment.url_api}/clients`, client);
  }

  updateClient( id: string, changes: Partial<Client>) {
    return this.http.put(`${environment.url_api}/clients/${id}`, changes);
  }

  deleteClient( id: string) {
    return this.http.delete(`${environment.url_api}/clients/${id}`);
  }

}
