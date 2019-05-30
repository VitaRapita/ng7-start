import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

@NgModule({
  declarations: [ArticleContainerComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule,
    NgxHmCarouselModule
  ]
})
export class ArticleModule {}
