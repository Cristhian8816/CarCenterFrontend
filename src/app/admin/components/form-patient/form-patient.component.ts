import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';

import { finalize } from 'rxjs/operators';
import { Appointment } from '../../../core/services/models/appointment.model';

import { MyValidators  } from '../../../utils/validators';

import { ClientsService } from '../../../core/services/patients/clients.service';
import { AppointmentsService } from '../../../core/services/appointments/appointments.service';
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
  Marca;
  Description;
  initialDate: Date;
  
  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService,  
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
      .subscribe((newClient) => {
      this.router.navigate(['./admin']);
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
    });
  } 
  
}
