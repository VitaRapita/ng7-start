import { Component, OnInit } from '@angular/core';
import {
  ArticleDetails,
  SignatureType
} from '../../create/create-container/create-container.component';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'bb-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit {
  articlesDetails;
  articleDetails;
  signatureTypes;
  selectSignId;
  articles;
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
      .subscribe((data: [ArticleDetails]) => {
        this.articlesDetails = data;
      });
  }

  getSignatureTypes() {
    this.articleService
      .getSignatureTypes()
      .subscribe((data: [SignatureType]) => {
        this.signatureTypes = data;
      });
  }

  getArticles() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  rejectArticle(id) {
    alert(`Article ${id} rejected!`);
  }
  /* functions getting data for template */
  currentArticleDetails(id) {
    return (this.articleDetails = this.articlesDetails.find(
      obj => obj.id === id
    ));
  }

  currentSignType() {
    this.selectSignId = this.articleDetails.regardsId;
    return this.signatureTypes.find(obj => obj.id === this.selectSignId);
  }
}
