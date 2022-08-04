import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatListComponent } from './components/cat-list/cat-list.component';

import {HttpClientModule} from '@angular/common/http';

import { CatListService } from '../app/services/catList/cat-list.service'

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
