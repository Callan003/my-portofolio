import { AchievementService } from './achievement.service';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AchievementId } from '../common';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  localFavorites;
  localFavoritesSubscriber = new Subject();

  constructor(
    private toastController: ToastController,
    private achievementService: AchievementService) {
    this.localFavorites = this.getFavorites() || [];
   }

  getFavorites(): any {
    const freshFav = JSON.parse(localStorage.getItem('favorites'));
    this.localFavoritesSubscriber.next(freshFav);
    return freshFav;
  }

  addToFavorites(favorite) {
    this.achievementService.increaseAchievementProgress(AchievementId.FAVORITE);
    if (this.isProjectOnFavoriteList(favorite)) return;

    this.localFavorites.push(favorite);
    localStorage.setItem('favorites', JSON.stringify(this.localFavorites));
  }

  removeFromFavorites(favorite) {
    this.localFavorites = this.localFavorites.filter(element => element?.id !== favorite?.id);
    localStorage.setItem('favorites', JSON.stringify(this.localFavorites));
  }

  toggleFavorites(favorite): void {
    if (this.isProjectOnFavoriteList(favorite)) {
      this.localFavorites = this.localFavorites.filter(element => element?.id !== favorite?.id);
      this.presentToast('remove', favorite);
    } else {
      this.achievementService.increaseAchievementProgress(AchievementId.FAVORITE);
      this.localFavorites.push(favorite);
      this.presentToast('add', favorite);
    }
    this.localFavoritesSubscriber.next(this.localFavorites);
    localStorage.setItem('favorites', JSON.stringify(this.localFavorites));
  }

  isProjectOnFavoriteList(project: any) {
    return this.localFavorites?.find(element => element?.id === project?.id);
  }

  async presentToast(project: 'add' | 'remove', projectInfo) {
    const toast = await this.toastController.create({
      position: 'bottom',
      color: project === 'add' ? 'success' : 'danger',
      icon: project === 'add'? 'heart' : 'heart-dislike',
      message: project === 'add'? 'Added to Favorites!' : 'Removed from favorites!',
      duration: 3000,
      buttons: [
        {
          side: 'end',
          icon: 'arrow-undo-outline',
          text: 'Undo',
          handler: () => {
            this.toggleFavorites(projectInfo);
          }
        }]
    });
    toast.present();
  }
}
