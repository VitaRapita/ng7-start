import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsContainerComponent } from './tips-container/tips-container.component';

const routes: Routes = [{ path: '', component: TipsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule {}
