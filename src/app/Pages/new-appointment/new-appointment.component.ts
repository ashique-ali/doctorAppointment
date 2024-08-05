import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../Services/master.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-new-appointment',
  standalone: true,
  imports: [FormsModule, RouterLinkActive, RouterLink, CommonModule, LoginComponent, HttpClientModule, HeaderComponent],
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css',
  providers: [MasterService]
})
export class NewAppointmentComponent {
  constructor(private _master: MasterService, private toast: HotToastService) { }
  userDetails: any;
  loading: boolean = false;
  bookAppointment: any = {
    "name": "",
    "mobileNo": "",
    "city": "",
    "age": 0,
    "gender": "",
    "appointmentDate": "",
    "appointmentTime": "",
    "isFirstVisit": false,
    "narration": ""
  }

  saveAppointment(): void {
    this.loading = true;
    this._master.bookAppointment(this.bookAppointment).subscribe(
      response => {
        this.bookAppointment = response.data;
        this.toast.success('Appontement Booked ...!', {
          position: 'top-center',
          duration: 3000,
          style: {
            width: 'fit-content',
            padding: '10px',
            marginTop: "20px",
            margin: 'auto',
            textAlign: "center",
            backgroundColor: "green",
            color: "white",
            fontWeight: 500,
            fontSize: "14px",
            borderRadius: '5px'
          },
        });
        this.bookAppointment = "";
      },
      error => {
        this.loading = false;
        this.toast.error('Please fill all required fields ...!', {
          position: 'top-center',
          duration: 3000,
          style: {
            width: 'fit-content',
            padding: '10px',
            marginTop: "20px",
            margin: 'auto',
            textAlign: "center",
            backgroundColor: "brown",
            color: "white",
            fontWeight: 500,
            fontSize: "14px",
            borderRadius: '5px'
          },
        });
        console.error('Error fetching data', error);
      }
    )
  }

}


