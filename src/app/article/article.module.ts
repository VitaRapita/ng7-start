import { NgModule } from '@angular/core';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

@NgModule({
  declarations: [ArticleContainerComponent],
  imports: [SharedModule, ArticleRoutingModule, NgxHmCarouselModule]
})
export class ArticleModule {}
