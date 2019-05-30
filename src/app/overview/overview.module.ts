import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewContainerComponent } from './overview-container/overview-container.component';
import { services } from './services';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../InMemoryDb.service';

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 100
    })
  ],
  declarations: [OverviewContainerComponent],
  providers: [...services]
})
export class OverviewModule {}
