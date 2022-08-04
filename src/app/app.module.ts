import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { CatcardComponent } from './components/catcard/catcard.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component'
import {MatCardModule} from '@angular/material/card';


import { HomeModule } from './Pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    CatcardComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
