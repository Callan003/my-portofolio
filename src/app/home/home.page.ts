import { ThingsToDoService } from './../services/things-to-do.service';
import { ThemeIcons, ThingsToDo } from './../common';
import { FavoriteService } from './../services/favorite.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonRouterOutlet, {static: true}) routerOutlet: IonRouterOutlet;
  @ViewChild('header') header: any;

  listOfItems: any[];
  gitHubProfileInfo: any;
  stackoverflowProfileInfo: any;
  stackoverflowLimitExceeded = false;
  lichessProfileInfo: any;
  fetchingData = false;
  favorites = [];
  thingsToDo = ThingsToDo;

  constructor(
    private http: HttpClient,
    private favoriteService: FavoriteService,
    private thingsToDoService: ThingsToDoService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getThingsToDoFromLS();
    this.fetchData();
    this.favorites = this.favoriteService.getFavorites();
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

  doRefresh(event) {
    this.fetchData();
    this.fetchingData = true;
    setTimeout(() => {
      this.fetchingData = false;
      event.target.complete();
    }, 2000);
  }

  goToThingsToDo($event) {

    switch($event.id) {
      case 0:
        this.router.navigate(['about-me']);
        break;
      case 1:
        this.router.navigate(['project-listing']);
        break;
      case 2:
        this.router.navigate(['project-details/my-portofolio']);
        break;
      case 3:
        this.router.navigate(['project-listing/tinder-style']);
        break;
      case 4:
        console.log(this.header);
        this.thingsToDo[4].icon = this.thingsToDo[4].icon === ThemeIcons.DARK ? ThemeIcons.LIGHT : ThemeIcons.DARK;
        this.header.changeTheme();
        break;
      case 5:
        this.router.navigate(['favorites']);
        break;
      default:
        break;    

    }

    this.thingsToDoService.setThingDone($event.id);

  }

  getThingsToDoFromLS() {
    this.thingsToDo = this.thingsToDoService.getThingsToDoFromLS();
  }

  resetThingsToDo() {
    this.thingsToDoService.resetThingsToDo();
  }
}
