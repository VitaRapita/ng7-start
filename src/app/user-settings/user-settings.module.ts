import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsContainerComponent } from './user-settings-container/user-settings-container.component';

@NgModule({
  imports: [CommonModule, UserSettingsRoutingModule, SharedModule],
  declarations: [UserSettingsContainerComponent]
})
export class UserSettingsModule {}
