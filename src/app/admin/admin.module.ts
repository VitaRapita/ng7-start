import { NgModule } from '@angular/core';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared';
import { services } from './services';
import { AdminUsersTableComponent } from './admin-users-table/admin-users-table.component';
import { AdminStoresTableComponent } from './admin-stores-table/admin-stores-table.component';

@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminUsersTableComponent,
    AdminStoresTableComponent
  ],
  imports: [SharedModule, AdminRoutingModule],
  providers: [...services]
})
export class AdminModule {}
