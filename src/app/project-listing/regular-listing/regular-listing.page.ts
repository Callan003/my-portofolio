import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-regular-listing',
  templateUrl: './regular-listing.page.html',
  styleUrls: ['./regular-listing.page.scss'],
})
export class RegularListingPage implements OnInit {

  listOfItems: any[];
  itemsLoaded = false;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private http: HttpClient,) { }

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects(refresh?) {
    this.http.get(`https://api.github.com/users/Callan003/repos`, {params: {sort: 'created'}}).pipe(delay(3000)).subscribe((res: any) => {
      this.itemsLoaded = true;
      this.listOfItems = res;
      this.changeDetector.detectChanges();

      if(refresh) {
        refresh.target.complete();
      }
    });
  }

  doRefresh($event) {
    this.loadProjects($event);
  }

}
