import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMePageRoutingModule } from './about-me-routing.module';

import { AboutMePage } from './about-me.page';
import { SwiperModule } from 'swiper/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutMePageRoutingModule,
    ComponentsModule,
    SwiperModule
  ],
  declarations: [AboutMePage],
  providers: [Clipboard]
})
export class AboutMePageModule {}
