import { Component, OnInit } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from '../schedule/schedule.component';
import { CreateAppointmentService } from '../../Services/create-appointment.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ScheduleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [CreateAppointmentService],

})
export class DashboardComponent implements OnInit {
  totalDoctor: any;
  allPateint: any;

  constructor(private _appointment: CreateAppointmentService){}

  ngOnInit(): void {
    this.getDoctorName();
    this.getallAppointmentList();
  }

  getDoctorName() {
    this._appointment.getDoctorName().subscribe(
      response => {
        this.totalDoctor = response.length;
      },
      error => {
        console.log("Error ::>>", error);
      }
    )
  }

  getallAppointmentList() {
    this._appointment.getAllAppointmentList().subscribe(
      response => {
        this.allPateint = response.length;
        console.log('allPateint ::>>', this.allPateint);
      },
      error => {
        console.log('Error ::>>', error);
      }
    );
  }
}
