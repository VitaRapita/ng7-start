import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'bb-login-container',
  animations: [
    trigger('flip', [
      state(
        'initial',
        style({
          transform: 'rotateY(0deg) translate3d(0, 0, 0) scale(1)'
        })
      ),
      state(
        'final',
        style({
          transform: 'rotateY(180deg) translate3d(0, 0, 0) scale(1)'
        })
      ),
      transition('initial=>final', animate('500ms')),
      transition('final=>initial', animate('500ms'))
    ])
  ],
  templateUrl: './authentication-container.component.html',
  styleUrls: ['./authentication-container.component.scss']
})
export class AuthenticationContainerComponent implements OnInit, OnDestroy {
  currentState = 'initial';
  loginForm: FormGroup;
  error = '';

  constructor(
    // private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {}

  toggle() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  login() {
    if (
      this.loginForm.value.userName === 'admin' &&
      this.loginForm.value.password === 'admin123'
    ) {
      this.router.navigate(['/overview']);
    } else {
      this.error =
        'Authentication is failed. Please check your username and password';
    }
  }

  ngOnDestroy() {}
}
