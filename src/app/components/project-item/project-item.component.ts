import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  
  @Input() item: any;
  isFav: boolean;

  constructor() { }

  ngOnInit() {

  }

  addToFavorites(project) {
    console.log(project);
    this.isFav = !this.isFav;
  }
}
