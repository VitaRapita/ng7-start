import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewContainerComponent } from './overview-container/overview-container.component';
import { services } from './services';

@NgModule({
  imports: [SharedModule, OverviewRoutingModule],
  declarations: [OverviewContainerComponent],
  providers: [...services]
})
export class OverviewModule {}
