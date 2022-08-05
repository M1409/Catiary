import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatInfoComponent } from './cat-info.component';

const routes: Routes = [{ path: '', component: CatInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatInfoRoutingModule { }
