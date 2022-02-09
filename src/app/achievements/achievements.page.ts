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

  constructor(private achievementService: AchievementService) { }

  ngOnInit() {
    this.achievements = this.achievementService.getAchievementList();
  }

  getImage(item): string {
    return `../../assets/Badges/${item.title}${item.level}.png`;
  }

  getProgressBarValue(item: Achievement) {
    return item.progress  / (item.limit.length === item.level ? item.limit[item.limit.length - 1] : item.limit[item.level]);
  }

  resetAchievements() {
    if(confirm('Are you sure you want to reset your Achivements?')) {
      this.achievements = this.achievementService.resetAchievements();
    }
  }

  isMaxLevel(achievement) {
    return this.achievementService.isAchievementAtMaxLevel(achievement);
  }

  openAchievementInfo(achievement) {
    this.achievementService.displayNewAchievementAlert(achievement, false);
  }

}
