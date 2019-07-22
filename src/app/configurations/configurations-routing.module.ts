import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationsContainerComponent } from './configurations-container/configurations-container.component';

const routes: Routes = [
  { path: '', component: ConfigurationsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule {}
