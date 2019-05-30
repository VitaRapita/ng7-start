import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsContainerComponent } from './tips-container/tips-container.component';
import { TipsRoutingModule } from './tips-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [TipsContainerComponent],
  imports: [CommonModule, TipsRoutingModule, SharedModule]
})
export class TipsModule {}
