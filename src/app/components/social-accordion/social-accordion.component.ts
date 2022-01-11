import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-accordion',
  templateUrl: './social-accordion.component.html',
  styleUrls: ['./social-accordion.component.scss'],
})
export class SocialAccordionComponent {

  @Input() lichessProfileInfo: any;
  @Input() stackoverflowProfileInfo: any;
  @Input() stackoverflowLimitExceeded: boolean;
  @Input() fetchingData: boolean;
  @Input() gitHubProfileInfo: any;
}
