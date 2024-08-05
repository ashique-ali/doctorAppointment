import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MasterService } from '../../Services/master.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NewAppointmentComponent } from '../new-appointment/new-appointment.component';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, HttpClientModule, FormsModule, NewAppointmentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MasterService]

})
export class LoginComponent {
  loading: boolean = false;
  loginShowpassword = false;
  error: any;

  toggleLoginPassword(): void {
    this.loginShowpassword = !this.loginShowpassword;
  }

  constructor(private _master: MasterService, private router: Router, private toast: HotToastService) { }

  signInData: any = {
    username: "",
    password: ""
  }

  LoginForm(): void {
    this.loading = true;
    this._master.loginData(this.signInData).subscribe(
      response => {
        this.signInData = response.data;
        const errors = response.message;
        this.toast.success(errors, {
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
        })
        this.router.navigate(['/admin/dashboard']);
      },
      error => {
        this.loading = false;
        const errorMessage = error.error.message;
        this.toast.error(errorMessage, {
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

