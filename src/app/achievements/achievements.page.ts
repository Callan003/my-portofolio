import { AchievementService } from './../services/achievement.service';
import { Achievement} from './../common';
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

}
