import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';

import { HomeModule } from './Pages/home/home.module';
import { FavoritesModule } from './Pages/favorites/favorites.module';
'@angular/platform-browser/animations';
import { BrowserAnimationsModule } from 
'@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    HomeModule,
    FavoritesModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
