import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import { CreateService } from '../services/create.service';
import { MatDialog } from '@angular/material/dialog';
import { CropperDialogComponent } from '../../shared/dialogs/cropper-dialog/cropper-dialog.component';

export interface ArticleDetails {
  id: number;
  supermarketName: string;
  storeName: string;
  storeText: string;
  logo: string;
  titleImage: string;
  articleText: string;
  ctaText: string;
  ctaLink: string;
}

export interface SignatureType {
  id: number;
  signatureType: string;
  nameSupermarketManager: boolean;
  nameAssistantManager: boolean;
  title: boolean;
  street: boolean;
  houseNumber: boolean;
  cityAsTitle: boolean;
  city: boolean;
  phone: boolean;
  email: boolean;
  entrepreneur: boolean;
}

@Component({
  selector: 'bb-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.scss']
})
export class CreateContainerComponent implements OnInit {
  articleForm: FormGroup;
  articleDetails;
  signatureTypes;
  selectSign;

  constructor(
    private fb: FormBuilder,
    private createService: CreateService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.articleForm = this.fb.group({
      articleText: ['', [Validators.required]],
      ctaText: ['', [Validators.required]],
      ctaLink: ['', [Validators.required]],
      addLink: 'true',
      regardsId: 1,
      addEmail: true
    });

    this.getArticleDetails();
    this.getSignatureTypes();
  }

  getArticleDetails() {
    this.createService
      .getArticleDetails()
      .subscribe((data: [ArticleDetails]) => {
        this.articleDetails = data[0];
      });
  }

  getSignatureTypes() {
    this.createService
      .getSignatureTypes()
      .subscribe((data: [SignatureType]) => {
        this.signatureTypes = data;
        this.selectSign = this.signatureTypes.find(
          obj => obj.id === this.articleForm.value.regardsId
        );
      });
  }

  getSignTypeOptions(typeId) {
    this.selectSign = this.signatureTypes.find(obj => obj.id === typeId);
  }

  openCropDialog() {
    const dialogRef = this.dialog.open(CropperDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.articleDetails.logo = result;
    });
  }

  resetImage() {
    this.articleDetails.logo = '';
  }
}
