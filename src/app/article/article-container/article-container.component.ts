import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import ISignatureType from '../../interfaces/signatureType.interface';
import IArticle from '../../interfaces/article.interface';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { ActivatedRoute } from '@angular/router';
import { SIGNATURE_TYPES } from '../../constants';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@AutoUnsubscribe()
@Component({
  selector: 'bb-article-container',
  animations: [
    trigger('move', [
      state(
        'initial',
        style({
          transform: 'translateX(0) scale(1)'
        })
      ),
      state(
        'final',
        style({
          transform: 'translateX(0) scale(1)'
        })
      ),
      transition(
        'initial<=>final',
        animate(
          '1.5s',
          keyframes([
            style({ transform: 'translateX(0)', offset: 0.1 }),
            style({ transform: 'translateX(-100%)', offset: 0.2 }),
            style({ transform: 'translateX(100%)', offset: 0.4 }),
            style({ transform: 'translateX(0)', offset: 0.7 })
          ])
        )
      )
    ])
  ],
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit, OnDestroy {
  articleDetails!: IArticle;
  signatureTypes: ISignatureType[] = [];
  articles: IArticle[] = [];
  articleId: number;
  currentAnimationState = 'initial';
  currentIndex = 0;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.articleId = this.route.snapshot.params.articleId;
  }

  ngOnInit() {
    this.articleId
      ? this.getArticleDetails(this.articleId)
      : this.getArticles();
  }

  getArticleDetails(id: number) {
    this.articleService.getArticleDetails(id).subscribe((data: IArticle) => {
      this.articleDetails = data;
      this.articles.push(this.articleDetails);
    });
  }

  getSignatureTypes(id: number) {
    return SIGNATURE_TYPES.find(obj => obj.id === id);
  }

  getArticles() {
    // this.articleService.getArticles().subscribe((data: [IArticle]) => {
    this.articleService.getArticles().subscribe((data: any) => {
      this.articles = data.results;
    });
  }

  rejectArticle(id: number) {
    alert(`Article ${id} rejected!`);
  }

  getCurrentArticleId(action: string) {
    const index = this.articles.findIndex(
      x => x.id === this.articleDetails['id']
    );
    let id;
    switch (action) {
      case 'decrease':
        id = this.articles[index - 1].id;
        break;
      case 'increase':
        id = this.articles[index + 1].id;
        break;
    }
    return id;
  }

  toggle() {
    this.currentAnimationState =
      this.currentAnimationState === 'initial' ? 'final' : 'initial';
  }

  ngOnDestroy() {}
}
