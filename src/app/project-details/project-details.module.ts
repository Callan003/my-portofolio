import { MarkdownService } from 'ngx-markdown';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDetailsPageRoutingModule } from './project-details-routing.module';

import { ProjectDetailsPage } from './project-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProjectDetailsPage],
  providers: [MarkdownService]
})
export class ProjectDetailsPageModule {}
