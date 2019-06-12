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

@AutoUnsubscribe()
@Component({
  selector: 'bb-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateContainerComponent implements OnInit, OnDestroy {
  articleForm: FormGroup;
  articleDetails?: IArticleDetails;
  signatureTypes: ISignatureType[] = [];
  selectSign: any;

  constructor(
    private fb: FormBuilder,
    private createService: CreateService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    this.articleForm = this.fb.group({
      articleText: ['', [Validators.required]],
      ctaText: ['', [Validators.required]],
      ctaLink: ['', [Validators.required]],
      addLink: 'true',
      regardsId: 1,
      addEmail: true
    });
  }

  ngOnInit() {
    this.getArticleDetails();
    this.getSignatureTypes();
  }

  getArticleDetails() {
    this.createService
      .getArticleDetails()
      .subscribe((data: IArticleDetails[]) => {
        this.articleDetails = data[0];
        this.cdr.detectChanges();
      });
  }

  getSignatureTypes() {
    this.createService
      .getSignatureTypes()
      .subscribe((data: ISignatureType[]) => {
        this.signatureTypes = data;
        this.selectSign = this.signatureTypes.find(
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

  ngOnDestroy() {}
}
