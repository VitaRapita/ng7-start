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
        { value: '', disabled: this.userId },
        [Validators.required, Validators.email]
      ],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      name: [
        { value: '', disabled: this.userId },
        [Validators.required, Validators.minLength(3)]
      ],
      first_name: '',
      last_name: '',
      role: [{ value: '', disabled: this.userId }],
      assistant: '',
      storeASM: '',
      store_id: ['', [Validators.required]],
      avatar: '',
      team_photo: ''
    });
  }

  ngOnInit() {
    this.userId
      ? this.getUserSettings()
      : (this.user = JSON.parse(localStorage.user));
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
      .updateUserSettings(this.userForm.getRawValue())
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
      first_name: 'first name',
      last_name: 'last name',
      role: user.role,
      storeASM: user.store['title'],
      store_id: user.store['id'],
      avatar: user.avatar,
      team_photo: user.teamPhoto
    });
  }

  openCropDialog(imageType: any) {
    const dialogRef = this.dialog.open(CropperDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      switch (imageType) {
        case 'profile':
          this.userForm.patchValue({
            avatar: result
          });
          // this.userForm.value.avatar = result;
          break;
        case 'team':
          this.userForm.patchValue({
            team_photo: result
          });
          // this.userForm.value.team_photo = result;
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy() {}
}
