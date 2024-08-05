import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../Services/master.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { HotToastService } from '@ngneat/hot-toast';
import { response } from 'express';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [FormsModule, RouterLinkActive, RouterLink, CommonModule, LoginComponent, HttpClientModule, HeaderComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css',
  providers: [MasterService]

})
export class DoctorComponent implements OnInit {
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
    "doctar": "",
    "specialities": "",
  }

  doctorsList: { doctorName: string, specialties: string[] }[] = [
    {
      doctorName: "Dr. John Doe",
      specialties: [
        "Cardiology",
        "Internal Medicine",
        "Preventive Medicine"
      ]
    },
    {
      doctorName: "Dr. Jane Smith",
      specialties: [
        "Pediatrics",
        "Adolescent Medicine",
        "Neonatology"
      ]
    },
    {
      doctorName: "Dr. Emily Johnson",
      specialties: [
        "Orthopedics",
        "Sports Medicine",
        "Rehabilitation"
      ]
    },
    {
      doctorName: "Dr. Michael Brown",
      specialties: [
        "Dermatology",
        "Cosmetic Dermatology",
        "Pediatric Dermatology"
      ]
    },
    {
      doctorName: "Dr. Sarah Davis",
      specialties: [
        "Neurology",
        "Neurophysiology",
        "Epilepsy"
      ]
    },
    {
      doctorName: "Dr. William Martinez",
      specialties: [
        "Psychiatry",
        "Child and Adolescent Psychiatry",
        "Forensic Psychiatry"
      ]
    },
    {
      doctorName: "Dr. Patricia Wilson",
      specialties: [
        "Gastroenterology",
        "Hepatology",
        "Endoscopy"
      ]
    }
  ];
  
  allSpecialties: string[] = [];
  inputValue: any;
  doctorName: any;
  
  ChangeHandler(event: any) {
    if (event.target.name === "doctar") {
      this.doctorName = event.target.value;
      const queryObject = this.doctorsList.find((item) => item.doctorName === this.doctorName);
      this.allSpecialties = queryObject ? queryObject.specialties : [];
    }
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

  ngOnInit(): void {
    this.getAppointments();
  }
  
  appointmentlist: any;
  getAppointments() {
    this._master.getAppointmentList().subscribe(
      response => {
        this.appointmentlist = response;
        console.log("appointmentlist ::>>", this.appointmentlist);
      },
      error => {
        console.error('Error fetching appointments:', error);
      }
    );
  }
}
