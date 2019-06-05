import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import IArticleDetails from '../../../interfaces/articleDetails';

@Component({
  selector: 'bb-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePreviewComponent implements OnInit {
  @Input()
  articleDetails: IArticleDetails[];
  @Input()
  articleForm!: any;
  @Input()
  selectSign!: any;

  ngOnInit() {}
}
