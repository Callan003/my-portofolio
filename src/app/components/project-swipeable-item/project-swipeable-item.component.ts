import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-swipeable-item',
  templateUrl: './project-swipeable-item.component.html',
  styleUrls: ['./project-swipeable-item.component.scss'],
})
export class ProjectSwipeableItemComponent implements OnInit {

  @Input() item: any;
  imgSrc: string;
  constructor() {}

  ngOnInit() {
    this.imgSrc=`https://github.com/Callan003/${this.item?.name}/blob/${this.item?.default_branch}/${this.item?.name}.jpg?raw=true`;
  }

}
