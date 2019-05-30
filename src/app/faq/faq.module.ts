import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqContainerComponent } from './faq-container/faq-container.component';
import { FaqRoutingModule } from './faq-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [FaqContainerComponent],
  imports: [CommonModule, FaqRoutingModule, SharedModule]
})
export class FaqModule {}
