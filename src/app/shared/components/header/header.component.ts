import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IUserSettings from '../../../interfaces/user-settings.interface';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser?: IUserSettings;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.user);
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('configurations');
    this.router.navigate(['login']);
  }
}
