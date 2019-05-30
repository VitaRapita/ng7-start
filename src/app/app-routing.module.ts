import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: 'overview',
    loadChildren: './overview/overview.module#OverviewModule'
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreateModule'
  },
  {
    path: 'archive',
    loadChildren: './archive/archive.module#ArchiveModule'
  },
  {
    path: 'faq',
    loadChildren: './faq/faq.module#FaqModule'
  },
  {
    path: 'reporting',
    loadChildren: './reporting/reporting.module#ReportingModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'tips',
    loadChildren: './tips/tips.module#TipsModule'
  },
  {
    path: 'user-settings',
    loadChildren: './user-settings/user-settings.module#UserSettingsModule'
  },
  {
    path: 'article-review',
    loadChildren: './article/article.module#ArticleModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
