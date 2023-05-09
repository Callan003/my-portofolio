"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 7693:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _project_swipeable_item_project_swipeable_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-swipeable-item/project-swipeable-item.component */ 3299);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 7899);
/* harmony import */ var _social_accordion_social_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-accordion/social-accordion.component */ 4161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-item/project-item.component */ 9604);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);









let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_3__.ProjectItemComponent, _social_accordion_social_accordion_component__WEBPACK_IMPORTED_MODULE_2__.SocialAccordionComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _project_swipeable_item_project_swipeable_item_component__WEBPACK_IMPORTED_MODULE_0__.ProjectSwipeableItemComponent],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule
        ],
        exports: [_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_3__.ProjectItemComponent, _social_accordion_social_accordion_component__WEBPACK_IMPORTED_MODULE_2__.SocialAccordionComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _project_swipeable_item_project_swipeable_item_component__WEBPACK_IMPORTED_MODULE_0__.ProjectSwipeableItemComponent]
    })
], ComponentsModule);



/***/ }),

/***/ 7899:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 669);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 228);
/* harmony import */ var _services_achievement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/achievement.service */ 6632);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common */ 2953);
/* harmony import */ var src_app_services_things_to_do_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/things-to-do.service */ 2297);









let HeaderComponent = class HeaderComponent {
    constructor(document, platform, menuController, thingsToDoService, achievementService, toastController) {
        this.document = document;
        this.platform = platform;
        this.menuController = menuController;
        this.thingsToDoService = thingsToDoService;
        this.achievementService = achievementService;
        this.toastController = toastController;
        this.menuItems = src_app_common__WEBPACK_IMPORTED_MODULE_3__.MenuItems;
        this.theme = localStorage.getItem(src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeAttribute) || src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.DARK;
        document.body.setAttribute(src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeAttribute, this.theme);
        this.setThemeIcon();
    }
    ngOnInit() {
        const width = this.platform.width();
        this.setMenuType(width);
    }
    onResize(event) {
        const newWidth = event.target.innerWidth;
        this.setMenuType(newWidth);
    }
    setMenuType(width) {
        if (width < 768) {
            this.mobileMenu = true;
            this.menuController.enable(true, 'custom');
        }
        else {
            this.mobileMenu = false;
            this.menuController.enable(false, 'custom');
        }
    }
    changeTheme() {
        this.thingsToDoService.setThingDone(4);
        this.achievementService.increaseAchievementProgress(src_app_common__WEBPACK_IMPORTED_MODULE_3__.AchievementId.DAYNIGHT);
        switch (this.theme) {
            case src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.DARK:
                this.theme = src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.LIGHT;
                localStorage.setItem(src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeAttribute, src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.LIGHT);
                this.document.body.setAttribute(src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeAttribute, src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.LIGHT);
                break;
            case src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.LIGHT:
                this.theme = src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.DARK;
                localStorage.setItem(src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeAttribute, src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.DARK);
                this.document.body.setAttribute(src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeAttribute, src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.DARK);
                break;
            default:
                break;
        }
        this.presentToast();
        this.setThemeIcon();
    }
    setThemeIcon() {
        switch (this.theme) {
            case src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.DARK:
                this.themeIcon = src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeIcons.DARK;
                break;
            case src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.LIGHT:
                this.themeIcon = src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeIcons.LIGHT;
                break;
            default:
                this.themeIcon = src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeIcons.DARK;
                break;
        }
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.theme === src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.LIGHT ? 'Let there be light!' : 'Welcome to the dark side!',
                duration: 2000,
                position: 'top',
                color: 'dark',
                cssClass: 'ion-text-center',
                icon: this.theme === src_app_common__WEBPACK_IMPORTED_MODULE_3__.Themes.LIGHT ? src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeIcons.LIGHT : src_app_common__WEBPACK_IMPORTED_MODULE_3__.ThemeIcons.DARK
            });
            toast.present();
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT,] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: src_app_services_things_to_do_service__WEBPACK_IMPORTED_MODULE_4__.ThingsToDoService },
    { type: _services_achievement_service__WEBPACK_IMPORTED_MODULE_2__.AchievementService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
HeaderComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener, args: ['window:resize', ['$event'],] }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-header',
        template: _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 9604:
/*!*******************************************************************!*\
  !*** ./src/app/components/project-item/project-item.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectItemComponent": () => (/* binding */ ProjectItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_project_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./project-item.component.html */ 9719);
/* harmony import */ var _project_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-item.component.scss */ 3214);
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/favorite.service */ 2527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);





let ProjectItemComponent = class ProjectItemComponent {
    constructor(favoriteService) {
        this.favoriteService = favoriteService;
        this.favorites = [];
    }
    ngOnInit() {
        var _a, _b, _c;
        this.isFav = this.favoriteService.isProjectOnFavoriteList(this.item);
        this.favoriteService.localFavoritesSubscriber.subscribe(favorites => {
            this.isFav = this.favoriteService.isProjectOnFavoriteList(this.item);
        });
        this.imgSrc = `https://github.com/Callan003/${(_a = this.item) === null || _a === void 0 ? void 0 : _a.name}/blob/${(_b = this.item) === null || _b === void 0 ? void 0 : _b.default_branch}/${(_c = this.item) === null || _c === void 0 ? void 0 : _c.name}.webp?raw=true`;
    }
    addToFavorites(project) {
        this.toggleFav = true;
        const favoriteDto = {
            id: project === null || project === void 0 ? void 0 : project.id,
            name: project === null || project === void 0 ? void 0 : project.name,
            description: project === null || project === void 0 ? void 0 : project.description,
            created_at: project.created_at,
            stargazers_count: project.stargazers_count,
            default_branch: project.default_branch
        };
        this.favoriteService.toggleFavorites(favoriteDto);
    }
};
ProjectItemComponent.ctorParameters = () => [
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_2__.FavoriteService }
];
ProjectItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ProjectItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-project-item',
        template: _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_project_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_project_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectItemComponent);



/***/ }),

/***/ 3299:
/*!***************************************************************************************!*\
  !*** ./src/app/components/project-swipeable-item/project-swipeable-item.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectSwipeableItemComponent": () => (/* binding */ ProjectSwipeableItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_project_swipeable_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./project-swipeable-item.component.html */ 7341);
/* harmony import */ var _project_swipeable_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-swipeable-item.component.scss */ 1053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let ProjectSwipeableItemComponent = class ProjectSwipeableItemComponent {
    constructor() { }
    ngOnInit() {
        var _a, _b, _c;
        this.imgSrc = `https://github.com/Callan003/${(_a = this.item) === null || _a === void 0 ? void 0 : _a.name}/blob/${(_b = this.item) === null || _b === void 0 ? void 0 : _b.default_branch}/${(_c = this.item) === null || _c === void 0 ? void 0 : _c.name}.webp?raw=true`;
    }
};
ProjectSwipeableItemComponent.ctorParameters = () => [];
ProjectSwipeableItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ProjectSwipeableItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-project-swipeable-item',
        template: _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_project_swipeable_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_project_swipeable_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectSwipeableItemComponent);



/***/ }),

/***/ 4161:
/*!***************************************************************************!*\
  !*** ./src/app/components/social-accordion/social-accordion.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialAccordionComponent": () => (/* binding */ SocialAccordionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_social_accordion_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./social-accordion.component.html */ 6552);
/* harmony import */ var _social_accordion_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-accordion.component.scss */ 316);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../common */ 2953);
/* harmony import */ var _services_achievement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/achievement.service */ 6632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);






let SocialAccordionComponent = class SocialAccordionComponent {
    constructor(achievementService) {
        this.achievementService = achievementService;
        this.achievementId = _common__WEBPACK_IMPORTED_MODULE_2__.AchievementId;
    }
    updateAchievement(achievementId) {
        this.achievementService.increaseAchievementProgress(achievementId);
    }
};
SocialAccordionComponent.ctorParameters = () => [
    { type: _services_achievement_service__WEBPACK_IMPORTED_MODULE_3__.AchievementService }
];
SocialAccordionComponent.propDecorators = {
    lichessProfileInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    stackoverflowProfileInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    stackoverflowLimitExceeded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    fetchingData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    gitHubProfileInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SocialAccordionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-social-accordion',
        template: _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_social_accordion_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_social_accordion_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SocialAccordionComponent);



/***/ }),

/***/ 2527:
/*!**********************************************!*\
  !*** ./src/app/services/favorite.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteService": () => (/* binding */ FavoriteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _achievement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achievement.service */ 6632);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4575);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ 2953);






let FavoriteService = class FavoriteService {
    constructor(toastController, achievementService) {
        this.toastController = toastController;
        this.achievementService = achievementService;
        this.localFavoritesSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.localFavorites = this.getFavorites() || [];
    }
    getFavorites() {
        const freshFav = JSON.parse(localStorage.getItem('favorites'));
        this.localFavoritesSubscriber.next(freshFav);
        return freshFav;
    }
    addToFavorites(favorite) {
        this.achievementService.increaseAchievementProgress(_common__WEBPACK_IMPORTED_MODULE_1__.AchievementId.FAVORITE);
        if (this.isProjectOnFavoriteList(favorite))
            return;
        this.localFavorites.push(favorite);
        localStorage.setItem('favorites', JSON.stringify(this.localFavorites));
    }
    removeFromFavorites(favorite) {
        this.localFavorites = this.localFavorites.filter(element => (element === null || element === void 0 ? void 0 : element.id) !== (favorite === null || favorite === void 0 ? void 0 : favorite.id));
        localStorage.setItem('favorites', JSON.stringify(this.localFavorites));
    }
    toggleFavorites(favorite) {
        if (this.isProjectOnFavoriteList(favorite)) {
            this.localFavorites = this.localFavorites.filter(element => (element === null || element === void 0 ? void 0 : element.id) !== (favorite === null || favorite === void 0 ? void 0 : favorite.id));
            this.presentToast('remove', favorite);
        }
        else {
            this.achievementService.increaseAchievementProgress(_common__WEBPACK_IMPORTED_MODULE_1__.AchievementId.FAVORITE);
            this.localFavorites.push(favorite);
            this.presentToast('add', favorite);
        }
        this.localFavoritesSubscriber.next(this.localFavorites);
        localStorage.setItem('favorites', JSON.stringify(this.localFavorites));
    }
    isProjectOnFavoriteList(project) {
        var _a;
        return (_a = this.localFavorites) === null || _a === void 0 ? void 0 : _a.find(element => (element === null || element === void 0 ? void 0 : element.id) === (project === null || project === void 0 ? void 0 : project.id));
    }
    presentToast(project, projectInfo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                position: 'bottom',
                color: project === 'add' ? 'success' : 'danger',
                icon: project === 'add' ? 'heart' : 'heart-dislike',
                message: project === 'add' ? 'Added to Favorites!' : 'Removed from favorites!',
                duration: 3000,
                buttons: [
                    {
                        side: 'end',
                        icon: 'arrow-undo-outline',
                        text: 'Undo',
                        handler: () => {
                            this.toggleFavorites(projectInfo);
                        }
                    }
                ]
            });
            toast.present();
        });
    }
};
FavoriteService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _achievement_service__WEBPACK_IMPORTED_MODULE_0__.AchievementService }
];
FavoriteService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], FavoriteService);



/***/ }),

/***/ 2297:
/*!**************************************************!*\
  !*** ./src/app/services/things-to-do.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingsToDoService": () => (/* binding */ ThingsToDoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common */ 2953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4575);




let ThingsToDoService = class ThingsToDoService {
    constructor() {
        this.thingsToDo = _common__WEBPACK_IMPORTED_MODULE_0__.ThingsToDo;
        this.localThingsToDoSubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    getThingsToDoFromLS() {
        const thingsDone = JSON.parse(localStorage.getItem('thingsDone')) || [];
        thingsDone.forEach(thing => this.thingsToDo[thing].isDone = true);
        this.localThingsToDoSubscriber.next(this.thingsToDo);
        return this.thingsToDo;
    }
    setThingDone(thing) {
        const thingsDone = JSON.parse(localStorage.getItem('thingsDone')) || [];
        if (!thingsDone.find(thingDone => thingDone === thing) && thingsDone.find(thingDone => thingDone === thing) !== 0) {
            thingsDone.push(thing);
            localStorage.setItem('thingsDone', JSON.stringify(thingsDone));
            this.getThingsToDoFromLS();
        }
    }
    resetThingsToDo() {
        localStorage.removeItem('thingsDone');
        this.thingsToDo.forEach(thing => thing.isDone = false);
        this.getThingsToDoFromLS();
    }
};
ThingsToDoService.ctorParameters = () => [];
ThingsToDoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ThingsToDoService);



/***/ }),

/***/ 669:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/header/header.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar id=\"mobile-header\" *ngIf=\"mobileMenu\" mode=\"md\" >\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button auto-hide=\"false\"></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-buttons slot=\"secondary\">\r\n    <ion-button (click)=\"changeTheme()\">\r\n      <ion-icon slot=\"end\" [name]=\"themeIcon\" color=\"dark\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-toolbar id=\"desktop-header\" *ngIf=\"!mobileMenu\">\r\n  <!-- <ion-icon class=\"logo\" src=\"../../../assets/icon/laptop_infinity.svg\" size=\"large\"></ion-icon> -->\r\n  <div class=\"desktop-menu-buttons\">\r\n    <ion-button *ngFor=\"let item of menuItems\" class=\"menu-item-button ion-text-capitalize\" fill=\"clear\"  [routerLink]=\"'/' + item?.link\" routerDirection=\"root\" routerLinkActive=\"selected\">\r\n      <ion-icon [name]=\"item.icon\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{item.name}}</ion-label>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <ion-buttons slot=\"secondary\">\r\n    <ion-button (click)=\"changeTheme()\">\r\n      <ion-icon slot=\"end\" [name]=\"themeIcon\" color=\"dark\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>");

/***/ }),

/***/ 9719:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/project-item/project-item.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class='project-item cursor-pointer'> \r\n<ion-icon name=\"heart\" class=\"favorite-heart\" [ngClass]=\"toggleFav ? (isFav ? 'flip-add' : 'flip-remove') : isFav ? 'isFav' : ''\"\r\n (click)=\"addToFavorites(item)\"></ion-icon>\r\n<ion-card [href]=\"'/project-details/' + item.name\" class='project-item' mode=\"md\">\r\n  <div class=\"project-image\">\r\n  <img [src]=\"imgSrc\"\r\n   onerror=\"this.onerror=null; this.src='../../../assets/images/no-image.webp'\" width=\"100%\" height=\"100%\" [alt]='item.name' />\r\n  </div>\r\n  <ion-card-header>\r\n    <ion-card-title>{{item.name}}</ion-card-title>\r\n    <ion-card-subtitle>\r\n      <ion-chip>\r\n        <ion-icon name=\"calendar-number-outline\" color=\"dark\" size=\"small\"></ion-icon>\r\n        <ion-label>{{item.created_at | date}}</ion-label>\r\n      </ion-chip>\r\n      <ion-chip>\r\n        <ion-icon name=\"star\" color=\"warning\" size=\"small\"></ion-icon>\r\n        <ion-label>{{item.stargazers_count}}</ion-label>\r\n      </ion-chip>\r\n    </ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <p class=\"ion-padding ion-text-center\" *ngIf=\"item.description\" >{{item.description }}</p>\r\n    <p class=\"ion-padding ion-text-center\" *ngIf=\"!item.description\" ><i>This project has no description</i></p>\r\n  </ion-card-content>\r\n</ion-card>\r\n</div>");

/***/ }),

/***/ 7341:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/project-swipeable-item/project-swipeable-item.component.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card mode=\"md\">\n  <img [src]=\"imgSrc\"\n   onerror=\"this.onerror=null; this.src='../../../assets/images/no-image.webp'\" width=\"300\" height=\"200\" [alt]='item.name' />\n  <ion-card-header>\n    <ion-card-title>{{item.name}}</ion-card-title>\n    <ion-card-subtitle>\n      <div>\n        <ion-chip>\n          <ion-icon name=\"calendar-number-outline\" color=\"dark\" size=\"small\"></ion-icon>\n          <ion-label>{{item.created_at | date}}</ion-label>\n        </ion-chip>\n        <ion-chip>\n          <ion-icon name=\"star\" color=\"warning\" size=\"small\"></ion-icon>\n          <ion-label>{{item.stargazers_count}}</ion-label>\n        </ion-chip>\n      </div>\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <p [ngClass]=\"{'font-style-italic' : !item.description}\">{{item.description ? item.description : \"This project has no description\"}}</p>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ 6552:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/social-accordion/social-accordion.component.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-accordion-group mode=\"md\">\r\n  <ion-accordion value=\"gihtub\">\r\n    <ion-item slot=\"header\">\r\n      <ion-icon size=\"large\" name=\"logo-github\" slot=\"start\" color=\"dark\"></ion-icon>\r\n      <ion-label>Github</ion-label>\r\n    </ion-item>\r\n    <ion-list slot=\"content\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"library\" color=\"dark\"></ion-icon>\r\n          <ion-label>Public Repos: {{gitHubProfileInfo?.public_repos}}\r\n            <ion-spinner name=\"bubbles\" *ngIf=\"!gitHubProfileInfo || fetchingData\"></ion-spinner>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"people\" color=\"dark\"></ion-icon>\r\n          <ion-label>Followers: {{gitHubProfileInfo?.followers}}\r\n            <ion-spinner name=\"bubbles\" *ngIf=\"!gitHubProfileInfo || fetchingData\"></ion-spinner>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"eye\" color=\"dark\"></ion-icon>\r\n          <ion-label>Following: {{gitHubProfileInfo?.following}}\r\n            <ion-spinner name=\"bubbles\" *ngIf=\"!gitHubProfileInfo || fetchingData\"></ion-spinner>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"https://github.com/Callan003\" target=\"_blank\" (click)=\"updateAchievement(achievementId.GITHUB)\">\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"enter\" color=\"dark\"></ion-icon>\r\n          <ion-label>See my profile</ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n  </ion-accordion>\r\n  <ion-accordion value=\"stackoverflow\">\r\n    <ion-item slot=\"header\">\r\n      <ion-icon size=\"large\" name=\"logo-stackoverflow\" slot=\"start\" color=\"dark\"></ion-icon>\r\n      <ion-label>Stackoverflow</ion-label>\r\n    </ion-item>\r\n    <ion-list slot=content *ngIf=\"stackoverflowLimitExceeded\" lines=\"none\" >\r\n      <ion-item>\r\n        <ion-icon slot=\"start\" size=\"small\" name=\"ban\" color=\"danger\"></ion-icon>\r\n        <ion-text>Daily request limit exceeded! Try again later.</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list *ngIf=\"!stackoverflowLimitExceeded\"  slot=\"content\" lines=\"none\">\r\n      <ion-item>\r\n        <div class=\"margin-auto\">\r\n          <ion-chip outline=\"true\" class=\"gold\">\r\n            <ion-icon size=\"small\" name=\"medal\"></ion-icon>\r\n            <ion-label>Gold: {{stackoverflowProfileInfo?.badge_counts?.gold}} \r\n              <ion-spinner name=\"bubbles\" *ngIf=\"!stackoverflowProfileInfo || fetchingData\"></ion-spinner>\r\n            </ion-label>\r\n          </ion-chip>\r\n          <ion-chip outline=\"true\" class=\"silver\">\r\n            <ion-icon size=\"small\" name=\"medal\"></ion-icon>\r\n            <ion-label>Silver: {{stackoverflowProfileInfo?.badge_counts?.silver}}\r\n              <ion-spinner name=\"bubbles\" *ngIf=\"!stackoverflowProfileInfo || fetchingData\"></ion-spinner>\r\n            </ion-label>\r\n          </ion-chip>\r\n          <ion-chip outline=\"true\" class=\"bronze\">\r\n            <ion-icon size=\"small\" name=\"medal\" class=\"bronze\"></ion-icon>\r\n            <ion-label>Bronze: {{stackoverflowProfileInfo?.badge_counts?.bronze}}\r\n              <ion-spinner name=\"bubbles\" *ngIf=\"!stackoverflowProfileInfo || fetchingData\"></ion-spinner>\r\n            </ion-label>\r\n          </ion-chip>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon slot=\"start\" size=\"small\" name=\"trophy\" color=\"dark\"></ion-icon>\r\n        <ion-label>\r\n          Reputation: \r\n          {{stackoverflowProfileInfo?.reputation}}\r\n          <ion-spinner name=\"bubbles\" *ngIf=\"!stackoverflowProfileInfo || fetchingData\"></ion-spinner>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon slot=\"start\" size=\"small\" name=\"trending-up\" color=\"dark\"></ion-icon>\r\n        <ion-label>Rep. last month: \r\n          {{stackoverflowProfileInfo?.reputation_change_month}}\r\n          <ion-spinner *ngIf=\"!stackoverflowProfileInfo || fetchingData\" name=\"bubbles\"></ion-spinner>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item href=\"https://stackoverflow.com/users/15947768/callan\" target=\"_blank\" (click)=\"updateAchievement(achievementId.STACKOVERFLOW)\">\r\n        <ion-icon slot=\"start\" size=\"small\" name=\"enter\" color=\"dark\"></ion-icon>\r\n        <ion-label>See my profile</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-accordion>\r\n  <ion-accordion value=\"lichess\">\r\n    <ion-item slot=\"header\">\r\n      <ion-icon size=\"large\" slot=\"start\" color=\"dark\" src=\"../../assets/icon/lichess.svg\"></ion-icon>\r\n      <ion-label>Lichess</ion-label>\r\n    </ion-item>\r\n    <ion-list slot=\"content\" lines=\"none\">\r\n        <ion-item>\r\n          <ion-icon slot=\"start\" size=\"small\" src=\"../../assets/icon/chess-solid.svg\" color=\"dark\"></ion-icon>\r\n          <ion-label>Total Games: \r\n            {{lichessProfileInfo?.count?.all}}\r\n            <ion-spinner name=\"bubbles\" *ngIf=\"!lichessProfileInfo || fetchingData\"></ion-spinner>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"flame\" color=\"dark\"></ion-icon>\r\n          <ion-label>\r\n            Blitz Rating: \r\n            {{lichessProfileInfo?.perfs?.blitz?.rating}}\r\n            <ion-spinner name=\"bubbles\" *ngIf=\"!lichessProfileInfo || fetchingData\"></ion-spinner>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href='https://lichess.org/?user=Callan003#friend' target=\"_blank\">\r\n          <ion-icon slot=\"start\" size=\"small\" src=\"../../assets/icon/swords.svg\" color=\"dark\"></ion-icon>\r\n          <ion-label class=\"lichess-challange\">\r\n            <strong>Challange me!</strong>\r\n            <span>\r\n              ({{lichessProfileInfo?.online ? 'Online' : 'Offline'}}\r\n              <ion-icon class=\"vertical-align-middle\" size=\"small\" name=\"ellipse\" [ngClass]=\"lichessProfileInfo?.online ? 'online' : 'offline'\"></ion-icon>)\r\n            </span>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"https://lichess.org/@/Callan003\" target=\"_blank\">\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"enter\" color=\"dark\"></ion-icon>\r\n          <ion-label>See my profile</ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n  </ion-accordion>\r\n</ion-accordion-group>");

/***/ }),

/***/ 228:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  margin: auto 30px;\n  vertical-align: middle;\n  font-size: xx-large;\n}\n\n.menu-item-button {\n  --color: var(--ion-color-dark);\n}\n\n.menu-item-button ion-icon {\n  margin-bottom: 6px;\n}\n\n.selected ion-icon {\n  color: var(--ion-color-primary);\n  animation: colorIn 1s;\n}\n\nion-toolbar {\n  box-shadow: 0 2px 3px -3px var(--ion-color-dark);\n}\n\n.desktop-menu-buttons {\n  text-align: left;\n  margin-left: 30px;\n  display: inline-block;\n}\n\n.fade-in-and-out {\n  font-size: 14px;\n  opacity: 0;\n  animation: fadeInOut 3s;\n}\n\n@keyframes fadeInOut {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  65% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes colorIn {\n  0% {\n    color: var(--ion-color-dark);\n  }\n  100% {\n    color: var(--ion-color-primary);\n  }\n}\n\n@keyframes colorOut {\n  0% {\n    color: var(--ion-color-primary);\n  }\n  100% {\n    color: var(--ion-color-dark);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBSUksOEJBQUE7QUFGSjs7QUFESTtFQUNJLGtCQUFBO0FBR1I7O0FBSUk7RUFDSSwrQkFBQTtFQUdBLHFCQUFBO0FBRlI7O0FBTUE7RUFDSSxnREFBQTtBQUhKOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FBSEo7O0FBcUJFO0VBQ0U7SUFDSSxVQUFBO0VBSk47RUFNRTtJQUNJLFVBQUE7RUFKTjtFQU1FO0lBQ0ksVUFBQTtFQUpOO0VBTUU7SUFDSSxVQUFBO0VBSk47QUFDRjs7QUFlRTtFQUNFO0lBQ0ksNEJBQUE7RUFMTjtFQU9FO0lBQ0ksK0JBQUE7RUFMTjtBQUNGOztBQWlCRTtFQUNFO0lBQ0ksK0JBQUE7RUFQTjtFQVNFO0lBQ0ksNEJBQUE7RUFQTjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIG1hcmdpbjogYXV0byAzMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0tYnV0dG9uIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcblxyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjb2xvckluIDFzO1xyXG4gICAgICAgIGFuaW1hdGlvbjogY29sb3JJbiAxcztcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IC0zcHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4uZGVza3RvcC1tZW51LWJ1dHRvbnMge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZmFkZS1pbi1hbmQtb3V0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluT3V0IDNzO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgM3M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5PdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICA2NSUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGZhZGVJbk91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDY1JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgY29sb3JJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgY29sb3JJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBjb2xvck91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19 */";

/***/ }),

/***/ 3214:
/*!*********************************************************************!*\
  !*** ./src/app/components/project-item/project-item.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".project-item {\n  margin: auto;\n  max-height: 100%;\n  max-width: 100%;\n  min-width: 250px;\n  height: 100%;\n  transition: all 0.3s;\n}\n.project-item img {\n  max-height: 400px;\n  max-width: 100%;\n  min-height: 165px;\n}\n.project-item:hover {\n  transform: scale(101%);\n}\nion-card {\n  border-radius: 16px;\n}\nion-card ion-card-title {\n  text-overflow: ellipsis;\n  overflow-wrap: break-word;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.favorite-heart {\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  font-size: 18px;\n  margin: 10px;\n  border: 2px solid;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: var(--ion-color-dark-contrast);\n}\n.isFav {\n  color: var(--ion-color-danger);\n}\n.flip-add {\n  animation: flip-icon-add 0.5s ease-in-out;\n  color: var(--ion-color-danger);\n}\n.flip-remove {\n  animation: flip-icon-remove 0.5s ease-in-out;\n  color: var(--ion-color-dark);\n}\n@keyframes flip-icon-add {\n  0% {\n    transform: rotateY(180deg);\n    color: var(--ion-color-dark);\n  }\n  100% {\n    transform: rotateY(0deg);\n    color: var(--ion-color-danger);\n  }\n}\n@keyframes flip-icon-remove {\n  0% {\n    transform: rotateY(180deg);\n    color: var(--ion-color-danger);\n  }\n  100% {\n    transform: rotateY(0deg);\n    color: var(--ion-color-dark);\n  }\n}\n.chips {\n  margin: 0 16px 16px;\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFTRCxvQkFBQTtBQUxEO0FBSEU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUtKO0FBR0E7RUFHQyxzQkFBQTtBQUFEO0FBR0E7RUFDRSxtQkFBQTtBQUFGO0FBRUU7RUFDRSx1QkFBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FBRkY7QUFLQTtFQUNFLDhCQUFBO0FBRkY7QUFLQTtFQUNFLHlDQUFBO0VBQ0EsOEJBQUE7QUFGRjtBQUtBO0VBQ0UsNENBQUE7RUFDQSw0QkFBQTtBQUZGO0FBS0E7RUFDRTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7RUFGQTtFQUlBO0lBQ0Esd0JBQUE7SUFDQSw4QkFBQTtFQUZBO0FBQ0Y7QUFLQTtFQUNFO0lBQ0EsMEJBQUE7SUFDQSw4QkFBQTtFQUhBO0VBS0E7SUFDQSx3QkFBQTtJQUNBLDRCQUFBO0VBSEE7QUFDRjtBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFKRiIsImZpbGUiOiJwcm9qZWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1pdGVtIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTY1cHg7XHJcbiAgfVxyXG5cclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxMDElKTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMTAxJSk7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxMDElKTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblxyXG4gIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDFweCk7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcblxyXG4uZmF2b3JpdGUtaGVhcnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XHJcbn1cclxuXHJcbi5pc0ZhdiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG4uZmxpcC1hZGQge1xyXG4gIGFuaW1hdGlvbjogZmxpcC1pY29uLWFkZCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG5cclxuLmZsaXAtcmVtb3ZlIHtcclxuICBhbmltYXRpb246IGZsaXAtaWNvbi1yZW1vdmUgMC41cyBlYXNlLWluLW91dDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsaXAtaWNvbi1hZGQge1xyXG4gIDAlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGlwLWljb24tcmVtb3ZlIHtcclxuICAwJSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGlwcyB7XHJcbiAgbWFyZ2luOiAwIDE2cHggMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG59Il19 */";

/***/ }),

/***/ 1053:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/project-swipeable-item/project-swipeable-item.component.scss ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  width: calc(100% - 20px);\n  max-width: 500px;\n  height: 500px;\n  max-width: 300px;\n  margin: auto;\n}\nion-card img {\n  max-height: 300px;\n  max-width: 100%;\n}\nion-card ion-card-header {\n  padding-bottom: 0;\n}\nion-card ion-card-content {\n  min-height: 190px !important;\n  text-align: center;\n  display: flex;\n}\nion-card ion-card-content p {\n  margin: auto;\n}\n.font-style-italic {\n  font-style: italic !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Qtc3dpcGVhYmxlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFFTjtBQUFJO0VBQ0UsaUJBQUE7QUFFTjtBQUFJO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFFTjtBQURNO0VBQ0UsWUFBQTtBQUdSO0FBRUE7RUFDRSw2QkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3Qtc3dpcGVhYmxlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgbWluLWhlaWdodDogMTkwcHggIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb250LXN0eWxlLWl0YWxpYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 316:
/*!*****************************************************************************!*\
  !*** ./src/app/components/social-accordion/social-accordion.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".margin-auto {\n  margin: auto;\n}\n\n.lichess-challange ion-icon {\n  vertical-align: middle;\n}\n\n.online {\n  color: green;\n}\n\n.offline {\n  color: red;\n}\n\n.gold {\n  border-color: #f0b400;\n  background-color: #5d573c;\n  color: white;\n}\n\n.gold ion-icon {\n  color: #f0b400;\n}\n\n.silver {\n  border-color: #999c9f;\n  background-color: #424242;\n  color: white;\n}\n\n.silver ion-icon {\n  color: #999c9f;\n}\n\n.bronze {\n  border-color: #ab825f;\n  background-color: #4e443c;\n  color: white;\n}\n\n.bronze ion-icon {\n  color: #ab825f;\n}\n\nion-spinner {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1hY2NvcmRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0k7RUFDRSxzQkFBQTtBQUFOOztBQUlFO0VBQ0UsWUFBQTtBQURKOztBQUlFO0VBQ0UsVUFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFESjs7QUFFSTtFQUNFLGNBQUE7QUFBTjs7QUFHRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBR0U7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUNJO0VBQ0UsY0FBQTtBQUNOOztBQUdBO0VBQ0ksc0JBQUE7QUFBSiIsImZpbGUiOiJzb2NpYWwtYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1hdXRvIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmxpY2hlc3MtY2hhbGxhbmdlIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm9ubGluZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmZsaW5lIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5nb2xkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2YwYjQwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDU3M2M7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZjBiNDAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2lsdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzk5OWM5ZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjOTk5YzlmO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnJvbnplIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2FiODI1ZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTQ0M2M7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjYWI4MjVmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmlvbi1zcGlubmVyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map