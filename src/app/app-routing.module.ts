import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FilmDetailComponent } from './films/film-detail/film-detail.component';
import { FilmsDashboardComponent } from './films/films-dashboard/films-dashboard.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LayoutViewComponent } from './views/layout-view/layout-view.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path: "login",
    component: LoginFormComponent,
    children: [
      {
        path: "",
        component: LoginFormComponent
      }
    ]
  },
  {
    path: "films",
    component: LayoutViewComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: FilmsDashboardComponent
      },
      {
        path: "detail/:filmId",
        component: FilmDetailComponent
      }
    ]
  },
  {
    path: "articles",
    component: LayoutViewComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import('./articles/articles.module').then(
            module => module.ArticlesModule
          )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
