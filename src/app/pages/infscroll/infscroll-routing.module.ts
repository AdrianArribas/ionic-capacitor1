import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfscrollPage } from './infscroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfscrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfscrollPageRoutingModule {}
