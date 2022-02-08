import { AchievementService } from './../services/achievement.service';
import { ThingsToDoService } from './../services/things-to-do.service';
import { Platform, ToastController } from '@ionic/angular';
import { Technologies, ContactData, AchievementId } from './../common';
import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { SwiperComponent } from 'swiper/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import * as confetti from 'canvas-confetti';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMePage implements OnInit, AfterContentChecked  {

  @ViewChild('swiper') swiper: SwiperComponent;
  @ViewChild('svg_9') svg_9: any;
  @ViewChild('signature') signature: any;


  listOfItems: any[];
  gitHubProfileInfo: any;
  stackoverflowProfileInfo: any;
  stackoverflowLimitExceeded = false;
  lichessProfileInfo: any;
  fetchingData = false;
  favorites = [];
  technologies = Technologies;
  contactData: any = ContactData;
  config = {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: true,
    loop: true,
  }
  public scrollPosition = 0;
  animationInProgress = false;
  stopAnimation = false;


  constructor(
    private clipboard: Clipboard,
    private http: HttpClient,
    private favoriteService: FavoriteService,
    private toastController: ToastController,
    private platform: Platform,
    private thingsToDoService: ThingsToDoService,
    private route: ActivatedRoute,
    private achievementService: AchievementService
    ) {}

  ngOnInit(): void {
    this.displayRecursionMessage();
    this.fetchData();
    this.favorites = this.favoriteService.getFavorites();
    this.startAnimation();
    this.doConfetti();
    this.thingsToDoService.setThingDone(0);
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  async displayRecursionMessage() {
    if (this.route.snapshot.queryParamMap.get('recursion')) {
      const toast = await this.toastController.create({
        position: 'middle',
        icon: 'infinite',
        message: `That my friend, it's called "recursion"!`,
        duration: 4000
      });
      toast.present();
    }
  }

  startAnimation() {
    if(this.animationInProgress) return;
    this.animationInProgress = true;
    setTimeout(() => {
      this.swiper.swiperRef.slideNext(2000);
      this.animationInProgress = false;
      this.startAnimation();
    }, 5000);
  }

  fetchData() {
    this.http.get(`https://lichess.org/api/user/Callan003`).subscribe((res: any) => {
      this.lichessProfileInfo = res;
  });
    this.http.get(`https://api.github.com/users/Callan003`).subscribe((res: any) => {
      this.gitHubProfileInfo = res;
  });
  if(!this.stackoverflowLimitExceeded) {
    this.http.get(`https://api.stackexchange.com/2.3/users/15947768?order=desc&sort=reputation&site=stackoverflow`).subscribe((res: any) => {
      this.stackoverflowProfileInfo = res.items[0];
      if(res.quota_remaining > 1){
        this.stackoverflowLimitExceeded;
      }
  });
  }
    this.http.get(`https://api.github.com/users/Callan003/repos`, {params: {sort: 'created'}}).subscribe((res: any) => {
      this.listOfItems = res;
    });
  }

  alertRecurssion() {
    alert('That my friend, is called "recursion"!');
  }

  doRefresh(event) {
    this.fetchData();
    this.fetchingData = true;
    setTimeout(() => {
      this.fetchingData = false;
      event.target.complete();
    }, 2000);
  }

  next() {
    this.swiper.swiperRef.slideNext(1000);
  }

  prev() {
    this.swiper.swiperRef.slidePrev(1000);
  }

  copyToClipboard(text: string) {
    if(this.platform.is('hybrid')) {
      if (text) {
        this.clipboard.copy(text).then(result => {
        this.displayToast('success');
        }).catch(error => {
          this.displayToast('fail');
        });
      }
    } else {
      var txtArea = document.createElement("textarea");
      txtArea.id = 'txt';
      txtArea.style.position = 'fixed';
      txtArea.style.top = '0';
      txtArea.style.left = '0';
      txtArea.style.opacity = '0';
      txtArea.value = text;
      document.body.appendChild(txtArea);
      txtArea.select();
    
      try {
        var successful = document.execCommand('copy');
        this.displayToast('success');
        if (successful) {
          return true;
        }
      } catch (err) {
        this.displayToast('fail');
      } finally {
        document.body.removeChild(txtArea);
      }
      return false;
    }
  }

  async displayToast(copy: 'success' | 'fail') {
    const toast = await this.toastController.create({
      position: 'bottom',
      color: copy === 'success' ? 'success' : 'danger',
      icon: copy === 'success'? 'copy' : 'bug',
      message: copy === 'success'? 'Copy to clipboard' : 'An error occured!',
      duration: 3000
    });
    toast.present();
  }

  restartAnimation() {
    this.svg_9.nativeElement.id = '';
    setTimeout(() => {
      this.svg_9.nativeElement.id = 'svg_9';
      const deg = this.getRandomDeg(-45, 45);
      this.signature.nativeElement.style.transform = 'rotate(' + deg + 'deg)';
    }, 1)
  }

  getRandomDeg(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  async logScrolling($event) {
    if($event.target.localName != "ion-content") {
      return;
    }
    const scrollElement = await $event.target.getScrollElement();
    const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    const currentScrollDepth = $event.detail.scrollTop;
    if (this.scrollPosition < (((currentScrollDepth * 100) / scrollHeight) / 100)) {
      this.scrollPosition = (((currentScrollDepth * 100) / scrollHeight) / 100);
    }
  }

  doConfetti() {
    this.achievementService.increaseAchievementProgress(AchievementId.CONFETTI);

    confetti.create(this.signature, {resize: true})({
      shapes: ['square'],
      particleCount: 100,
      angle: 60,
      origin: {
        x: 0,
        y: 1
      }
    });
    confetti.create(this.signature, {resize: true})({
      shapes: ['square'],
      particleCount: 100,
      angle: 120,
      origin: {
        x: 1,
        y: 1
      }
    });
  }
}
