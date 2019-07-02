import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateService } from '../services/create.service';
import { MatDialog } from '@angular/material/dialog';
import { CropperDialogComponent } from '../../shared/dialogs/cropper-dialog/cropper-dialog.component';
import IArticleDetails from '../../interfaces/articleDetails.interface';
import ISignatureType from '../../interfaces/signatureType.interface';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { SIGNATURE_TYPES } from '../../constants';
import { ActivatedRoute } from '@angular/router';
import IArticle from '../../interfaces/article.interface';
import IUserSettings from '../../interfaces/user-settings.interface';

@AutoUnsubscribe()
@Component({
  selector: 'bb-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateContainerComponent implements OnInit, OnDestroy {
  articleForm: FormGroup;
  articleDetails?: IArticle;
  signatureTypes: ISignatureType[] = [];
  weeks: any;
  selectSign: any;
  articleId: any;

  constructor(
    private fb: FormBuilder,
    private createService: CreateService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    this.articleId = this.route.snapshot.params.articleId;
    if (this.articleId) {
      this.getArticleDetails(this.articleId);
    }

    this.articleForm = this.fb.group({
      articleText: ['', [Validators.required]],
      ctaText: ['', [Validators.required]],
      ctaLink: ['', [Validators.required]],
      addLink: 'true',
      regardsId: 1,
      addEmail: true,
      grid: 'grid1'
    });
  }

  ngOnInit() {
    this.getSignatureTypes();

    this.articleForm.valueChanges.subscribe(val => {
      this.elipssisText();
    });
  }

  getArticleDetails(id: number) {
    this.createService.getArticleDetails(id).subscribe((data: IArticle) => {
      this.articleDetails = data;
      this.updateForm(this.articleDetails);
    });
  }

  createArticle() {
    this.createService
      .createArticle(this.articleDetails)
      .subscribe((res: IArticle) => {
        this.articleDetails = res;
        this.updateForm(this.articleDetails);
      });
  }

  updateArticle() {
    this.createService
      .updateArticle(this.articleId, this.articleDetails)
      .subscribe((res: IArticle) => {
        this.articleDetails = res;
        this.updateForm(this.articleDetails);
      });
  }

  updateForm(articleDetails: IArticle) {
    this.articleForm.patchValue({
      articleText: articleDetails.texts[0]['text'],
      // ctaText: [articleDetails.ctas[0].url, [Validators.required]],
      // ctaLink: [articleDetails.ctas[0].url, [Validators.required]],
      addLink: 'true',
      regardsId: articleDetails.signature.id,
      addEmail: true,
      grid: articleDetails.grid.title
    });
  }

  onSubmit() {
    this.articleId ? this.updateArticle() : this.createArticle();
  }

  getWeeks() {
    this.createService.getWeeks().subscribe((data: IArticleDetails[]) => {
      this.weeks = data;
    });
  }

  getSignatureTypes() {
    this.createService.getSignatureTypes().subscribe((data: any) => {
      this.signatureTypes = data.results;
      this.selectSign = SIGNATURE_TYPES.find(
        obj => obj.id === this.articleForm.value.regardsId
      );
      this.cdr.detectChanges();
    });
  }

  getSignTypeOptions(typeId: number) {
    this.selectSign = this.signatureTypes.find(obj => obj.id === typeId);
  }

  openCropDialog() {
    this.dialog
      .open(CropperDialogComponent)
      .afterClosed()
      .subscribe(result => this.setLogo(result));
  }

  resetImage() {
    this.setLogo();
  }

  setLogo(logo: string = '') {
    if (this.articleDetails) {
      this.articleDetails.logo = logo;
      this.cdr.detectChanges();
    }
  }

  elipssisText() {
    const containers = document.querySelectorAll('.article-text');
    Array.prototype.forEach.call(containers, container => {
      // Loop through each container
      const p = container.querySelector('span');
      const divh = 60;
      if (p.offsetHeight > divh) {
        // Check if the paragraph's height is taller than the container's height. If it is:
        console.log(p.offsetHeight, p);
        p.textContent = p.textContent.replace(/\W*\s(\S)*$/, '...'); // add an ellipsis at the last shown space
      }
    });
  }

  ngOnDestroy() {}
}
