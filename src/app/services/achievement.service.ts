import { AlertController } from '@ionic/angular';
import { AchievementList, AchievementId } from './../common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  achievementList = AchievementList

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
          this.displayNewAchievementAlert(this.achievementList[achievementP.id]);
        }
      }
    });
    console.log(this.achievementList);
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

  async displayNewAchievementAlert(achievement) {
    console.log(achievement);
    const alert = await this.alertController.create({
      header: "Achievement Unlocked!",
      subHeader: `${achievement.title} - Level ${achievement.level}`,
      cssClass: 'achievement-alert',
      message: `<img src='../../assets/Badges/${achievement.title}${achievement.level}.png'/>`
    });
    alert.present();
    setTimeout(()=>alert.dismiss(),3000);
  }
}
