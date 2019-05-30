import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../InMemoryDb.service';
import { services } from './services';
import { AdminUsersTableComponent } from './admin-users-table/admin-users-table.component';
import { AdminStoresTableComponent } from './admin-stores-table/admin-stores-table.component';

@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminUsersTableComponent,
    AdminStoresTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 100
    })
  ],
  providers: [...services]
})
export class AdminModule {}
