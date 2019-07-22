import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { AppCanActivateGuard } from './app-can-activate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
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
    loadChildren: './reporting/reporting.module#ReportingModule',
    canActivate: [AppCanActivateGuard]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AppCanActivateGuard]
  },
  {
    path: 'tips',
    loadChildren: './tips/tips.module#TipsModule',
    canActivate: [AppCanActivateGuard]
  },
  {
    path: 'user-settings',
    loadChildren: './user-settings/user-settings.module#UserSettingsModule'
  },
  {
    path: 'article-review/:articleId',
    loadChildren: './article/article.module#ArticleModule'
  },
  {
    path: 'configurations',
    loadChildren: './configurations/configurations.module#ConfigurationsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
