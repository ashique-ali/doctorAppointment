import { Component, OnInit } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ScheduleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

}
