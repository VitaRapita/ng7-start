import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveContainerComponent } from './archive-container/archive-container.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [ArchiveContainerComponent],
  imports: [CommonModule, ArchiveRoutingModule, SharedModule]
})
export class ArchiveModule {}
