import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientsService } from '../../../core/services/clients/clients.service';
import { CarsService } from '../../../core/services/cars/cars.service';
import { MaintenancesService } from '../../../core/services/maintenances/maintenances.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})
export class BillConsultComponent implements OnInit {
  form: FormGroup;  
  clients = [];
  client_key: string;

  FullName: string; 
  identificationtype :string;
  ID: string;
  CellPhone: string;
  Address: string;
  Email: string;
  Marca: string;
  Description: string;
  maintenanceDate: Date;
  state: boolean;
  renderice: boolean;
  message: string;
  maintenanceState: string;

  constructor(
    private formBuilder: FormBuilder,
    private clientServices: ClientsService,
    private carsService: CarsService,
    private maintenancesService  : MaintenancesService,   
  ) {
    this.buildForm()
   }

  ngOnInit(): void {  
    this.renderice = false; 
  }

  consultBills(event: Event) {
    if (this.form.valid) {      
      console.log('el bonton se activo');
      this.clientServices.getClient(this.client_key)
      .subscribe((Client) => {           
          console.log('entro al if');  
          this.FullName = Client.FullName;
          this.identificationtype = Client.DocumentType;
          this.CellPhone = Client.Cellphone;
          this.Address = Client.Address;
          this.ID = Client.ID;
          this.Email = Client.email;

          this.carsService.getCar(Client.Clients_key)
          .subscribe((car) => { 
            this.Marca = car.Marca;
            this.maintenancesService.getMaintenance(Client.Clients_key)
            .subscribe((maintenance) => {
              this.Description = maintenance.Description;
              this.maintenanceDate = maintenance.initialDate;
              this.state = maintenance.State;
              if(this.state)
              {
                this.maintenanceState = 'Completado';
              }else{
                this.maintenanceState = 'En proceso';
              }

              this.renderice = true;
            });
          });        
      },(error) => {        
        this.message = 'Usuario no encontrado'
    });
    }    
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      client_key: ['', [Validators.required]],    
    });
  } 

}
