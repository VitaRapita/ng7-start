import { NgModule } from '@angular/core';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveContainerComponent } from './archive-container/archive-container.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [ArchiveContainerComponent],
  imports: [SharedModule, ArchiveRoutingModule]
})
export class ArchiveModule {}
