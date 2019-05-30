import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateContainerComponent } from './create-container/create-container.component';
import { SharedModule } from '../shared';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from '../InMemoryDb.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { services } from '../overview/services';

@NgModule({
  declarations: [CreateContainerComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 100
    })
  ],
  providers: [...services]
})
export class CreateModule {}
