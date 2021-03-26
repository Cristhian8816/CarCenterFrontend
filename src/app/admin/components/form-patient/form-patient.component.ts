import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import {MatCalendar} from '@angular/material/datepicker';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';

import { finalize } from 'rxjs/operators';
import { Appointment } from '../../../core/services/models/appointment.model';

import { MyValidators  } from '../../../utils/validators';

import { PatientsService } from '../../../core/services/patients/patients.service';
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
  patientsNames = [];
  patientsIds = [];
  appointments = [];
  apointmentsTypes = ['Neurologia', 'Medicina general', 'Pediatria', 'Odontologia' ];
  IdAppointment;
  PatientName;
  appointmentDate: Date;
  patientNameSelected;
  appointmentTypeSelected;
  SameAppointmentDate = [];
  DateAppointmentPatient;
  SameDate;
  constructor(
    private formBuilder: FormBuilder,
    private patientsService: PatientsService,
    private appointmentsService: AppointmentsService,
    private router: Router,
    private storage: AngularFireStorage,
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.FecthAppointmentsID();
    this.FecthPatients();
    this.fetchAppointments();
   }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      // Search Patient ID for Patient Name
      // -------------------------------------------------------
      let index = 0;
      let selectedPatientID = 0;
      this.patientsNames.forEach(patientName => {
        if (patientName === this.patientNameSelected[0]) {
          selectedPatientID = this.patientsIds[index];
        }
        index++;
      });
      // -------------------------------------------------------

      // Verify if patient has appointment that Date
      this.AppointmentSameDate(this.appointmentDate, selectedPatientID);
      console.log(this.SameAppointmentDate);
      if (this.SameAppointmentDate.indexOf('true') > -1) {
        alert('Please, Change the Appointment Date for this Patient because has an Appointment for this day');
      } else {
        // Post to Appointments
        const appointment = { 'AppointmentId': this.IdAppointment,
        'Date': this.appointmentDate,
        'AppointmentType': this.appointmentTypeSelected[0],
        'PatientID': selectedPatientID};
        
        this.appointmentsService.createAppointment(appointment)
        .subscribe((newappointment) => {
        this.router.navigate(['./admin/appointments']);
        });
      }
    }
    this.SameAppointmentDate = [];
  }

  fetchAppointments() {
    this.appointmentsService.getAllAppointments()
    .subscribe(appointments => {
      this.appointments = appointments;
    });
  }

  AppointmentSameDate(SameDate: Date, selectedPatientID: number) {
    this.appointments.forEach(appointment => {
      const PatientID = Number(appointment.PatientId);
      if (PatientID === selectedPatientID) {
        this.DateAppointmentPatient = new Date(appointment.Date);
        this.SameDate = new Date(SameDate);
        const diffDays: number = (this.SameDate - this.DateAppointmentPatient) / (1000 * 60 * 60 * 24 );
        if (diffDays > -1 && diffDays < 1) {
          this.SameAppointmentDate.push('true');
        }
      }
    });
    return this.SameAppointmentDate;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
     PatientId: ['', [Validators.required]],
     appointmentType: ['', [Validators.required]],
     Date: ['', [Validators.required]]
    });
  }

  FecthAppointmentsID() {
    this.appointmentsService.getAllAppointments()
    .subscribe(appointments => {
      const ID = appointments.length + 1;
      this.IdAppointment = ID;
    });
  }

  FecthPatients() {
    this.patientsService.getAllPatients()
    .subscribe(patients => {
      this.patientsNames = this.findPatientsName(patients);
    });
  }

  findPatientsName(patients) {
    patients.forEach(patient => {
      this.patientsNames.push(patient.Name);
      this.patientsIds.push(patient.PatientId);
    });
    return this.patientsNames;
  }
}
