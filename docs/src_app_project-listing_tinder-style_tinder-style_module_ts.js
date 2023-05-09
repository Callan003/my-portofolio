"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_project-listing_tinder-style_tinder-style_module_ts"],{

/***/ 2609:
/*!*****************************************************************************!*\
  !*** ./src/app/project-listing/tinder-style/tinder-style-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TinderStylePageRoutingModule": () => (/* binding */ TinderStylePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tinder_style_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tinder-style.page */ 5291);




const routes = [
    {
        path: '',
        component: _tinder_style_page__WEBPACK_IMPORTED_MODULE_0__.TinderStylePage
    }
];
let TinderStylePageRoutingModule = class TinderStylePageRoutingModule {
};
TinderStylePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TinderStylePageRoutingModule);



/***/ }),

/***/ 3762:
/*!*********************************************************************!*\
  !*** ./src/app/project-listing/tinder-style/tinder-style.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TinderStylePageModule": () => (/* binding */ TinderStylePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _tinder_style_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tinder-style-routing.module */ 2609);
/* harmony import */ var _tinder_style_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tinder-style.page */ 5291);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7693);








let TinderStylePageModule = class TinderStylePageModule {
};
TinderStylePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tinder_style_routing_module__WEBPACK_IMPORTED_MODULE_0__.TinderStylePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_tinder_style_page__WEBPACK_IMPORTED_MODULE_1__.TinderStylePage]
    })
], TinderStylePageModule);



/***/ }),

/***/ 5291:
/*!*******************************************************************!*\
  !*** ./src/app/project-listing/tinder-style/tinder-style.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TinderStylePage": () => (/* binding */ TinderStylePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tinder_style_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tinder-style.page.html */ 5738);
/* harmony import */ var _tinder_style_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tinder-style.page.scss */ 4374);
/* harmony import */ var _services_achievement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/achievement.service */ 6632);
/* harmony import */ var _services_things_to_do_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/things-to-do.service */ 2297);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_components_project_swipeable_item_project_swipeable_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/project-swipeable-item/project-swipeable-item.component */ 3299);
/* harmony import */ var src_app_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/favorite.service */ 2527);
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common */ 2953);











let TinderStylePage = class TinderStylePage {
    constructor(http, gestureCtrl, changeDetector, plt, favoriteService, thingsToDoService, achievementService) {
        this.http = http;
        this.gestureCtrl = gestureCtrl;
        this.changeDetector = changeDetector;
        this.plt = plt;
        this.favoriteService = favoriteService;
        this.thingsToDoService = thingsToDoService;
        this.achievementService = achievementService;
    }
    ngOnInit() {
        this.http.get(`https://api.github.com/users/Callan003/repos`, { params: { sort: 'created' } }).subscribe((res) => {
            this.listOfItems = res;
            this.changeDetector.detectChanges();
            this.updateCards();
            this.thingsToDoService.setThingDone(3);
        });
    }
    updateCards() {
        const cardArray = this.cards.toArray();
        this.useSwipe(cardArray);
    }
    useSwipe(cardArray) {
        for (let i = 0; i < cardArray.length; i++) {
            const card = cardArray[i];
            const style = card.nativeElement.style;
            const swipe = this.gestureCtrl.create({
                el: card.nativeElement,
                gestureName: `swipe-${i}`,
                threshold: 0,
                onStart: () => {
                    style.transition = '';
                    this.swipeNegativeIcon.el.style.transition = '';
                    this.swipePositiveIcon.el.style.transition = '';
                    this.swipeNegativeIcon.el.style.color = 'var(--ion-color-dark)';
                    this.swipePositiveIcon.el.style.color = 'var(--ion-color-dark)';
                },
                onMove: ev => {
                    style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
                    if (ev.deltaX > 0) {
                        this.swipePositiveIcon.el.style.opacity = ev.deltaX / 100;
                        this.swipeNegativeIcon.el.style.opacity = 0;
                    }
                    else if (ev.deltaX < 0) {
                        this.swipeNegativeIcon.el.style.opacity = (-1 * ev.deltaX) / 100;
                        this.swipePositiveIcon.el.style.opacity = 0;
                    }
                    else {
                        this.swipeNegativeIcon.el.style.opacity = 0;
                        this.swipePositiveIcon.el.style.opacity = 0;
                    }
                },
                onEnd: ev => {
                    style.transition = '.5s ease-out';
                    if (ev.deltaX > 150) {
                        style.transform = `translateX(${this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                        this.swipePositiveIcon.el.style.opacity = 1;
                        this.swipePositiveIcon.el.style.color = 'var(--ion-color-danger)';
                        this.favoriteService.addToFavorites(this.listOfItems[i]);
                        this.achievementService.increaseAchievementProgress(src_app_common__WEBPACK_IMPORTED_MODULE_6__.AchievementId.SWIPPER);
                    }
                    else if (ev.deltaX < -150) {
                        this.swipeNegativeIcon.el.style.opacity = 1;
                        this.swipeNegativeIcon.el.style.color = 'var(--ion-color-danger)';
                        style.transform = `translateX(-${this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                        this.favoriteService.removeFromFavorites(this.listOfItems[i]);
                        this.achievementService.increaseAchievementProgress(src_app_common__WEBPACK_IMPORTED_MODULE_6__.AchievementId.SWIPPER);
                    }
                    else {
                        style.transform = '';
                    }
                    this.swipeNegativeIcon.el.style.opacity = 0;
                    this.swipeNegativeIcon.el.style.transition = 'opacity 1.5s';
                    this.swipePositiveIcon.el.style.opacity = 0;
                    this.swipePositiveIcon.el.style.transition = 'opacity 1.5s';
                }
            });
            swipe.enable();
        }
    }
    resetCards() {
        const cardArray = this.cards.toArray();
        for (let i = 0; i < cardArray.length; i++) {
            cardArray[i].nativeElement.style.transform = '';
        }
    }
};
TinderStylePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.GestureController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: src_app_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__.FavoriteService },
    { type: _services_things_to_do_service__WEBPACK_IMPORTED_MODULE_3__.ThingsToDoService },
    { type: _services_achievement_service__WEBPACK_IMPORTED_MODULE_2__.AchievementService }
];
TinderStylePage.propDecorators = {
    cards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChildren, args: [src_app_components_project_swipeable_item_project_swipeable_item_component__WEBPACK_IMPORTED_MODULE_4__.ProjectSwipeableItemComponent, { read: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef },] }],
    swipePositiveIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['swipePositiveIcon',] }],
    swipeNegativeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['swipeNegativeIcon',] }]
};
TinderStylePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tinder-style',
        template: _C_Users_Calin_Desktop_Portofolio_my_portofolio_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tinder_style_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tinder_style_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TinderStylePage);



/***/ }),

/***/ 5738:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/project-listing/tinder-style/tinder-style.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <ion-icon name=\"close\" class=\"swipe-negative-icon tutorial-reject\" #swipeNegativeIcon></ion-icon>\n    <ion-icon name=\"heart\" class=\"swipe-positive-icon tutorial-heart\" #swipePositiveIcon></ion-icon>\n    <div>\n      <div class=\"absolute-positioned-cards last-card ion-padding\">\n        <div class=\"no-more-projects\">\n          <i class=\"ion-text-center\">\n            <ion-icon name=\"sad\"></ion-icon> Oh no! \n          </i>\n          <p>\n            <i>No more projects...</i>\n          </p>\n          <ion-button href=\"favorites\" expand=\"full\" shape=\"round\" fill=\"clear\" color=\"dark\">\n            <ion-icon slot=\"start\" name=\"heart\" color=\"danger\"></ion-icon>\n            See Favorites\n          </ion-button>\n          <ion-button fill=\"clear\" expand=\"full\" shape=\"round\" (click)=\"resetCards()\" color=\"dark\">\n            <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>\n            Reset\n          </ion-button>\n        </div>\n      </div>\n      <app-project-swipeable-item \n      *ngFor=\"let item of listOfItems; let i = index\"\n      class=\"absolute-positioned-cards cursor-pointer\"\n        [class.tutorial-animation]=\"i === (listOfItems.length - 1)\"\n        [item]=\"item\">\n        </app-project-swipeable-item>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ 4374:
/*!*********************************************************************!*\
  !*** ./src/app/project-listing/tinder-style/tinder-style.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "div {\n  max-width: 500px;\n}\n\n.absolute-positioned-cards {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin-top: 35px;\n}\n\n.last-card {\n  width: calc(100% - 20px);\n  max-width: 500px;\n  max-height: 500px;\n  min-height: 500px;\n  max-width: 300px;\n  margin: auto;\n  margin-top: 25px;\n}\n\n.swipe-negative-icon {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  font-size: 80px;\n  opacity: 0;\n  z-index: 5;\n}\n\n.swipe-positive-icon {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  font-size: 70px;\n  opacity: 0;\n  z-index: 5;\n}\n\n.no-more-projects {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 16px;\n  right: 16px;\n  display: flex;\n  align-content: space-around;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nion-button {\n  height: 46px;\n}\n\n.tutorial-animation {\n  animation-name: tutorial;\n  animation-delay: 1s;\n  animation-duration: 3s;\n}\n\n.tutorial-heart {\n  animation-name: fadeInAndOut;\n  animation-delay: 1s;\n  animation-duration: 1.5s;\n}\n\n.tutorial-reject {\n  animation-name: fadeInAndOut;\n  animation-delay: 2.5s;\n  animation-duration: 1.5s;\n}\n\n@keyframes tutorial {\n  0% {\n    transform: translateX(0px) rotate(0.5deg);\n  }\n  25% {\n    transform: translateX(25px) rotate(5.5deg);\n  }\n  50% {\n    transform: translateX(5px) rotate(0.5deg);\n  }\n  75% {\n    transform: translateX(-25px) rotate(-5.5deg);\n  }\n  100% {\n    transform: translateX(0px) rotate(-0.5deg);\n  }\n}\n\n@keyframes fadeInAndOut {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n    color: var(--ion-color-danger);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbmRlci1zdHlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQUFKOztBQUdBO0VBQ0k7SUFBTSx5Q0FBQTtFQUNSO0VBQUU7SUFBTSwwQ0FBQTtFQUdSO0VBRkU7SUFBTSx5Q0FBQTtFQUtSO0VBSkU7SUFBTSw0Q0FBQTtFQU9SO0VBTkU7SUFBTSwwQ0FBQTtFQVNSO0FBQ0Y7O0FBUEU7RUFDSTtJQUFJLFVBQUE7RUFVUjtFQVRJO0lBQUssVUFBQTtJQUFZLDhCQUFBO0VBYXJCO0VBWkk7SUFBTSxVQUFBO0VBZVY7QUFDRiIsImZpbGUiOiJ0aW5kZXItc3R5bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5hYnNvbHV0ZS1wb3NpdGlvbmVkLWNhcmRzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuXHJcblxyXG4ubGFzdC1jYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5zd2lwZS1uZWdhdGl2ZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuLnN3aXBlLXBvc2l0aXZlLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuLm5vLW1vcmUtcHJvamVjdHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG59XHJcblxyXG4udHV0b3JpYWwtYW5pbWF0aW9uIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB0dXRvcmlhbDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcblxyXG4udHV0b3JpYWwtaGVhcnQge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkFuZE91dDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi50dXRvcmlhbC1yZWplY3Qge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkFuZE91dDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMi41cztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuQGtleWZyYW1lcyB0dXRvcmlhbCB7XHJcbiAgICAwJSAgIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGUoMC41ZGVnKTt9XHJcbiAgICAyNSUgIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjVweCkgcm90YXRlKDUuNWRlZyk7fVxyXG4gICAgNTAlICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlKDAuNWRlZyk7fVxyXG4gICAgNzUlICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSByb3RhdGUoLTUuNWRlZyk7fVxyXG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlKC0wLjVkZWcpO31cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluQW5kT3V0IHtcclxuICAgICAgMCUge29wYWNpdHk6IDA7fVxyXG4gICAgICA1MCUge29wYWNpdHk6IDE7IGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKX1cclxuICAgICAgMTAwJSB7b3BhY2l0eTogMDt9XHJcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_project-listing_tinder-style_tinder-style_module_ts.js.map