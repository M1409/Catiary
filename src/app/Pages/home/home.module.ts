import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CatListComponent } from '../../components/cat-list/cat-list.component';
import { CatListService } from '../../services/catList/cat-list.service';
import { FavListComponent } from 'src/app/components/fav-list/fav-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    CatListComponent,
    FavListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],

  exports:[
    HomeComponent
  ],
  providers: [CatListService]
})
export class HomeModule { }

