import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationContainerComponent } from './authentication-container/authentication-container.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { services } from './services';
import { InMemoryDataService } from '../InMemoryDb.service';

@NgModule({
  declarations: [AuthenticationContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 100
    })
  ],
  providers: [...services]
})
export class AuthenticationModule {}
