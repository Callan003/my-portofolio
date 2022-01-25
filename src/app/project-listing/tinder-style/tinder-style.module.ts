import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinderStylePageRoutingModule } from './tinder-style-routing.module';

import { TinderStylePage } from './tinder-style.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinderStylePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TinderStylePage]
})
export class TinderStylePageModule {}
