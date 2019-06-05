import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import ISignatureType from '../../interfaces/signatureType';
import IArticleDetails from '../../interfaces/articleDetails';
import IArticle from '../../interfaces/article';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'bb-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit, OnDestroy {
  articlesDetails: IArticleDetails[] = [];
  signatureTypes: ISignatureType[] = [];
  articles: IArticle[] = [];
  currentIndex = 0;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();
    this.getArticlesDetails();
    this.getSignatureTypes();
  }

  getArticlesDetails() {
    this.articleService
      .getArticleDetails()
      .subscribe((data: [IArticleDetails]) => {
        this.articlesDetails = data;
      });
  }

  getSignatureTypes() {
    this.articleService
      .getSignatureTypes()
      .subscribe((data: [ISignatureType]) => {
        this.signatureTypes = data;
      });
  }

  getArticles() {
    this.articleService.getArticles().subscribe((data: [IArticle]) => {
      this.articles = data;
    });
  }

  rejectArticle(id: number) {
    alert(`Article ${id} rejected!`);
  }
  /* functions getting data for template */
  getCurrentArticleDetails(id: number) {
    return this.articlesDetails.find(obj => obj.id === id);
  }

  currentSignType(id: number) {
    const currentArticle = this.getCurrentArticleDetails(id);

    if (currentArticle) {
      return this.signatureTypes.find(
        obj => obj.id === currentArticle.regardsId
      );
    }
    return false;
  }

  ngOnDestroy() {}
}
