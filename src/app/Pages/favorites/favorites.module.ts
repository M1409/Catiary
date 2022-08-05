import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { FavListComponent } from 'src/app/components/fav-list/fav-list.component';
import { CatFavoritesService } from 'src/app/services/catFavorites/cat-favorites.service';


@NgModule({
  declarations: [
    FavoritesComponent,
    FavListComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ],
  providers: [CatFavoritesService],
  exports:[
    FavoritesComponent
  ],
})
export class FavoritesModule { }
