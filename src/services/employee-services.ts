import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeServices {
  constructor(private http: HttpClient) {
  }

  getAllEmployee(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/employees`, {responseType: 'json'});
  }

  toggleEmployeeRecordStatus(employeeId: number): Observable<any> {
    return this.http.put(`${environment.apiUrl}/employees/${employeeId}/toggle`, {responseType: 'json'});
  }

  getEmployeeById(employeeId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/employees/${employeeId}`, {responseType: 'json'});
  }

  saveEmployee(employee): Observable<any> {
    return this.http.post(`${environment.apiUrl}/employees/saveEmployeeDTO`, employee, {responseType: 'json'});
  }

  updateEmployee(employee): Observable<any> {
    return this.http.put(`${environment.apiUrl}/employees`, employee, {responseType: 'json'});
  }

}
