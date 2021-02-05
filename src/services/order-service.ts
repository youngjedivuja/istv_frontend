import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrderServices {
  constructor(private http: HttpClient) {
  }

  getAllOrder(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/orders`, {responseType: 'json'});
  }

  calculateTotal(orderId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/orders/${orderId}/calculateTotal`, {responseType: 'json'});
  }

  toggleOrderStatus(orderId: number, status: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/orders/${orderId}/toggleOrderStatus/${status}`, {responseType: 'json'});
  }

  getAllOrderProductsByOrderId(orderId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/orders/${orderId}/orderproducts`, {responseType: 'json'});
  }

}
