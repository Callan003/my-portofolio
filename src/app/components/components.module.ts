import { RouterModule } from '@angular/router';
import { ProjectSwipeableItemComponent } from './project-swipeable-item/project-swipeable-item.component';
import { HeaderComponent } from './header/header.component';
import { SocialAccordionComponent } from './social-accordion/social-accordion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item/project-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ProjectItemComponent, SocialAccordionComponent, HeaderComponent, ProjectSwipeableItemComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports: [ProjectItemComponent, SocialAccordionComponent, HeaderComponent, ProjectSwipeableItemComponent]
})
export class ComponentsModule { }
