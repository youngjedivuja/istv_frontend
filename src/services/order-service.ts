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
    return this.http.get(`${environment.springUrl}/orders`, {responseType: 'json'});
  }

  getAllOrderByBuyerId(): Observable<any> {
    return this.http.get(`${environment.springUrl}/orders/forBuyer`, {responseType: 'json'});
  }

  calculateTotal(orderId: number): Observable<any> {
    return this.http.get(`${environment.springUrl}/orders/${orderId}/calculateTotal`, {responseType: 'json'});
  }

  toggleOrderStatus(orderId: number, status: string): Observable<any> {
    return this.http.get(`${environment.springUrl}/orders/${orderId}/toggleOrderStatus/${status}`, {responseType: 'json'});
  }

  getAllOrderProductsByOrderId(orderId: number): Observable<any> {
    return this.http.get(`${environment.springUrl}/orders/${orderId}/orderproducts`, {responseType: 'json'});
  }

  saveOrderDTO(orderDTO): Observable<any> {
    return this.http.post(`${environment.springUrl}/orders/saveOrderDTO`, orderDTO, {responseType: 'json'});
  }

}
