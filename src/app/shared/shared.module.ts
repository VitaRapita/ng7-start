import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { RouterModule } from '@angular/router';

import * as fromDirectives from './directives';
import * as fromPipes from './pipes';
import * as fromComponents from './components';
import * as fromDialogs from './dialogs';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropperDialogComponent } from './dialogs/cropper-dialog/cropper-dialog.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    NgxHmCarouselModule,
    ImageCropperModule
  ],
  declarations: [
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    ...fromComponents.components,
    ...fromDialogs.components,
    ArticlePreviewComponent,
    ImageCropperComponent,
    CropperDialogComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [...fromDialogs.components],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
    ...fromComponents.components,
    ArticlePreviewComponent
  ]
})
export class SharedModule {}
