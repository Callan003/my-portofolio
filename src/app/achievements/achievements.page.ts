import { AlertController } from '@ionic/angular';
import { AchievementService } from './../services/achievement.service';
import { Achievement, AchievementList } from './../common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  achievements: Achievement[];

  constructor(private achievementService: AchievementService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.achievements = this.achievementService.getAchievementList();
  }

  getImage(item): string {
    return `../../assets/Badges/${item.title}${item.level}.webp`;
  }

  getProgressBarValue(item: Achievement) {
    return item.progress  / (item.limit.length === item.level ? item.limit[item.limit.length - 1] : item.limit[item.level]);
  }

  async resetAchievements() {
    const resetAchievementsAlert = await this.alertController.create({
      header: "Please confirm",
      mode: 'ios',
      message: 'Are you sure you want to reset your Achivements?',
      buttons: [{
        text: 'Cancel',
        cssClass: 'color-dark',
        role: 'cancel'
      }, {
        text: 'Reset',
        cssClass: 'color-success',
        handler: () => {
          this.achievements = this.achievementService.resetAchievements();
        }
      }]
    });

    resetAchievementsAlert.present();
  }

  isMaxLevel(achievement) {
    return this.achievementService.isAchievementAtMaxLevel(achievement);
  }

  openAchievementInfo(achievement) {
    this.achievementService.displayNewAchievementAlert(achievement, false);
  }

  async openInfo() {
    const alertInfo = await this.alertController.create({
      header: 'Achievements Info',
      mode: 'ios',
      message: 'Here you can find a list of achievements that you can unlock by exploring my portofolio!',
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        cssClass: 'color-success',
      }]
    });

    alertInfo.present();
  }

}
