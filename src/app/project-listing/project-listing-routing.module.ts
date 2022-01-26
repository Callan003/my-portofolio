import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListingPage } from './project-listing.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectListingPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./regular-listing/regular-listing.module').then( m => m.RegularListingPageModule)
      },
      {
        path: 'tinder-style',
        loadChildren: () => import('./tinder-style/tinder-style.module').then( m => m.TinderStylePageModule)
      },
      {
        path: 'regular-listing',
        loadChildren: () => import('./regular-listing/regular-listing.module').then( m => m.RegularListingPageModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectListingPageRoutingModule {}
