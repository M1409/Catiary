import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatListComponent } from './components/cat-list/cat-list.component';

import {HttpClientModule} from '@angular/common/http';

import { CatListService } from '../app/services/catList/cat-list.service';
import { CatcardComponent } from './components/catcard/catcard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component'

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatcardComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CatListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
