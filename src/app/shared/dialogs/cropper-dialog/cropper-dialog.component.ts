import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-cropper-dialog',
  templateUrl: './cropper-dialog.component.html',
  styleUrls: ['./cropper-dialog.component.scss']
})
export class CropperDialogComponent implements OnInit {
  image;

  constructor() {}

  ngOnInit() {}

  changeImage(event) {
    this.image = event;
  }
}
