import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GestureController, Platform } from '@ionic/angular';
import { ProjectSwipeableItemComponent } from 'src/app/components/project-swipeable-item/project-swipeable-item.component';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-tinder-style',
  templateUrl: './tinder-style.page.html',
  styleUrls: ['./tinder-style.page.scss'],
})
export class TinderStylePage implements OnInit {

  listOfItems: any[];
  @ViewChildren(ProjectSwipeableItemComponent, {read: ElementRef}) cards: QueryList<ElementRef>;
  @ViewChild('swipePositiveIcon') swipePositiveIcon: any;
  @ViewChild('swipeNegativeIcon') swipeNegativeIcon: any;

  constructor(
    private http: HttpClient,
    private gestureCtrl: GestureController,
    private changeDetector : ChangeDetectorRef,
    private plt: Platform,
    private favoriteService: FavoriteService
    ) { }

  ngOnInit(): void {
    this.http.get(`https://api.github.com/users/Callan003/repos`, {params: {sort: 'created'}}).subscribe((res: any) => {
      this.listOfItems = res;
      this.changeDetector.detectChanges();
      this.updateCards();
    });
  }

  updateCards() {
    const cardArray = this.cards.toArray();
    this.useSwipe(cardArray);
  }

  useSwipe(cardArray) {
    for(let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      console.log(card);
      const style = card.nativeElement.style;
 
      const swipe = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: `swipe-${i}`,
        threshold: 0,
        onStart: () => {
          style.transition = '';
          this.swipeNegativeIcon.el.style.transition = '';
          this.swipePositiveIcon.el.style.transition = '';
          this.swipeNegativeIcon.el.style.color = 'var(--ion-color-dark)';
          this.swipePositiveIcon.el.style.color = 'var(--ion-color-dark)';

        },
        onMove: ev => {
          style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
          if(ev.deltaX > 0) {
            this.swipePositiveIcon.el.style.opacity = ev.deltaX / 100;
            this.swipeNegativeIcon.el.style.opacity = 0;
          } else if (ev.deltaX < 0) {
            this.swipeNegativeIcon.el.style.opacity = (-1 * ev.deltaX) / 100;
            this.swipePositiveIcon.el.style.opacity = 0;
          } else {
            this.swipeNegativeIcon.el.style.opacity = 0;
            this.swipePositiveIcon.el.style.opacity = 0;
          }
        },
        onEnd: ev => {
          style.transition = '.5s ease-out';
 
          if (ev.deltaX > 150) {
            style.transform = `translateX(${this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.swipePositiveIcon.el.style.opacity = 1;
            this.swipePositiveIcon.el.style.color = 'var(--ion-color-danger)';
            this.favoriteService.addToFavorites(this.listOfItems[i]);
          } else if (ev.deltaX < -150) {
            this.swipeNegativeIcon.el.style.opacity = 1;
            this.swipeNegativeIcon.el.style.color = 'var(--ion-color-danger)';
            style.transform = `translateX(-${this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.favoriteService.removeFromFavorites(this.listOfItems[i]);
          } else {
            style.transform = '';
          }
          this.swipeNegativeIcon.el.style.opacity = 0;
          this.swipeNegativeIcon.el.style.transition = 'opacity 1.5s';
          this.swipePositiveIcon.el.style.opacity = 0;
          this.swipePositiveIcon.el.style.transition = 'opacity 1.5s';
        }
      });
      swipe.enable();
    }
  }

  resetCards() {
    const cardArray = this.cards.toArray();
    for(let i = 0; i < cardArray.length; i++) {
      cardArray[i].nativeElement.style.transform = '';
    }
  }
}

