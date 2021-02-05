import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductServices {
  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/products`, {responseType: 'json'});
  }

  getProductByProductId(productId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/products/${productId}`, {responseType: 'json'});
  }

  saveProduct(product): Observable<any> {
    return this.http.post(`${environment.apiUrl}/products`, product, {responseType: 'json'});
  }

  toggleProductRecordStatus(productId: number): Observable<any> {
    return this.http.put(`${environment.apiUrl}/products/${productId}/toggle`, {responseType: 'json'});
  }

}
