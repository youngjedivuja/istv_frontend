import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EmployeeServices {
  constructor(private http: HttpClient) {
  }

  getAllEmployee() {
    return this.http.get(`${environment.apiUrl}/employees`, {responseType: 'json'});
  }

}
