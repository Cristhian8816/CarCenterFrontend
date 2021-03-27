import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Maintenance } from '../models/maintenance.model';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaintenancesService {
  constructor(
    private http: HttpClient
  ) { }

  getAllMaintenances() {  
    return this.http.get<Maintenance[]>(`${environment.url_api}/maintenances`);
  }

  getMaintenance(id: string) {   
    return this.http.get<Maintenance>(`${environment.url_api}/maintenances/${id}`);
  }

  createMaintenance( maintenance: Maintenance) {
    return this.http.post(`${environment.url_api}/maintenances`, maintenance);
  }

  updateMaintenance( id: string, changes: Partial<Maintenance>) {
    return this.http.put(`${environment.url_api}/maintenances/${id}`, changes);
  }

  deleteMaintenance( id: string) {
    return this.http.delete(`${environment.url_api}/maintenances/${id}`);
  }

}
