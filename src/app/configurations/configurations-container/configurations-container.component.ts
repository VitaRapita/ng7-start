import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import IUserSettings from '../../interfaces/user-settings.interface';
import { CropperDialogComponent } from '../../shared/dialogs/cropper-dialog/cropper-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'bb-configurations',
  templateUrl: './configurations-container.component.html',
  styleUrls: ['./configurations-container.component.scss']
})
export class ConfigurationsContainerComponent implements OnInit {
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.configForm = this.fb.group({
      navColor: { r: 51, g: 51, b: 51, a: 1 },
      btnColor: { r: 0, g: 0, b: 0, a: 1 },
      languages: [],
      logo: ''
    });
  }
  configForm: FormGroup;
  navColor = { r: 51, g: 51, b: 51, a: 1 };
  btnColor = { r: 51, g: 51, b: 51, a: 1 };
  languagesList = ['en_US', 'nl_NL', 'fr_BE'];

  getConfigurations() {
    const data = {};
    this.updateForm(data);
  }

  handleChange($event: ColorEvent, type) {
    const color = $event.color.rgb;
    switch (type) {
      case 'button':
        this.configForm.patchValue({
          btnColor: color
        });
        break;
      case 'navbar':
        this.configForm.patchValue({
          navColor: color
        });
        break;
      default:
        break;
    }
  }

  updateForm(configurations) {
    this.configForm.patchValue({
      navColor: configurations.navColor,
      btnColor: configurations.btnColor,
      languages: configurations.languages,
      logo: configurations.logo
    });
  }

  openCropDialog() {
    const dialogRef = this.dialog.open(CropperDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.configForm.patchValue({
        logo: result
      });
    });
  }

  getRGBA(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }

  ngOnInit() {}
}
