import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import IUserSettings from '../../interfaces/user-settings.interface';
import IStore from '../../interfaces/store.interface';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { MatSnackBar } from '@angular/material/snack-bar';

@AutoUnsubscribe()
@Component({
  selector: 'bb-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss']
})
export class AdminContainerComponent implements OnInit, OnDestroy {
  isUsersLoaded = false;
  isStoresLoaded = false;
  users: IUserSettings[] = [];
  stores: IStore[] = [];

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getStores();
  }

  getUsers() {
    // this.adminService.getUsers().subscribe((data: [IUserSettings]) => {
    this.adminService.getUsers().subscribe((data: any) => {
      this.users = data.results;
      this.isUsersLoaded = true;
    });
  }

  getStores() {
    // this.adminService.getStores().subscribe((data: IStore[]) => {
    this.adminService.getStores().subscribe((data: any) => {
      this.stores = data.results;
      this.isStoresLoaded = true;
    });
  }

  updateStore(item: IStore) {
    this.adminService.updateStore(item).subscribe(() => {
      this.openSnackBar('Store updated');
      this.getStores();
    });
  }

  changeSliderParent($event: any) {
    console.log('event', $event);
  }

  editStore($event: any) {
    const item = $event;
    // if editable, save the user and update it with the results
    if (item.editable) {
      this.updateStore(item);
      item.editable = false;
    }
    // if not editable, make it editable
    else {
      item.editable = true;
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-color'],
      verticalPosition: 'bottom'
    });
  }

  ngOnDestroy() {}
}
