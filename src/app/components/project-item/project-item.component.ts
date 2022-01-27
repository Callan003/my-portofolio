import { FavoriteService } from './../../services/favorite.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  
  @Input() item: any;
  isFav: boolean;
  imgSrc: string;
  favorites = [];

  constructor(private favoriteService: FavoriteService) {
  }

  ngOnInit(): void {
    this.isFav = this.favoriteService.isProjectOnFavoriteList(this.item);
    this.favoriteService.localFavoritesSubscriber.subscribe(favorites => {
      this.isFav = this.favoriteService.isProjectOnFavoriteList(this.item);
    });
    this.imgSrc=`https://github.com/Callan003/${this.item?.name}/blob/${this.item?.default_branch}/${this.item?.name}.jpg?raw=true`;
  }

  addToFavorites(project) {
    const favoriteDto = {
      id: project?.id,
      name: project?.name,
      description: project?.description,
      created_at: project.created_at,
      stargazers_count: project.stargazers_count,
      default_branch: project.default_branch
    }
    this.favoriteService.toggleFavorites(favoriteDto);
  }
}
