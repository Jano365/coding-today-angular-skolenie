import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesDashboardComponent } from './articles-dashboard/articles-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: ArticlesDashboardComponent
  }
]


@NgModule({
  declarations: [
    ArticlesDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticlesModule { }
