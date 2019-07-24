import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  configurations = {
    pageColor: '#ffffff',
    bodyColor: '#ffffff',
    headerColor: '#ffffff'
  };
  user;
  constructor(private loader: LoaderService) {
    if (localStorage.user && localStorage.configurations) {
      this.configurations.pageColor = JSON.parse(
        localStorage.getItem('configurations')
      )['page_backgroung'];
      this.configurations.bodyColor = JSON.parse(
        localStorage.getItem('configurations')
      )['body_backgroung'];
      this.configurations.headerColor = JSON.parse(
        localStorage.getItem('configurations')
      )['top_menu'];
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  onClick() {
    this.loader.display(true);

    setTimeout(() => {
      this.loader.display(false);
    }, 1000);
  }
}
