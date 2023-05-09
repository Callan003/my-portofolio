"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_favorites_favorites_module_ts"],{

/***/ 9408:
/*!*******************************************************!*\
  !*** ./src/app/favorites/favorites-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageRoutingModule": () => (/* binding */ FavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page */ 7236);




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ 8158:
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageModule": () => (/* binding */ FavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/components.module */ 7693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites-routing.module */ 9408);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.page */ 7236);








let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_1__.FavoritesPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_2__.FavoritesPage]
    })
], FavoritesPageModule);



/***/ }),

/***/ 7236:
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPage": () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favorites.page.html */ 1002);
/* harmony import */ var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page.scss */ 2668);
/* harmony import */ var _services_things_to_do_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/things-to-do.service */ 2297);
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/favorite.service */ 2527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);






let FavoritesPage = class FavoritesPage {
    constructor(favoriteService, thingsToDoService) {
        this.favoriteService = favoriteService;
        this.thingsToDoService = thingsToDoService;
    }
    ngOnInit() {
        this.data = this.favoriteService.getFavorites();
        this.favoriteService.localFavoritesSubscriber.subscribe(favorites => {
            this.data = favorites;
        });
        this.thingsToDoService.setThingDone(5);
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_3__.FavoriteService },
    { type: _services_things_to_do_service__WEBPACK_IMPORTED_MODULE_2__.ThingsToDoService }
];
FavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-favorites',
        template: _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavoritesPage);



/***/ }),

/***/ 1002:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/favorites/favorites.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" collapse=\"fade\">\n  <app-header></app-header>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"center-grid ion-padding-horizontal\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <h2 class=\"ion-padding-horizontal\">List of Favorites</h2>\n        <p class=\"ion-padding-horizontal\" *ngIf=\"data?.length\" >Here you can find a list of my GitHub projects that you added to Favorites!</p>\n        <ion-item *ngIf=\"data?.length\" lines=\"none\" ><ion-icon name=\"eye\" slot=\"start\"></ion-icon> Click on a project to see more!</ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data?.length\" >\n      <ion-col *ngFor=\"let item of data\" >\n        <app-project-item [item]=\"item\"></app-project-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!data?.length\">\n      <ion-col>\n        <ion-item lines=\"none\" class=\"ion-padding-bottom\">\n          <ion-icon slot=\"end\" size=\"large\" color=\"dark\" name=\"sad-outline\"></ion-icon>\n          <ion-text>\n            <i>Oh no! It looks like you did not add any of my projects to the Favorites list! How rude!</i>\n         </ion-text> \n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"heart\" class=\"favorite-heart\" color=\"dark\"></ion-icon>\n          <ion-text>\n            <i>Go to Github projects page - <a href=\"project-listing/regular-listing\"><ion-icon name=\"list\"></ion-icon> Regular Listing </a> or \n              <a href=\"project-listing/tinder-style\"><ion-icon name=\"flame\"></ion-icon> Tinder style</a> - and add projects to your Favorites list by clicking the hearth icon or by swipping right!</i>\n         </ion-text> \n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!data?.length\" >\n      <ion-col>\n        <ion-buttons>\n          <ion-button strong=\"true\" href=\"project-listing/tinder-style\" shape=\"round\" color=\"danger\" expand=\"block\" fill=\"clear\" size=\"large\">\n            <ion-icon slot=\"end\" name='heart'></ion-icon>\n            Let's go!\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 2668:
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".favorite-heart {\n  font-size: 18px;\n  border: 2px solid;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: var(--ion-color-dark-contrast);\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-button {\n  width: 100%;\n  height: 50px;\n}\n\na {\n  text-decoration: none;\n}\n\na ion-icon {\n  vertical-align: text-top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUFJO0VBQ0ksd0JBQUE7QUFFUiIsImZpbGUiOiJmYXZvcml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXRlLWhlYXJ0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xyXG4gIH1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIH1cclxufVxyXG4gICJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_favorites_favorites_module_ts.js.map