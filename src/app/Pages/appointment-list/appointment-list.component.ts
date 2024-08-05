import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../Services/master.service';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, RouterLinkActive, RouterLink, CommonModule, LoginComponent, HttpClientModule, HeaderComponent],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
  providers: [MasterService]
})
export class AppointmentListComponent implements OnInit {
  allList: any;
  
  constructor(private _master: MasterService){}
  ngOnInit(): void {
    this.getallList()
  }
  
  getallList() {
    this._master.getAppointmentList().subscribe(
      (response: any) => {
        this.allList = response;
        console.log("allList ::>>", this.allList);
      },
      (error: any) => {
        console.log("Error ::>>", error);
      }
    );
  }
  
}
