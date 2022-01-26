import { ToastController } from '@ionic/angular';
import { Component, ViewChild } from '@angular/core';
import { MenuItems, menuItemsToken } from './common';
import { ItemReorderEventDetail } from '@ionic/core';
import { Location } from '@angular/common';
import { App } from '@capacitor/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild('reorderGroup') reorderGroup: any;

  showDragMeInfoOnlyOnce = true;
  showDragMeInfo = false;
  currentRoute;

  menuItems: MenuItems[] = MenuItems;

  constructor(
    private toastController: ToastController,
    private location: Location
    ) {
      this.backButtonEv();
      const menuItemsFromStorage = JSON.parse(localStorage.getItem(menuItemsToken));
      if(!!menuItemsFromStorage) {
        this.menuItems = menuItemsFromStorage;
      }
  }

  backButtonEv() {
    App.addListener('backButton', () =>
    {
      if (this.location.isCurrentPathEqualTo('/home'))
      {
        if (window.confirm("Are you sure you want to exit the app?")){
          App.exitApp();
        }
      } 
      else
      {
        this.location.back();
      }
    });
  }

  reorderItems(event: CustomEvent<ItemReorderEventDetail>): void {
    this.showDragMeInfo = false;
    const itemMove = this.menuItems.splice(event.detail.from, 1)[0];
    this.menuItems.splice(event.detail.to, 0, itemMove);
    localStorage.setItem(menuItemsToken, JSON.stringify(this.menuItems));
    event.detail.complete();

    if(this.menuItems[this.menuItems.length - 1].name === 'Home') {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `Seriously?! Who put's 'Home' at the bottom of the list?`,
      duration: 4000,
      position: 'middle',
      icon: 'warning',
      color: 'warning'
    });
    toast.present();
  }

  toggleReorderGroup(): void {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;

    if(this.showDragMeInfoOnlyOnce) {
      this.showDragMeInfo = true;
      this.showDragMeInfoOnlyOnce = false;
    }
  }
}
