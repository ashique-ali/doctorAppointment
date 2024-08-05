import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { NewAppointmentComponent } from '../new-appointment/new-appointment.component';
import { getDecodeAccessToken } from '../../../config/helper';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, AppointmentListComponent, RouterLink, NewAppointmentComponent, AppointmentListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  getDecodeAccessToken: any;
  token: any;
  userName: string = "";

  ngOnInit(): void {
    // this.token = this.getDecodeAccessToken();
    // const hasToken = localStorage.getItem('token');
    // this.userName = this.token.firstName;
    // console.log("userName ::>>", this.userName);
  }
}
