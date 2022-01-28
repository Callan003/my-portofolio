import { ThingsToDoService } from './../services/things-to-do.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.page.html',
  styleUrls: ['./project-listing.page.scss'],
})
export class ProjectListingPage implements OnInit {

  constructor(private thingsToDoService: ThingsToDoService){}

  ngOnInit(): void {
    this.thingsToDoService.setThingDone(1);
  }

}
