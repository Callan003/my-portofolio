import { AlertController } from '@ionic/angular';
import { AchievementList, AchievementId } from './../common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  achievementList = JSON.parse(JSON.stringify(AchievementList));

  constructor(private alertController: AlertController) { }

  getInitialAchievementList() {
    const achievemntProgress = JSON.parse(localStorage.getItem('achievementProgress')) || [];
    console.log(achievemntProgress);
    achievemntProgress.forEach(achievementP => {

      this.achievementList[achievementP.id].progress = achievementP.progress;
      while(this.achievementList[achievementP.id].progress >= this.achievementList[achievementP.id].limit[this.achievementList[achievementP.id].level]){
        this.achievementList[achievementP.id].level = ++this.achievementList[achievementP?.id].level;
      }
    });

  }

  getAchievementList(displayAlert?: boolean) {
    const achievemntProgress = JSON.parse(localStorage.getItem('achievementProgress')) || [];
    console.log(achievemntProgress);
    achievemntProgress.forEach(achievementP => {

      this.achievementList[achievementP.id].progress = achievementP.progress;
      while(this.achievementList[achievementP.id].progress >= this.achievementList[achievementP.id].limit[this.achievementList[achievementP.id].level]){
        this.achievementList[achievementP.id].level = ++this.achievementList[achievementP?.id].level;
        if(displayAlert) {
          this.displayNewAchievementAlert(this.achievementList[achievementP.id], true);
        }
      }
    });
    return this.achievementList;
  }

  increaseAchievementProgress(achievementId: AchievementId) {

    this.setAchievementProgressInLS({id: achievementId, progress: ++this.achievementList[achievementId].progress});
    this.getAchievementList(true);

  }

  setAchievementProgressInLS(achievement) {
    const localAchievementProgress = JSON.parse(localStorage.getItem('achievementProgress')) || [];
    const achievementIndex = localAchievementProgress.findIndex(local => local.id === achievement.id);
    if(achievementIndex >= 0){
      localAchievementProgress[achievementIndex] = achievement;
    } else {
      localAchievementProgress.push(achievement);
    }
    localStorage.setItem('achievementProgress', JSON.stringify(localAchievementProgress));
  }

  resetAchievements() {
    localStorage.removeItem('achievementProgress');
    this.achievementList = JSON.parse(JSON.stringify(AchievementList));
    return this.achievementList;
  }

  isAchievementAtMaxLevel(achievement): boolean {
    const currentAchievement = this.achievementList.find(ach => ach.id === achievement.id);
    return currentAchievement.level === currentAchievement.limit.length;
  }

  async displayNewAchievementAlert(achievement, autoDismiss?: boolean) {
    const maxLevel = this.isAchievementAtMaxLevel(achievement);

    const alert = await this.alertController.create({
      header: achievement.level === 0 ? 'Achievement Locked!' : 'Achievement Unlocked!',
      subHeader: `${achievement.title} - Level ${achievement.level} ${maxLevel ? '(Max)' : ''}`,
      cssClass: 'achievement-alert ' + (maxLevel ? 'achievement-alert-glow' : ''),
      message: `<img src='../../assets/Badges/${achievement.title}${achievement.level}.png'/> `,
    });
    alert.present();
    if(autoDismiss) setTimeout(()=>alert.dismiss(), 3000);
  }
}
