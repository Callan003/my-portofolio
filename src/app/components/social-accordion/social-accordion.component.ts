import { AchievementId } from './../../common';
import { AchievementService } from './../../services/achievement.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-accordion',
  templateUrl: './social-accordion.component.html',
  styleUrls: ['./social-accordion.component.scss'],
})
export class SocialAccordionComponent {

  public achievementId = AchievementId;
  constructor(private achievementService: AchievementService) {}

  @Input() lichessProfileInfo: any;
  @Input() stackoverflowProfileInfo: any;
  @Input() stackoverflowLimitExceeded: boolean;
  @Input() fetchingData: boolean;
  @Input() gitHubProfileInfo: any;

  updateAchievement(achievementId: AchievementId) {
    this.achievementService.increaseAchievementProgress(achievementId);
  }
}
