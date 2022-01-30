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
    return this.http.get(`${environment.springUrl}/employees`, {responseType: 'json'});
  }

  toggleEmployeeRecordStatus(employeeId: number): Observable<any> {
    return this.http.put(`${environment.springUrl}/employees/${employeeId}/toggle`, {responseType: 'json'});
  }

  getEmployeeById(employeeId: number): Observable<any> {
    return this.http.get(`${environment.springUrl}/employees/${employeeId}`, {responseType: 'json'});
  }

  saveEmployee(employee): Observable<any> {
    return this.http.post(`${environment.springUrl}/employees/saveEmployeeDTO`, employee, {responseType: 'json'});
  }

  updateEmployee(employee): Observable<any> {
    return this.http.put(`${environment.springUrl}/employees`, employee, {responseType: 'json'});
  }

}
