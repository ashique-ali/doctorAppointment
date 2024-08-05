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
  selector: 'app-doctor',
  standalone: true,
  imports: [FormsModule, RouterLinkActive, RouterLink, CommonModule, LoginComponent, HttpClientModule, HeaderComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css',
  providers: [MasterService]

})
export class DoctorComponent {
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
    "email": "",
    "doctor": "",
    "specialities": "",
  }

  doctor = [
    {
      name: "Dr Ashok Gupta",
    },
    {
      name: "Dr Aman Khan",
    },
    {
      name: "Dr Anjali Sharma"
    },
    {
      name: "Dr Vasim Ansari",
    },
    {
      name: "Dr Sarita"
    }
  ]
  inputValue: any;
  ChangeHandler(event: any) {
    this.inputValue = event?.target?.value;
    console.log("inputValue ::>>", this.inputValue);
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
