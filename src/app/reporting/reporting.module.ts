import { NgModule } from '@angular/core';
import { ReportingContainerComponent } from './reporting-container/reporting-container.component';
import { ReportingRoutingModule } from './reporting-routing.module';
import { SharedModule } from '../shared';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
  ComboChartComponent,
  ComboSeriesVerticalComponent
} from './combo-chart';

@NgModule({
  declarations: [
    ReportingContainerComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent
  ],
  imports: [SharedModule, ReportingRoutingModule, NgxChartsModule]
})
export class ReportingModule {}
