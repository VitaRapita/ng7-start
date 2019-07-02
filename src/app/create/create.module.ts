import { NgModule } from '@angular/core';

import { CreateRoutingModule } from './create-routing.module';
import { CreateContainerComponent } from './create-container/create-container.component';
import { SharedModule } from '../shared';
import { services } from '../overview/services';

@NgModule({
  declarations: [CreateContainerComponent],
  imports: [SharedModule, CreateRoutingModule],
  providers: [...services]
})
export class CreateModule {}
