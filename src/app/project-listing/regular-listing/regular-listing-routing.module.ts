import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegularListingPage } from './regular-listing.page';

const routes: Routes = [
  {
    path: '',
    component: RegularListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegularListingPageRoutingModule {}
