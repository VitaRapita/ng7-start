import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.router.navigate(['login']);
  }
}