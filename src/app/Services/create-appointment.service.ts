import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateAppointmentService {
  [x: string]: any;
  constructor(private http: HttpClient) { }

  addAppointment = "http://localhost:5000/api/createAppointment";
  addAppointments(addAppointment: any): Observable<any> {
    return this.http.post<any>(`${this.addAppointment}`, addAppointment);
  }

  appointmentListUrl = "http://localhost:5000/api/getAllApointment";
  getAllAppointmentList(): Observable<any> {
    return this.http.get<any>(`${this.appointmentListUrl}`);
  }

  deleteUrl = "http://localhost:5000/api/deleteAppointment";
  getDelete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.deleteUrl}/${id}`);
  }

  getAllDoctorsName = "http://localhost:5000/api/getAllDoctorsName";
  getDoctorName(): Observable<any> {
    return this.http.get<any>(`${this.getAllDoctorsName}`);
  }

  getAllDoctorSpecialities = "http://localhost:5000/api/getAllDoctorsWork";
  getDoctorSpecialities(): Observable<any> {
    return this.http.get<any>(`${this.getAllDoctorSpecialities}`);
  }
}
