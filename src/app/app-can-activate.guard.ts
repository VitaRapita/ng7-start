import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCanActivateGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    //// Need revrite to correct roles //////
    const token = localStorage.token;
    if (token) {
      return true;
    } else {
      return this.router.navigate(['/login']);
    }
    ////////////////////////////////////
  }
}
