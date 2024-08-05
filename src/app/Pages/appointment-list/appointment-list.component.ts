import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, RouterLinkActive, RouterLink, CommonModule, LoginComponent, HttpClientModule, HeaderComponent],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  appointments = [
    {
      patientName: "John Doe",
      appointmentNumber: 12345,
      email: "john.doe@example.com",
      age: 30,
      doctor: "Dr. Smith",
      city: "New York",
      appointmentDate: "2024-08-05",
      appointmentTime: "14:30"
    },
    {
      patientName: "Jane Doe",
      appointmentNumber: 12346,
      email: "jane.doe@example.com",
      age: 28,
      doctor: "Dr. Adams",
      city: "Los Angeles",
      appointmentDate: "2024-08-06",
      appointmentTime: "10:00"
    },
    {
      patientName: "Alice Johnson",
      appointmentNumber: 12347,
      email: "alice.johnson@example.com",
      age: 35,
      doctor: "Dr. Brown",
      city: "Chicago",
      appointmentDate: "2024-08-07",
      appointmentTime: "11:30"
    },
    {
      patientName: "Bob Smith",
      appointmentNumber: 12348,
      email: "bob.smith@example.com",
      age: 40,
      doctor: "Dr. Clark",
      city: "Houston",
      appointmentDate: "2024-08-08",
      appointmentTime: "09:00"
    }
  ];

}
