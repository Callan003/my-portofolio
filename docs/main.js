(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 8245)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'project-details/:projectName',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_project-details_project-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./project-details/project-details.module */ 1)).then(m => m.ProjectDetailsPageModule)
    },
    {
        path: 'favorites',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_favorites_favorites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./favorites/favorites.module */ 8158)).then(m => m.FavoritesPageModule)
    },
    {
        path: 'project-listing',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./project-listing/project-listing.module */ 8227)).then(m => m.ProjectListingPageModule)
    },
    {
        path: 'about-me',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_about-me_about-me_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./about-me/about-me.module */ 6966)).then(m => m.AboutMePageModule)
    },
    {
        path: 'achievements',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_achievements_achievements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./achievements/achievements.module */ 4391)).then(m => m.AchievementsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _services_achievement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/achievement.service */ 6632);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ 2953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/app */ 2225);









let AppComponent = class AppComponent {
    constructor(toastController, location, achievementService) {
        this.toastController = toastController;
        this.location = location;
        this.achievementService = achievementService;
        this.showDragMeInfoOnlyOnce = true;
        this.showDragMeInfo = false;
        this.menuItems = _common__WEBPACK_IMPORTED_MODULE_3__.MenuItems;
        this.backButtonEv();
        const menuItemsFromStorage = JSON.parse(localStorage.getItem(_common__WEBPACK_IMPORTED_MODULE_3__.menuItemsToken));
        if (!!menuItemsFromStorage) {
            this.menuItems = menuItemsFromStorage;
        }
    }
    ngOnInit() {
        window['ga-disable-UA-G-5L53KZNJMV-Y'] = true;
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-G-5L53KZNJMV-Y']);
        _gaq.push(['_trackPageview']);
        this.achievementService.getInitialAchievementList();
        if (!localStorage.getItem(_common__WEBPACK_IMPORTED_MODULE_3__.trackingInfo)) {
            this.presentCookieToast();
        }
        else if (localStorage.getItem(_common__WEBPACK_IMPORTED_MODULE_3__.trackingInfo) === 'true') {
        }
    }
    presentCookieToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `This site uses cookies / local storage to track user's activity via Google Analytics. \n`,
                position: 'bottom',
                color: 'primary',
                buttons: [
                    {
                        side: 'end',
                        icon: 'checkmark',
                        text: 'Ok',
                        handler: () => {
                            window['ga-disable-UA-G-5L53KZNJMV-Y'] = false;
                            // localStorage.setItem(trackingInfo, 'true');
                            var _gaq = _gaq || [];
                            //...snip...
                            //set a cookie to express that the user has opted-in to tracking, for future pageviews
                            _gaq.push(['_trackPageview']); // now run the pageview that you 'missed'
                        },
                    },
                    {
                        side: 'start',
                        icon: 'close',
                        text: 'Decline',
                        handler: () => {
                            localStorage.setItem(_common__WEBPACK_IMPORTED_MODULE_3__.trackingInfo, 'false');
                            window['ga-disable-UA-G-5L53KZNJMV-Y'] = true;
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    backButtonEv() {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.addListener('backButton', () => {
            if (this.location.isCurrentPathEqualTo('/home')) {
                if (window.confirm("Are you sure you want to exit the app?")) {
                    _capacitor_app__WEBPACK_IMPORTED_MODULE_4__.App.exitApp();
                }
            }
            else {
                this.location.back();
            }
        });
    }
    reorderItems(event) {
        this.showDragMeInfo = false;
        const itemMove = this.menuItems.splice(event.detail.from, 1)[0];
        this.menuItems.splice(event.detail.to, 0, itemMove);
        localStorage.setItem(_common__WEBPACK_IMPORTED_MODULE_3__.menuItemsToken, JSON.stringify(this.menuItems));
        event.detail.complete();
        if (this.menuItems[this.menuItems.length - 1].name === 'Home') {
            this.presentToast();
        }
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `Seriously?! Who put's 'Home' at the bottom of the list?`,
                duration: 4000,
                position: 'middle',
                icon: 'warning',
                color: 'warning'
            });
            toast.present();
        });
    }
    toggleReorderGroup() {
        this.reorderGroup.disabled = !this.reorderGroup.disabled;
        if (this.showDragMeInfoOnlyOnce) {
            this.showDragMeInfo = true;
            this.showDragMeInfoOnlyOnce = false;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _services_achievement_service__WEBPACK_IMPORTED_MODULE_2__.AchievementService }
];
AppComponent.propDecorators = {
    reorderGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['reorderGroup',] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ 8439);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__.MarkdownModule.forRoot()
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2953:
/*!***************************!*\
  !*** ./src/app/common.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Themes": () => (/* binding */ Themes),
/* harmony export */   "ThemeIcons": () => (/* binding */ ThemeIcons),
/* harmony export */   "ThemeAttribute": () => (/* binding */ ThemeAttribute),
/* harmony export */   "menuItemsToken": () => (/* binding */ menuItemsToken),
/* harmony export */   "trackingInfo": () => (/* binding */ trackingInfo),
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems),
/* harmony export */   "Technologies": () => (/* binding */ Technologies),
/* harmony export */   "ContactData": () => (/* binding */ ContactData),
/* harmony export */   "ThingsToDo": () => (/* binding */ ThingsToDo),
/* harmony export */   "Achievements": () => (/* binding */ Achievements),
/* harmony export */   "AchievementId": () => (/* binding */ AchievementId),
/* harmony export */   "AchievementList": () => (/* binding */ AchievementList)
/* harmony export */ });
var Themes;
(function (Themes) {
    Themes["DARK"] = "dark";
    Themes["LIGHT"] = "light";
})(Themes || (Themes = {}));
var ThemeIcons;
(function (ThemeIcons) {
    ThemeIcons["DARK"] = "moon";
    ThemeIcons["LIGHT"] = "sunny";
})(ThemeIcons || (ThemeIcons = {}));
const ThemeAttribute = 'color-theme';
const menuItemsToken = 'menu-items';
const trackingInfo = 'trackingInfo';
const MenuItems = [
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
];
const Technologies = [
    { name: 'ionic' },
    { name: 'capacitor' },
    { name: 'angular' },
    { name: 'github' },
    { name: 'firebase' },
    { name: 'html5' },
    { name: 'css3' },
    { name: 'javascript' },
    { name: 'bitbucket' },
    { name: 'python' },
];
const ContactData = [
    { icon: 'earth', url: '/about-me?recursion=true', type: 'website', name: 'www.mcstroescu.com' },
    { icon: 'mail', url: 'cali_stroescu@yahoo.com', type: 'email', name: 'cali_stroescu@yahoo.com' },
    { icon: 'logo-linkedin', url: 'https://www.linkedin.com/in/marian-calin-stroescu-440735b6/', type: 'social', name: 'Marian-Calin Stroescu' },
    { icon: 'logo-facebook', url: 'https://www.facebook.com/calin.callan', type: 'social', name: 'Calin Stroescu' }
];
const ThingsToDo = [
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
var Achievements;
(function (Achievements) {
    Achievements["EXPLORER"] = "Explorer";
    Achievements["FAVORITE"] = "Favorite";
    Achievements["SWIPPER"] = "Swipper";
    Achievements["CONFETTI"] = "Confetti";
    Achievements["DAYNIGHT"] = "DayNight";
    Achievements["GITHUB"] = "Github";
    Achievements["STACKOVERFLOW"] = "Stackoverflow";
})(Achievements || (Achievements = {}));
var AchievementId;
(function (AchievementId) {
    AchievementId[AchievementId["EXPLORER"] = 0] = "EXPLORER";
    AchievementId[AchievementId["FAVORITE"] = 1] = "FAVORITE";
    AchievementId[AchievementId["SWIPPER"] = 2] = "SWIPPER";
    AchievementId[AchievementId["CONFETTI"] = 3] = "CONFETTI";
    AchievementId[AchievementId["DAYNIGHT"] = 4] = "DAYNIGHT";
    AchievementId[AchievementId["GITHUB"] = 5] = "GITHUB";
    AchievementId[AchievementId["STACKOVERFLOW"] = 6] = "STACKOVERFLOW";
})(AchievementId || (AchievementId = {}));
const AchievementList = [
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


/***/ }),

/***/ 6632:
/*!*************************************************!*\
  !*** ./src/app/services/achievement.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementService": () => (/* binding */ AchievementService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common */ 2953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AchievementService = class AchievementService {
    constructor(alertController) {
        this.alertController = alertController;
        this.achievementList = JSON.parse(JSON.stringify(_common__WEBPACK_IMPORTED_MODULE_0__.AchievementList));
    }
    getInitialAchievementList() {
        const achievemntProgress = JSON.parse(localStorage.getItem('achievementProgress')) || [];
        achievemntProgress.forEach(achievementP => {
            this.achievementList[achievementP.id].progress = achievementP.progress;
            while (this.achievementList[achievementP.id].progress >= this.achievementList[achievementP.id].limit[this.achievementList[achievementP.id].level]) {
                this.achievementList[achievementP.id].level = ++this.achievementList[achievementP === null || achievementP === void 0 ? void 0 : achievementP.id].level;
            }
        });
    }
    getAchievementList(displayAlert) {
        const achievemntProgress = JSON.parse(localStorage.getItem('achievementProgress')) || [];
        achievemntProgress.forEach(achievementP => {
            this.achievementList[achievementP.id].progress = achievementP.progress;
            while (this.achievementList[achievementP.id].progress >= this.achievementList[achievementP.id].limit[this.achievementList[achievementP.id].level]) {
                this.achievementList[achievementP.id].level = ++this.achievementList[achievementP === null || achievementP === void 0 ? void 0 : achievementP.id].level;
                if (displayAlert) {
                    this.displayNewAchievementAlert(this.achievementList[achievementP.id], true);
                }
            }
        });
        return this.achievementList;
    }
    increaseAchievementProgress(achievementId) {
        this.setAchievementProgressInLS({ id: achievementId, progress: ++this.achievementList[achievementId].progress });
        this.getAchievementList(true);
    }
    resetAchievement(achievementId) {
        const localAchievementProgress = JSON.parse(localStorage.getItem('achievementProgress')) || [];
        const achievementIndex = localAchievementProgress.findIndex(local => local.id === achievementId);
        if (achievementIndex >= 0) {
            localAchievementProgress[achievementIndex].progress = 0;
        }
        else {
            return;
        }
        localStorage.setItem('achievementProgress', JSON.stringify(localAchievementProgress));
        this.achievementList[achievementId].level = 0;
    }
    setAchievementProgressInLS(achievement) {
        const localAchievementProgress = JSON.parse(localStorage.getItem('achievementProgress')) || [];
        const achievementIndex = localAchievementProgress.findIndex(local => local.id === achievement.id);
        if (achievementIndex >= 0) {
            localAchievementProgress[achievementIndex] = achievement;
        }
        else {
            localAchievementProgress.push(achievement);
        }
        localStorage.setItem('achievementProgress', JSON.stringify(localAchievementProgress));
    }
    resetAchievements() {
        localStorage.removeItem('achievementProgress');
        this.achievementList = JSON.parse(JSON.stringify(_common__WEBPACK_IMPORTED_MODULE_0__.AchievementList));
        return this.achievementList;
    }
    isAchievementAtMaxLevel(achievement) {
        const currentAchievement = this.achievementList.find(ach => ach.id === achievement.id);
        if (currentAchievement) {
            return currentAchievement.level === currentAchievement.limit.length;
        }
        else
            return false;
    }
    displayNewAchievementAlert(achievement, autoDismiss) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const maxLevel = this.isAchievementAtMaxLevel(achievement);
            const alert = yield this.alertController.create({
                header: achievement.level === 0 ? 'Achievement Locked!' : 'Achievement Unlocked!',
                subHeader: `${achievement.title} - Level ${achievement.level} ${maxLevel ? '(Max Level)' : ''}`,
                cssClass: 'achievement-alert ' + (maxLevel ? 'achievement-alert-glow' : ''),
                message: `<img src='../../assets/Badges/${achievement.title}${achievement.level}.webp' alt='${achievement.title}'/> `,
                mode: 'ios'
            });
            alert.present();
            if (autoDismiss)
                setTimeout(() => alert.dismiss(), 3000);
        });
    }
};
AchievementService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController }
];
AchievementService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AchievementService);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n<ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\n  <ion-header>\n    <ion-toolbar translucent>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-reorder-group  (ionItemReorder)=\"reorderItems($event)\" #reorderGroup>\n        <ion-reorder *ngFor=\"let item of menuItems\" >\n          <ion-menu-toggle>\n          <ion-item [routerLink]=\"item.link\"  detail=\"false\" routerDirection=\"root\" routerLinkActive=\"selected\">\n            <ion-icon [name]=\"item.icon\" slot=\"start\"></ion-icon>\n            <ion-label>{{item.name}}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        </ion-reorder>\n      </ion-reorder-group>\n    </ion-list>\n    <div class=\"ion-text-center\" *ngIf=\"showDragMeInfo && !reorderGroup.disabled\" >\n      <ion-icon name=\"arrow-up\" class=\"up\" size='large'></ion-icon>\n      <p>Drag me!</p>\n    </div>\n  </ion-content>\n  <ion-footer>\n    <ion-item (click)=\"toggleReorderGroup()\">\n      <ion-label>Toggle reorder</ion-label>\n      <ion-toggle color=\"primary\" mode='ios' [checked]=\"!reorderGroup.disabled\"></ion-toggle>\n    </ion-item>\n  </ion-footer>\n</ion-menu>\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "@keyframes bouncey {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n.up {\n  animation: bouncey 2s infinite;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQUE7RUFDRjtFQUNBO0lBQ0UsMkJBQUE7RUFDRjtFQUNBO0lBQ0Usd0JBQUE7RUFDRjtBQUNGO0FBYUE7RUFFSSw4QkFBQTtBQUFKO0FBR0E7RUFDRSxzREFBQTtBQUFGO0FBR0E7RUFDRSwrQkFBQTtBQUFGO0FBR0E7RUFDRSxzREFBQTtBQUFGO0FBR0E7RUFDRSwrQkFBQTtBQUFGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgIGJvdW5jZXkge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogKHRyYW5zbGF0ZVkoMCkpXHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06ICh0cmFuc2xhdGVZKDEwcHgpKVxyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogKHRyYW5zbGF0ZVkoMCkpXHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyAgIGJvdW5jZXkge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06ICh0cmFuc2xhdGVZKDApKVxyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiAodHJhbnNsYXRlWSgxMHB4KSlcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06ICh0cmFuc2xhdGVZKDApKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbi51cCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYm91bmNleSAycyBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYm91bmNleSAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map