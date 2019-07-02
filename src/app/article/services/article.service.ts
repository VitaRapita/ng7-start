import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticleDetails(id: number): Observable<any> {
    return this.http.get(`${API_URL}articles/${id}/`);
  }

  public getSignatureTypes(): Observable<any> {
    return this.http.get(`${API_URL}signatures/`);
  }

  public getArticles(): Observable<any> {
    return this.http.get(`${API_URL}articles/`);
  }
}
