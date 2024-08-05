import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  [x: string]: any;
  baseUrl = config.baseUrl;

  constructor(private http: HttpClient) { }
  getData(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, userData);
  }  
  
  loginData(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, loginData);
  }

  baseURL = "http://localhost:5000/api/createAppointment";
  bookAppointment(bookData: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}`, bookData);
  }
}



