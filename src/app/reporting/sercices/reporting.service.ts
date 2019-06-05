import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  SERVER_URL = 'api/';

  constructor(private http: HttpClient) {}

  public getBarChartData(): Observable<any> {
    return this.http.get(this.SERVER_URL + 'barChart');
  }

  public getLineChartData(): Observable<any> {
    return this.http.get(this.SERVER_URL + 'lineChart');
  }
}
