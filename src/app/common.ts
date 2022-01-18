export enum Themes {
    DARK = 'dark',
    LIGHT = 'light'
}

export enum ThemeIcons {
    DARK = 'moon',
    LIGHT = 'sunny'
}

export const ThemeAttribute = 'color-theme';
export const menuItemsToken = 'menu-items';

export interface ProjectItemType {
    title: string,
    description: string,
    subtitle: string,
    image: string,
    link: string;
}

export interface MenuItems {
    icon: string,
    name: string,
    link?: string
}

export const MenuItems = [
    {
    icon: 'home',
    name: 'Home',
    link: 'home'
    }, {
     icon: 'logo-github',
     name: 'Github Projects',
     link: 'project-listing'
    }, {
    icon: 'paper-plane',
     name: 'Outbox'
    }, {
    icon: 'heart',
    name: 'Favorites',
    link: 'favorites'}
]