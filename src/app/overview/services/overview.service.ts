import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  SERVER_URL = 'api/';

  constructor(private http: HttpClient) {}

  public getArticles(): Observable<any> {
    return this.http.get(this.SERVER_URL + 'articles');
  }
}
