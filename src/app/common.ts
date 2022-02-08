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
    link: 'favorites'
    }, {
    icon: 'trophy',
    name: 'Achievements',
    link: 'achievements'
    }
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
    { icon: 'earth', url: '/about-me?recursion=true', type: 'website', name: 'www.mcstroescu.com'},
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
        text: "Change the theme!",
        isDone: false,
        icon: (localStorage.getItem(ThemeAttribute) === Themes.LIGHT ? ThemeIcons.LIGHT : ThemeIcons.DARK) 
    },
    {
        id: 5,
        text: "See Favorites page",
        isDone: false,
        icon: "heart"
    },
];

export interface Achievement {
    id: number,
    title: string,
    description: string,
    level: number,
    limit: number[],
    progress: number
}

export enum Achievements {
    EXPLORER = 'Explorer',
    FAVORITE = 'Favorite',
    SWIPPER = 'Swipper',
    CONFETTI = 'Confetti',
    DAYNIGHT = 'DayNight',
    GITHUB = 'Github',
    STACKOVERFLOW = 'Stackoverflow'
}

export enum AchievementId {
    EXPLORER = 0,
    FAVORITE = 1,
    SWIPPER = 2,
    CONFETTI = 3,
    DAYNIGHT = 4,
    GITHUB = 5,
    STACKOVERFLOW = 6
}

export const AchievementList: Achievement[] = [
    {
        id: AchievementId.EXPLORER,
        title: Achievements.EXPLORER,
        description: "Complete the Explore list",
        limit: [1],
        level: 0,
        progress: 0
    },
    {
        id: AchievementId.FAVORITE,
        title: Achievements.FAVORITE,
        description: "Add projects to your favorites",
        limit: [1, 5, 9],
        level: 0,
        progress: 0
    },
    {
        id: AchievementId.SWIPPER,
        title: Achievements.SWIPPER,
        description: "Swipe some projects",
        limit: [1, 5, 9],
        level: 0,
        progress: 0
    },
    {
        id: AchievementId.CONFETTI,
        title: Achievements.CONFETTI,
        description: "See the About me page",
        limit: [1],
        level: 0,
        progress: 0
    },
    {
        id: AchievementId.DAYNIGHT,
        title: Achievements.DAYNIGHT,
        description: "Change the theme",
        limit: [1],
        level: 0,
        progress: 0
    },
    {
        id: AchievementId.GITHUB,
        title: Achievements.GITHUB,
        description: "Go to my github profile page",
        limit: [1],
        level: 0,
        progress: 0
    },
    {
        id: AchievementId.STACKOVERFLOW,
        title: Achievements.STACKOVERFLOW,
        description: "Go to my stackoverflow profile page",
        limit: [1],
        level: 0,
        progress: 0
    }
];