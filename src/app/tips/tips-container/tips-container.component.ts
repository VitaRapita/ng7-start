import { Component, OnDestroy, OnInit } from '@angular/core';
import { CropperDialogComponent } from '../../shared/dialogs/cropper-dialog/cropper-dialog.component';
import { MatDialog } from '@angular/material';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'bb-tips-container',
  templateUrl: './tips-container.component.html',
  styleUrls: ['./tips-container.component.scss']
})
export class TipsContainerComponent implements OnInit, OnDestroy {
  htmlText = '';
  titleImage = '';
  sliderColor = 'primary';
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openCropDialog() {
    const dialogRef = this.dialog.open(CropperDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.titleImage = result;
    });
  }

  ngOnDestroy() {}
}
