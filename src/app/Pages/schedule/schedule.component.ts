import { Component, OnInit } from '@angular/core';
import { getDecodeAccessToken } from '../../../config/helper';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  hasToken = localStorage.getItem("token");
  token: any = getDecodeAccessToken();
  userName = "";

  ngOnInit(): void {
    this.userName = this.token.firstName;
    console.log("hasToken ::>>", this.hasToken)
    console.log("userName::>>", this.userName);
  }
}
