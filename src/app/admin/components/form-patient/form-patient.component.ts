import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';

import { finalize } from 'rxjs/operators';

import { MyValidators  } from '../../../utils/validators';

import { ClientsService } from '../../../core/services/clients/clients.service';
import { CarsService } from '../../../core/services/cars/cars.service';
import { MaintenancesService } from '../../../core/services/maintenances/maintenances.service';
import { Observable } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})
export class FormPatientComponent implements OnInit {
  form: FormGroup;  
  FullName: string;
  IdentificationsTypes =['Cedula de Ciudadania','Cedula de Extranjeria','Tarjeta de Identidad']
  identificationtype = [];
  ID: string;
  CellPhone: string;
  Address: string;
  Email: string;
  Marca: string;
  Description: string;
  maintenanceDate: Date;
  
  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService, 
    private maintenancesService: MaintenancesService,
    private carsService: CarsService, 
    private router: Router,
    private storage: AngularFireStorage,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {

   }

   saveInformation(event: Event) {
    event.preventDefault();
    if (this.form.valid) {             
      // Post to Clients
      const client = { 
        'Clients_key' : '',
        'FullName': this.FullName,
        'DocumentType': this.identificationtype[0],
        'ID': this.ID,
        'Cellphone': this.CellPhone,
        'Address': this.Address,
        'email': this.Email,
      }  

      this.clientsService.createClient(client)
      .subscribe((NewClient) => {         
        this.clientsService.getClient(this.ID)
        .subscribe((client) => {       
          // Post to Cars
          const car = { 
            'Clients_key' : client.Clients_key,
            'Marca' : this.Marca,       
          }
          console.log(car);
          this.carsService.createCar(car)
          .subscribe((car) => {
              // Post to Maintenance
              const maintenance = { 
              'Maintenance_key' : '',
              'Clients_key' : client.Clients_key,
              'Description' : this.Description,  
              'initialDate' : this.maintenanceDate,
              'endDate' :  this.maintenanceDate,
              'State' : false   
            }
            console.log(maintenance);
            this.maintenancesService.createMaintenance(maintenance)
            .subscribe((car) => {
              this.router.navigate(['./admin/products']);
            });
          });                             
        });                      
      });                                    
    }   
  }
  

  private buildForm() {
    this.form = this.formBuilder.group({
     FullName: ['', [Validators.required]],
     DocumentType: ['', [Validators.required]],
     ID: ['', [Validators.required]],
     Cellphone: ['', [Validators.required]],
     Address: ['', [Validators.required]],
     email: ['', [Validators.required]], 
     Marca: ['', [Validators.required]],    
     Description: ['', [Validators.required]],
     initialDate: ['', [Validators.required]],
    });
  } 
  
}
