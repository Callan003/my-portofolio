import { MenuController, Platform } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MenuItems, ThemeAttribute, ThemeIcons, Themes } from 'src/app/common';
import { ThingsToDoService } from 'src/app/services/things-to-do.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme: Themes;
  themeIcon: ThemeIcons;
  changeThemeButtonClicked: boolean;
  menuItems = MenuItems;
  mobileMenu: boolean;

  constructor(    
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private menuController: MenuController,
    private thingsToDoService: ThingsToDoService
    ) {
    this.theme = localStorage.getItem(ThemeAttribute) as Themes || Themes.DARK;
    document.body.setAttribute(ThemeAttribute, this.theme);
    this.setThemeIcon();
   }

  ngOnInit(): void {
    const width = this.platform.width();

    this.setMenuType(width);
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    this.setMenuType(newWidth);
  }

  setMenuType(width: number) {
    if(width < 768) {
      this.mobileMenu = true;
      this.menuController.enable(true, 'custom');
    } else {
      this.mobileMenu = false;
      this.menuController.enable(false, 'custom');
    }
  }

  changeTheme(): void {
    this.thingsToDoService.setThingDone(4);
    this.changeThemeButtonClicked = true;
    switch(this.theme) {
      case Themes.DARK: 
        this.theme = Themes.LIGHT;
        localStorage.setItem(ThemeAttribute, Themes.LIGHT);
        this.document.body.setAttribute( ThemeAttribute, Themes.LIGHT)
        break;
      case Themes.LIGHT:
        this.theme = Themes.DARK;
        localStorage.setItem(ThemeAttribute, Themes.DARK);
        this.document.body.setAttribute( ThemeAttribute, Themes.DARK);
        break;
      default:
        break;
    }
    this.setThemeIcon();
  }

  setThemeIcon(): void {
    switch(this.theme) {
      case Themes.DARK: 
        this.themeIcon = ThemeIcons.DARK;
        break;
      case Themes.LIGHT:
        this.themeIcon = ThemeIcons.LIGHT;
        break;
      default:
        this.themeIcon = ThemeIcons.DARK;
        break;
    }
  }

}
