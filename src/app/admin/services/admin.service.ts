import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import IStore from '../../interfaces/store.interface';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(`${API_URL}users/`);
  }

  public getStores(): Observable<IStore[]> {
    return this.http.get<IStore[]>(`${API_URL}stores/`);
  }
}
