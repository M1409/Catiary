import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CatListComponent } from '../../components/cat-list/cat-list.component';
import { CatListService } from '../../services/catList/cat-list.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    CatListComponent,
    SnackbarComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
  ],

  exports:[
    HomeComponent
  ],
  providers: [CatListService]
})
export class HomeModule { }

