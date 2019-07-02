import { NgModule } from '@angular/core';
import { FaqContainerComponent } from './faq-container/faq-container.component';
import { FaqRoutingModule } from './faq-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [FaqContainerComponent],
  imports: [SharedModule, FaqRoutingModule]
})
export class FaqModule {}
