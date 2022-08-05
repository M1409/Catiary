import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatInfoRoutingModule } from './cat-info-routing.module';
import { CatInfoComponent } from './cat-info.component';


@NgModule({
  declarations: [
    CatInfoComponent
  ],
  imports: [
    CommonModule,
    CatInfoRoutingModule
  ]
})
export class CatInfoModule { }
