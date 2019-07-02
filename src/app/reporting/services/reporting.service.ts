import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  constructor(private http: HttpClient) {}

  public getBarChartData(): Observable<any> {
    return this.http.get(`${API_URL}barChart/`);
  }

  public getLineChartData(): Observable<any> {
    return this.http.get(`${API_URL}lineChart`);
  }
}
