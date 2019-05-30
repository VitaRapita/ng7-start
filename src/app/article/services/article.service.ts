import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  SERVER_URL = 'api/';

  constructor(private http: HttpClient) {}

  public getArticleDetails(): Observable<any> {
    return this.http.get(this.SERVER_URL + 'articleDetails');
  }

  public getSignatureTypes(): Observable<any> {
    return this.http.get(this.SERVER_URL + 'signatureTypes');
  }

  public getArticles(): Observable<any> {
    return this.http.get(this.SERVER_URL + 'articles');
  }
}
