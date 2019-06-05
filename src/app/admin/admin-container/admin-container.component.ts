import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import IUserSettings from '../../interfaces/user-settings';
import IStore from '../../interfaces/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

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

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getUsers();
    this.getStores();
  }

  getUsers() {
    this.adminService.getUsers().subscribe((data: [IUserSettings]) => {
      this.users = data;
      this.isUsersLoaded = true;
    });
  }

  getStores() {
    this.adminService.getStores().subscribe((data: [IStore]) => {
      this.stores = data;
      this.isStoresLoaded = true;
    });
  }

  changeSliderParent($event: any) {
    console.log('event', $event);
  }

  ngOnDestroy() {}
}
