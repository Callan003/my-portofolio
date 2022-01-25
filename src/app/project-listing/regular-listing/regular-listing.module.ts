import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegularListingPageRoutingModule } from './regular-listing-routing.module';

import { RegularListingPage } from './regular-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegularListingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegularListingPage]
})
export class RegularListingPageModule {}
