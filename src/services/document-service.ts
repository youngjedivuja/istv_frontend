import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../utils/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }

  getAllDocuments(): Observable<any> {
    return this.http.get(`${environment.djangoUrl}documents`, {responseType: 'json'});
  }

  deleteDocument(id): Observable<any> {
    return this.http.delete(`${environment.djangoUrl}documents/?q=` + id, {responseType: 'json'});
  }

  downloadDocument(id): Observable<any>{
    return this.http.get(`${environment.djangoUrl}documents/?q=` + id, {responseType: 'blob'});
  }

  saveDocument(document: { owner: any; file_name: any; category: any }, value: any): Observable<any>{
    const fd = new FormData();
    fd.append('file', value);
    fd.set('document', JSON.stringify(document));
    // fd.append('document', new Blob([JSON.stringify(document)], {type: 'application/json'}));
    console.log(fd);
    return this.http.post
    (`${environment.djangoUrl}documents`, fd,
      {headers : {Authorization: this.authService.userJwtToken }});
  }
}
