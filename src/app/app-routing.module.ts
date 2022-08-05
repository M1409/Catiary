import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'Home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) }, { path: 'favorites', loadChildren: () => import('./Pages/favorites/favorites.module').then(m => m.FavoritesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
