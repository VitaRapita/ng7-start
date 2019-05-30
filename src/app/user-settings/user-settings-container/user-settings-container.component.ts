import { Component, OnInit } from '@angular/core';
import { IUser } from './user-settings';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { UserSettingsService } from '../services/user-settings.service';
import { CropperDialogComponent } from '../../shared/dialogs/cropper-dialog/cropper-dialog.component';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

////////adding custom validator//////////
function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { range: true };
  }
  return null;
}

@Component({
  selector: 'bb-users-container',
  templateUrl: './user-settings-container.component.html',
  styleUrls: ['./user-settings-container.component.scss']
})
export class UserSettingsContainerComponent implements OnInit {
  userForm: FormGroup;
  user: IUser;
  emailMessage: string;

  private validationMessage = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(
    private fb: FormBuilder,
    private userSettingsService: UserSettingsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getUserSettings();
    this.userForm = this.fb.group({
      id: 0,
      email: [
        { value: '', disabled: true },
        [Validators.required, Validators.email]
      ],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      name: [
        { value: '', disabled: true },
        [Validators.required, Validators.minLength(3)]
      ],
      role: [{ value: '', disabled: true }],
      assistant: '',
      storeASM: '',
      storeId: ['', [Validators.required]],
      profileImage: '',
      teamPhoto: ''
    });

    const emailControl = this.userForm.get('email');
    this.userForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => this.setMessage(emailControl));
  }

  getUserSettings() {
    this.userSettingsService.getUserSettings().subscribe((data: IUser) => {
      this.user = data[0];
      this.userForm.patchValue({
        id: this.user.id,
        email: this.user.email,
        phone: this.user.phone,
        name: this.user.name,
        role: this.user.role,
        assistant: this.user.assistant,
        storeASM: this.user.storeASM,
        storeId: this.user.storeId,
        profileImage: this.user.profileImg,
        teamPhoto: this.user.teamPhoto
      });
    });
  }

  updateUserSettings() {
    this.userSettingsService
      .updateUserSettings(this.userForm.value)
      .subscribe((data: IUser) => {
        this.user = data;
      });
  }

  save() {
    this.updateUserSettings();
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors)
        .map(key => (this.emailMessage += this.validationMessage[key]))
        .join(' ');
    }
  }

  openCropDialog(imageType) {
    const dialogRef = this.dialog.open(CropperDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      switch (imageType) {
        case 'profile':
          this.userForm.get('profileImage').setValue(result);
          break;
        case 'team':
          this.userForm.get('teamPhoto').setValue(result);
          break;
        default:
          break;
      }
    });
  }
}
