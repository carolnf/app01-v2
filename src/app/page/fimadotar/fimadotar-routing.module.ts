import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FimadotarPage } from './fimadotar.page';

const routes: Routes = [
  {
    path: '',
    component: FimadotarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FimadotarPageRoutingModule {}
