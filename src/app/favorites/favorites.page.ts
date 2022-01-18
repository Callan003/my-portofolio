import { FavoriteService } from './../services/favorite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  data: any;
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.data = this.favoriteService.getFavorites();
    this.favoriteService.localFavoritesSubscriber.subscribe(favorites => {
      this.data = favorites
    });
  }

}
