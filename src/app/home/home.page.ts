import { ThemeAttribute, ThemeIcons } from './../common';
import { Component, Inject, OnInit } from '@angular/core';
import { Themes } from '../common';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listOfItems: any[];
  gitHubProfileInfo: any;
  stackoverflowProfileInfo: any;
  stackoverflowLimitExceeded = false;
  lichessProfileInfo: any;
  fetchingData = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
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
    this.http.get(`https://api.github.com/users/Callan003/repos`).subscribe((res: any) => {
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
}
