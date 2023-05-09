"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_achievements_achievements_module_ts"],{

/***/ 6702:
/*!*************************************************************!*\
  !*** ./src/app/achievements/achievements-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementsPageRoutingModule": () => (/* binding */ AchievementsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _achievements_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achievements.page */ 1560);




const routes = [
    {
        path: '',
        component: _achievements_page__WEBPACK_IMPORTED_MODULE_0__.AchievementsPage
    }
];
let AchievementsPageRoutingModule = class AchievementsPageRoutingModule {
};
AchievementsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AchievementsPageRoutingModule);



/***/ }),

/***/ 4391:
/*!*****************************************************!*\
  !*** ./src/app/achievements/achievements.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementsPageModule": () => (/* binding */ AchievementsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/components.module */ 7693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _achievements_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./achievements-routing.module */ 6702);
/* harmony import */ var _achievements_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./achievements.page */ 1560);








let AchievementsPageModule = class AchievementsPageModule {
};
AchievementsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _achievements_routing_module__WEBPACK_IMPORTED_MODULE_1__.AchievementsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_achievements_page__WEBPACK_IMPORTED_MODULE_2__.AchievementsPage]
    })
], AchievementsPageModule);



/***/ }),

/***/ 1560:
/*!***************************************************!*\
  !*** ./src/app/achievements/achievements.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AchievementsPage": () => (/* binding */ AchievementsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_achievements_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./achievements.page.html */ 2259);
/* harmony import */ var _achievements_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./achievements.page.scss */ 102);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_achievement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/achievement.service */ 6632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);






let AchievementsPage = class AchievementsPage {
    constructor(achievementService, alertController) {
        this.achievementService = achievementService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.achievements = this.achievementService.getAchievementList();
    }
    getImage(item) {
        return `../../assets/Badges/${item.title}${item.level}.webp`;
    }
    getProgressBarValue(item) {
        return item.progress / (item.limit.length === item.level ? item.limit[item.limit.length - 1] : item.limit[item.level]);
    }
    resetAchievements() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const resetAchievementsAlert = yield this.alertController.create({
                header: "Please confirm",
                mode: 'ios',
                message: 'Are you sure you want to reset your Achivements?',
                buttons: [{
                        text: 'Cancel',
                        cssClass: 'color-dark',
                        role: 'cancel'
                    }, {
                        text: 'Reset',
                        cssClass: 'color-success',
                        handler: () => {
                            this.achievements = this.achievementService.resetAchievements();
                        }
                    }]
            });
            resetAchievementsAlert.present();
        });
    }
    isMaxLevel(achievement) {
        return this.achievementService.isAchievementAtMaxLevel(achievement);
    }
    openAchievementInfo(achievement) {
        this.achievementService.displayNewAchievementAlert(achievement, false);
    }
    openInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alertInfo = yield this.alertController.create({
                header: 'Achievements Info',
                mode: 'ios',
                message: 'Here you can find a list of achievements that you can unlock by exploring my portofolio!',
                buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'color-success',
                    }]
            });
            alertInfo.present();
        });
    }
};
AchievementsPage.ctorParameters = () => [
    { type: _services_achievement_service__WEBPACK_IMPORTED_MODULE_2__.AchievementService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
AchievementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-achievements',
        template: _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_achievements_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_achievements_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AchievementsPage);



/***/ }),

/***/ 2259:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/achievements/achievements.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" collapse=\"fade\">\r\n  <app-header #header></app-header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"center-content\">\r\n    <h2>\r\n      <span class=\"text-sub ion-margin-start\">Achievements</span>\r\n      <ion-button id=\"open-popover\" fill=\"clear\" color=\"dark\" class=\"ion-float-right\"><ion-icon name=\"settings-outline\"></ion-icon></ion-button>\r\n    </h2>\r\n    <ion-popover arrow=\"true\" dismissOnSelect=\"true\" trigger=\"open-popover\">\r\n      <ng-template>\r\n        <ion-list lines=\"none\">\r\n          <ion-item (click)=\"openInfo()\" [button]=\"true\" [detail]=\"false\">\r\n            <ion-icon name=\"information-circle-outline\" slot=\"end\"></ion-icon>\r\n            <ion-label>Info</ion-label>\r\n          </ion-item>\r\n          <ion-item [button]=\"true\" [detail]=\"false\" (click)=\"resetAchievements()\">\r\n            <ion-icon name=\"refresh\" slot=\"end\"></ion-icon>\r\n            <ion-label>Reset Progress</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ng-template>\r\n    </ion-popover>\r\n\r\n      <div class=\"achievement cursor-pointer\" *ngFor=\"let item of achievements\" (click)=\"openAchievementInfo(item)\">\r\n        <img [src]=\"getImage(item)\" class=\"achievement-image\" [alt]=\"item.title\"/>\r\n        <div class=\"w-100\">\r\n          <h4 class=\"ion-no-margin\"><strong>{{item.title}}</strong></h4>\r\n    \r\n          <p class=\"smaller-margin\"><i>{{item.description}}</i></p>\r\n    \r\n          <ion-badge mode=\"ios\" [color]=\"isMaxLevel(item) ? 'success' : item.progress === 0 ? 'medium' : 'dark'\">\r\n            {{item.progress > item.limit[item.level - 1] && item.progress < item.limit[item.level] ? item.progress : item.limit[item.level - 1] || 0}}\r\n            /\r\n            {{item.limit[item.level] ? item.limit[item.level] : item.limit[item.limit.length - 1]}}\r\n          </ion-badge>\r\n          <ion-badge color=\"success\" mode=\"ios\" *ngIf=\"isMaxLevel(item)\" > Max Level</ion-badge>\r\n          <ion-progress-bar [value]=\"getProgressBarValue(item)\" [color]=\"isMaxLevel(item) ? 'success' : item.progress === 0 ? 'medium' : 'dark'\"></ion-progress-bar>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 102:
/*!*****************************************************!*\
  !*** ./src/app/achievements/achievements.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".center-content {\n  max-width: 768px;\n  margin: auto;\n}\n\n.achievement {\n  display: flex;\n  align-content: space-around;\n  justify-content: center;\n  align-items: center;\n  width: calc(100% - 40px);\n  margin: 20px;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.achievement-image {\n  width: 200px;\n  height: 200px;\n}\n\n.text-sub {\n  vertical-align: sub;\n}\n\n.smaller-margin {\n  margin: 10px 0;\n}\n\nion-badge {\n  margin: 0 2px;\n}\n\n@media (max-width: 768px) {\n  .achievement-image {\n    width: 150px;\n    height: 150px;\n  }\n}\n\n@media (max-width: 425px) {\n  .achievement-image {\n    width: 100px;\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjaGlldmVtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQ0E7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBRU47QUFDRjs7QUFBQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUFFTjtBQUNGIiwiZmlsZSI6ImFjaGlldmVtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmFjaGlldmVtZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hY2hpZXZlbWVudC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4udGV4dC1zdWIge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxufVxyXG5cclxuLnNtYWxsZXItbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbmlvbi1iYWRnZSB7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5hY2hpZXZlbWVudC1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuYWNoaWV2ZW1lbnQtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_achievements_achievements_module_ts.js.map