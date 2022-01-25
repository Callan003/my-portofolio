import { ToastController } from '@ionic/angular';
import { Technologies, ContactData } from './../common';
import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';
import { SwiperComponent } from 'swiper/angular';
// import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMePage implements OnInit, AfterContentChecked  {

  @ViewChild('swiper') swiper: SwiperComponent;

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


  constructor(
    // private clipboard: Clipboard,
    private http: HttpClient,
    private favoriteService: FavoriteService,
    private toastController: ToastController
    ) {}

  ngOnInit(): void {
    this.fetchData();
    this.favorites = this.favoriteService.getFavorites();
  }

  ngAfterContentChecked(): void {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  fetchData() {
    this.http.get(`https://lichess.org/api/user/Callan003`).subscribe((res: any) => {
      this.lichessProfileInfo = res;
      console.log(this.lichessProfileInfo);
  });
    this.http.get(`https://api.github.com/users/Callan003`).subscribe((res: any) => {
      this.gitHubProfileInfo = res;
      console.log(this.gitHubProfileInfo);
  });
  if(!this.stackoverflowLimitExceeded) {
    this.http.get(`https://api.stackexchange.com/2.3/users/15947768?order=desc&sort=reputation&site=stackoverflow`).subscribe((res: any) => {
      this.stackoverflowProfileInfo = res.items[0];
      if(res.quota_remaining > 1){
        this.stackoverflowLimitExceeded;
      }
      console.log(this.stackoverflowProfileInfo);
  });
  }
    this.http.get(`https://api.github.com/users/Callan003/repos`, {params: {sort: 'created'}}).subscribe((res: any) => {
      this.listOfItems = res;
      console.log(res);
    });
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
    this.swiper.swiperRef.slideNext(200);
  }

  prev() {
    this.swiper.swiperRef.slidePrev(200);
  }

  // copyToClipboard(text: string) {
  //   if (text) {
  //     this.clipboard.copy(text).then(result => {
  //      this.displayToast('success');
  //     }).catch(error => {
  //       this.displayToast('fail');

  //     });
  //   }
  // }

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
}
