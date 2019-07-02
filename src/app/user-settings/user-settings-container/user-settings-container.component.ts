import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserSettingsService } from '../services/user-settings.service';
import { CropperDialogComponent } from '../../shared/dialogs/cropper-dialog/cropper-dialog.component';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import IUserSettings from '../../interfaces/user-settings.interface';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { ActivatedRoute } from '@angular/router';

@AutoUnsubscribe()
@Component({
  selector: 'bb-users-container',
  templateUrl: './user-settings-container.component.html',
  styleUrls: ['./user-settings-container.component.scss']
})
export class UserSettingsContainerComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  user?: IUserSettings;
  phoneMessage = '';
  userId: number;

  constructor(
    private fb: FormBuilder,
    private userSettingsService: UserSettingsService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.params.userId;

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
  }

  ngOnInit() {
    this.userId
      ? this.getUserSettings()
      : (this.user = JSON.parse(localStorage.getItem('user')));
    const phoneControl = this.userForm.get('phone');
    if (phoneControl) {
      this.userForm.valueChanges
        .pipe(debounceTime(1000))
        .subscribe(() => this.setMessage());
    }
  }

  getUserSettings() {
    this.userSettingsService
      .getUserSettings(this.userId)
      .subscribe((data: IUserSettings) => {
        this.updateForm(data);
      });
  }

  updateUserSettings() {
    this.userSettingsService
      .updateUserSettings(this.userForm.value)
      .subscribe((data: IUserSettings) => {
        this.updateForm(data);
      });
  }

  save() {
    this.updateUserSettings();
  }

  setMessage(): void {
    this.phoneMessage = '';
  }

  updateForm(user: IUserSettings) {
    this.userForm.patchValue({
      id: user.id,
      email: user.email,
      phone: user.phone,
      name: user.name,
      role: user.role,
      storeASM: user.store['title'],
      storeId: user.store['id'],
      profileImage: user.profileImg,
      teamPhoto: user.teamPhoto
    });
  }

  openCropDialog(imageType: any) {
    const dialogRef = this.dialog.open(CropperDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      switch (imageType) {
        case 'profile':
          this.userForm.value.profileImage = result;
          break;
        case 'team':
          this.userForm.value.teamPhoto = result;
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy() {}
}
