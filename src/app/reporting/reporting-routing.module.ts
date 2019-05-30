import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingContainerComponent } from './reporting-container/reporting-container.component';

const routes: Routes = [{ path: '', component: ReportingContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule {}
