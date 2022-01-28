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
    icon: 'person',
    name: 'About Me',
    link: 'about-me'
    }, {
     icon: 'logo-github',
     name: 'Github Projects',
     link: 'project-listing'
    }, {
    icon: 'heart',
    name: 'Favorites',
    link: 'favorites'}
]

export const Technologies = [
    {name: 'ionic'},
    {name: 'capacitor'},
    {name: 'angular'},
    {name: 'github'},
    {name: 'firebase'},
    {name: 'html5'},
    {name: 'css3'},
    {name: 'javascript'},
    {name: 'bitbucket'},
    {name: 'python'},
]

export const ContactData = [
    { icon: 'mail', url: 'cali_stroescu@yahoo.com', type: 'email', name: 'cali_stroescu@yahoo.com' },
    { icon: 'logo-linkedin', url: 'https://www.linkedin.com/in/marian-calin-stroescu-440735b6/', type: 'social', name: 'Marian-Calin Stroescu'},
    { icon: 'logo-facebook', url: 'https://www.facebook.com/calin.callan', type: 'social', name: 'Calin Stroescu'}
];

export const ThingsToDo = [
    {
        id: 0,
        text: "See the About Me page",
        isDone: false,
        icon: "person"
    },
    {
        id: 1,
        text: "See the Github Projects page",
        isDone: false,
        icon: "logo-github"
    },
    {
        id: 2,
        text: "See a Project Details page",
        isDone: false,
        icon: "search"
    },
    {
        id: 3,
        text: "Try the Tinder Style listing",
        isDone: false,
        icon: "flame"
    },
    {
        id: 4,
        text: "Add a project to your Favorites",
        isDone: false,
        icon: "heart"
    },
    {
        id: 5,
        text: "See Favorites page",
        isDone: false,
        icon: "heart"
    },
];