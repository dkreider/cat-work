import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cats',
    loadChildren: () => import('./cats/cats.module').then(c => c.CatsModule)
  },
  {
    path: 'cat/:id',
    loadChildren: () => import('./cat/cat.module').then(c => c.CatModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(c => c.LoginModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cats'
  },
  {
    path: '**c',
    pathMatch: 'full',
    redirectTo: 'cats'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
