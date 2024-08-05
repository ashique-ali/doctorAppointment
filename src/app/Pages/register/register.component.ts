import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../Services/master.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MasterService]
})
export class RegisterComponent {
  cnfshowPassword = false;
  showpassword = false;
  signup = "";
  loading: boolean = false;
  constructor(private _master: MasterService, private router: Router, private toast: HotToastService) { }

  togglePasswordVisibility(): void {
    this.showpassword = !this.showpassword;
  }

  togglePasswordVisibilityy(): void {
    this.cnfshowPassword = !this.cnfshowPassword;
  }

  userData: any = {
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    confirmpassword: ""
  };

  errors: any;
  fetchData(): void {
    this.loading = true;
    this._master.getData(this.userData).subscribe(
      response => {
        this.userData = response;
        const errors = response.message
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
        });
        this.router.navigate(['login']);
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
    );
  }
}
