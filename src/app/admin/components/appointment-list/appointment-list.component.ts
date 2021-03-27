import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

import { CarsService } from '../../../core/services/cars/cars.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  appointments = [];
  isDisabled = [];
  date;
  cancelDate;
  displayedColumns: string[] = ['AppointmentId', 'PatientId', 'AppointmentType', 'Date', 'actions'];

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.carsService.getAllCars()
    .subscribe(appointments => {
      this.isDisabled = this.calculateCancelAppointment(appointments);
      this.appointments = appointments;
    });
  }

  calculateCancelAppointment(appointments) {
    appointments.forEach(appointment => {
      this.date = new Date();
      this.cancelDate = new Date(appointment.Date);
      const diffDays: number = Math.floor((this.cancelDate - this.date) / (1000 * 60 * 60 * 24));
      if (diffDays < 1) {
        this.isDisabled.push(true);
      } else {
        this.isDisabled.push(false);
      }
    });
    return this.isDisabled;
  }

  deleteAppointment(id: string) {
    this.carsService.deleteCar(id)
    .subscribe(rta => {
      this.fetchAppointments();
    });
  }
}
