import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CatListComponent } from '../../components/cat-list/cat-list.component';
import { CatListService } from '../../services/catList/cat-list.service';


@NgModule({
  declarations: [
    HomeComponent,
    CatListComponent
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

