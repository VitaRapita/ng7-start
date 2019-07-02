import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsContainerComponent } from './user-settings-container/user-settings-container.component';

@NgModule({
  imports: [SharedModule, UserSettingsRoutingModule],
  declarations: [UserSettingsContainerComponent]
})
export class UserSettingsModule {}
