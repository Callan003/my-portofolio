import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinderStylePage } from './tinder-style.page';

const routes: Routes = [
  {
    path: '',
    component: TinderStylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinderStylePageRoutingModule {}
