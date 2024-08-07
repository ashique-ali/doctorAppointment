import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from '../schedule/schedule.component';
import { CreateAppointmentService } from '../../Services/create-appointment.service';
import { HotToastService } from '@ngneat/hot-toast';
import { response } from 'express';
import { error } from 'console';
@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [
    FormsModule,
    RouterLinkActive,
    RouterLink,
    CommonModule,
    LoginComponent,
    HttpClientModule,
    HeaderComponent,
    ScheduleComponent,
  ],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
  providers: [CreateAppointmentService],
})
export class AppointmentListComponent implements OnInit {
  allList: any;
  constructor(private _appointment: CreateAppointmentService, private toast: HotToastService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getallAppointmentList();
    this.getDoctorName();
    this.getDoctorSpecialities();
  }

  bookAppointment: any = {
    PatientName: '',
    mobileNo: '',
    age: 0,
    gender: '',
    appointmentDate: '',
    appointmentTime: '',
    disease: '',
    DoctorName: '',
  };

  addAppointData: any;
  createAppointment() {
    this._appointment.addAppointments(this.bookAppointment).subscribe(
      (response) => {
        this.addAppointData = response.data;
        this.toast.success('Appointment Booked Successfully ...!', {
          position: 'top-center',
          duration: 3000,
          style: {
            width: 'fit-content',
            padding: '10px',
            marginTop: '20px',
            margin: 'auto',
            textAlign: 'center',
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 500,
            fontSize: '14px',
            borderRadius: '5px',
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log('Error ::>>', error);
      }
    );
  }

  col = 11;
  getallAppointmentList() {
    this._appointment.getAllAppointmentList().subscribe(
      (response: any) => {
        this.allList = response;
        console.log('allList ::>>', this.allList);
      },
      (error: any) => {
        console.log('Error ::>>', error);
      }
    );
  }

  deleteId: any;
  setDeleteId(id: any) {
    this.deleteId = id;
  }

  deleteHandler() {
    this._appointment.getDelete(this.deleteId).subscribe(
      (response) => {
        this.toast.success('Item deleted successfully ...!', {
          position: 'top-center',
          duration: 3000,
          style: {
            width: 'fit-content',
            padding: '10px',
            marginTop: '20px',
            margin: 'auto',
            textAlign: 'center',
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 500,
            fontSize: '14px',
            borderRadius: '5px',
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        console.log('Something went wrong ::>>', error);
      }
    );
  }

  allDoctorName: any;
  getDoctorName() {
    this._appointment.getDoctorName().subscribe(
      response => {
        this.allDoctorName = response;
      },
      error => {
        console.log("Error ::>>", error);
      }
    )
  }

  allSpecialities: any;
  getDoctorSpecialities() {
    this._appointment.getDoctorSpecialities().subscribe(
      response => {
        this.allSpecialities = response;
      },
      error => {
        console.log("Error ::>>", error);
      }
    )
  }
}
