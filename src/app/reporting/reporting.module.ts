import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingContainerComponent } from './reporting-container/reporting-container.component';
import { ReportingRoutingModule } from './reporting-routing.module';

@NgModule({
  declarations: [ReportingContainerComponent],
  imports: [CommonModule, ReportingRoutingModule]
})
export class ReportingModule {}
