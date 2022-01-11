import { HeaderComponent } from './header/header.component';
import { SocialAccordionComponent } from './social-accordion/social-accordion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item/project-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ProjectItemComponent, SocialAccordionComponent, HeaderComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [ProjectItemComponent, SocialAccordionComponent, HeaderComponent]
})
export class ComponentsModule { }
