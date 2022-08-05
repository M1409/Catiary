import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { CatcardComponent } from './components/catcard/catcard.component';
import {MatCardModule} from '@angular/material/card';
import { CatFavoritesService } from './services/catFavorites/cat-favorites.service';

import { HomeModule } from './Pages/home/home.module';
import { FavoritesModule } from './Pages/favorites/favorites.module';


@NgModule({
  declarations: [
    AppComponent,
    CatcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    HomeModule,
    FavoritesModule
  ],
  providers: [CatFavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
