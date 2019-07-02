import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import ISignatureType from '../../interfaces/signatureType.interface';
import IArticle from '../../interfaces/article.interface';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  constructor(private http: HttpClient) {}

  public getArticleDetails(id: number): Observable<IArticle> {
    return this.http.get<IArticle>(`${API_URL}articles/${id}`);
  }

  public getSignatureTypes(): Observable<ISignatureType[]> {
    return this.http.get<ISignatureType[]>(`${API_URL}signatures/`);
  }

  public getWeeks(): Observable<any> {
    return this.http.get(`${API_URL}weeks/`);
  }

  public createArticle(data): Observable<IArticle> {
    return this.http.post<IArticle>(`${API_URL}articles/`, data);
  }

  public updateArticle(id, data): Observable<IArticle> {
    return this.http.put<IArticle>(`${API_URL}articles/${id}`, data);
  }
}
