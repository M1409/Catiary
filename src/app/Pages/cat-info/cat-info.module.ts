import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import { CatInfoRoutingModule } from './cat-info-routing.module';
import { CatInfoComponent } from './cat-info.component';
import { CatCardComponent } from 'src/app/components/cat-card/cat-card.component';
import { CatInfoService } from 'src/app/services/catInfo/cat-info.service';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    CatInfoComponent,
    CatCardComponent,
  ],
  imports: [
    CommonModule,
    CatInfoRoutingModule,
    MatTabsModule,
    NgApexchartsModule

  ],
  providers:[CatInfoService]
})
export class CatInfoModule { }
