import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ThemeAttribute, ThemeIcons, Themes } from 'src/app/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  theme: Themes;
  themeIcon: ThemeIcons;
  changeThemeButtonClicked: boolean;

  constructor(    
    @Inject(DOCUMENT) private document: Document
    ) {
    this.theme = localStorage.getItem(ThemeAttribute) as Themes || Themes.DARK;
    document.body.setAttribute(ThemeAttribute, this.theme);
    this.setThemeIcon();
   }

  changeTheme(): void {
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
