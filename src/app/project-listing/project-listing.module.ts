import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectListingPageRoutingModule } from './project-listing-routing.module';

import { ProjectListingPage } from './project-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectListingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProjectListingPage],
  exports: [ProjectListingPage]
})
export class ProjectListingPageModule {}
