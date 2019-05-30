import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  SERVER_URL = 'api/';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.SERVER_URL + 'users');
  }

  public getStores(): Observable<any> {
    return this.http.get(this.SERVER_URL + 'stores');
  }
}
