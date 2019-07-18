import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import IArticle from '../../interfaces/article.interface';
import IApiArticleResults from '../../interfaces/article.interface';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  constructor(private http: HttpClient) {}

  public getArticles(
    count: number,
    page: number
  ): Observable<IApiArticleResults> {
    return this.http.get<IApiArticleResults>(
      `${API_URL}articles/?count=${count}&page=${page}`
    );
  }

  public deleteArticle(id: number): Observable<IArticle[]> {
    return this.http.delete<IArticle[]>(`${API_URL}articles/${id}`);
  }

  public declineArticle(id: number): Observable<IArticle[]> {
    return this.http.post<IArticle[]>(`${API_URL}articles/${id}/decline`, {});
  }
}
