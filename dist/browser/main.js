(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.component.html */ "E9vc");
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component.css */ "0Hey");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/about.service */ "8Lko");
/* harmony import */ var _models_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/page */ "PMS6");
/* harmony import */ var _models_skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/skills */ "rZw3");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BaseComponent */ "lPu9");
/* harmony import */ var src_app_services_mock_mock_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/mock/mock-about */ "ogVo");









var AboutComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AboutComponent, _super);
    function AboutComponent(aboutService) {
        var _this = _super.call(this) || this;
        _this.aboutService = aboutService;
        _this.mainPage = _models_page__WEBPACK_IMPORTED_MODULE_5__["MainPage"].placeholder;
        _this.skills = _models_skills__WEBPACK_IMPORTED_MODULE_6__["Skills"].placeholder;
        return _this;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    AboutComponent.prototype.getPage = function () {
        var _this = this;
        this.aboutService.getAboutPage().subscribe(function (page) { return _this.mainPage = page; }, function (_) { return _this.mainPage = src_app_services_mock_mock_about__WEBPACK_IMPORTED_MODULE_8__["MOCK_ABOUT"]; });
        this.aboutService.getSkills().subscribe(function (skills) { return _this.skills = skills; }, function (_) { return _this.skills = src_app_services_mock_mock_about__WEBPACK_IMPORTED_MODULE_8__["MOCK_SKILLS"]; });
    };
    AboutComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['IAboutService',] }] }
    ]; };
    AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about',
            template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                { provide: 'IAboutService', useClass: _services_about_service__WEBPACK_IMPORTED_MODULE_4__["AboutService"] }
            ],
            styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], AboutComponent);
    return AboutComponent;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_7__["PageComponent"]));



/***/ }),

/***/ "/Hkw":
/*!******************************************!*\
  !*** ./src/app/models/external.links.ts ***!
  \******************************************/
/*! exports provided: ExternalLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLinks", function() { return ExternalLinks; });
var ExternalLinks = /** @class */ (function () {
    function ExternalLinks() {
        this.github = '';
        this.linkedin = '';
        this.email = '';
    }
    return ExternalLinks;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/WD_BLACK/OneDrive/Docs/Source Code/Github/hainayanda-blog/src/main.ts */"zUnb");


/***/ }),

/***/ "0Hey":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.about-header {\n    top: 0px;\n    left: 0px;\n    min-width: 100%;\n    min-height: 768px;\n    max-height: 900px;\n}\n\ndiv.about-header-bg{\n    z-index: -1;\n    background-image: url(\"https://res.cloudinary.com/hainayanda/image/upload/v1547411349/home.jpg\");\n    background-size: cover;\n    position: fixed;\n    background-position: center;\n    min-width: 100%;\n    min-height: 768px;\n    max-height: 900px;\n}\n\ndiv.about-row{\n    display: flex;\n    flex-direction: column;\n    padding-left: 50%;\n    padding-right: 90px;\n    padding-top: 75px;\n    padding-bottom: 75px;\n    height: 100%;\n    min-height: 768px;\n    max-height: 900px;\n    align-content: center;\n}\n\ndiv.about-content-container{\n    margin: auto;\n}\n\n.about{\n    color: var(--color-darker)\n}\n\np.about-p{\n    padding: 45px 0 18px;\n}\n\ni.button-r-arrow{\n    margin-left: 20px;\n    font-size: 1.2em;\n}\n\na.button{\n    text-decoration: none;\n    font-size: 21px;\n    font-weight: 300;\n    color: white;\n    padding: 12px 18px;\n    border-radius: 9px;\n    margin-right: 18px;\n    margin-top: 18px;\n    display: inline-block;\n    transition: opacity 200ms linear;\n}\n\na.button:hover{\n    opacity: 0.7;\n    transition: opacity 200ms linear;\n}\n\na.button-project{\n    background-color: var(--color-darker);\n}\n\na.button-contact{\n    background-color: var(--color-dark);\n    margin-bottom: 27px;\n}\n\n@media screen and (max-width: 900px) {\n    div.about-header-bg{\n        background-position: left;\n    }\n\n    div.about-row{\n        padding-left: 60%;\n        padding-right: 45px;\n        margin: auto;\n    }\n\n    div.about-row{\n        padding-left: 27px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdHQUFnRztJQUNoRyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmFib3V0LWhlYWRlciB7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA3NjhweDtcbiAgICBtYXgtaGVpZ2h0OiA5MDBweDtcbn1cblxuZGl2LmFib3V0LWhlYWRlci1iZ3tcbiAgICB6LWluZGV4OiAtMTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9oYWluYXlhbmRhL2ltYWdlL3VwbG9hZC92MTU0NzQxMTM0OS9ob21lLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDc2OHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwMHB4O1xufVxuXG5kaXYuYWJvdXQtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3NXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA3NjhweDtcbiAgICBtYXgtaGVpZ2h0OiA5MDBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpdi5hYm91dC1jb250ZW50LWNvbnRhaW5lcntcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5hYm91dHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFya2VyKVxufVxuXG5wLmFib3V0LXB7XG4gICAgcGFkZGluZzogNDVweCAwIDE4cHg7XG59XG5cbmkuYnV0dG9uLXItYXJyb3d7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuYS5idXR0b257XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcbn1cblxuYS5idXR0b246aG92ZXJ7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xufVxuXG5hLmJ1dHRvbi1wcm9qZWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmtlcik7XG59XG5cbmEuYnV0dG9uLWNvbnRhY3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBkaXYuYWJvdXQtaGVhZGVyLWJne1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIH1cblxuICAgIGRpdi5hYm91dC1yb3d7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNjAlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgZGl2LmFib3V0LXJvd3tcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyN3B4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "0qMD":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-detail/project-detail.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carousel\">\n  <ngb-carousel>\n    <ng-template ngbSlide *ngFor=\"let image of project.pictures\">\n      <div [style.background-image]=\"'url('+ image +')'\" class=\"project-images-carousel\"></div>\n    </ng-template>\n  </ngb-carousel>\n</div>\n<div class=\"project-description-container\">\n  <h2 class=\"bold\">{{project.name}}</h2>\n  <h5 class=\"semi-bold\">{{formatDate(project.startedDate)}} - {{formatDate(project.endDate)}}</h5>\n  <p class=\"regular line-breaker\">{{project.description}}</p>\n  <div class=\"button-container\">\n    <a class=\"button button-back\" routerLink=\"/projects\">\n      <i class=\"button-r-arrow fas fa-caret-left\"></i>\n      Back to project page\n    </a>\n    <a *ngIf=\"project.link\" class=\"button button-gotolink\" [attr.href]=\"project.link\" target=\"_blank\">\n      Go to project\n      <i class=\"button-r-arrow fas fa-caret-right\"></i>\n    </a>\n  </div>\n</div>");

/***/ }),

/***/ "0z2C":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.home-container{\n    top: 0px;\n    left: 0px;\n    min-width: 100%;\n    min-height: 100%;\n}\n\ndiv.home-bg{\n    z-index: -1;\n    background-image: url(\"https://res.cloudinary.com/hainayanda/image/upload/v1547409056/home-bg.jpg\");\n    background-size: cover;\n    background-position: center;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    min-width: 100%;\n    min-height: 100%;\n}\n\ndiv.home-row{\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    margin: auto;\n}\n\ndiv.home-content-container{\n    width: 900px;\n    margin: auto;\n}\n\nh1.home{\n    color: white;\n    line-height: 95% !important;\n}\n\np.home{\n    color: white;\n    padding: 45px 0 18px;\n}\n\ni.button-r-arrow{\n    margin-left: 20px;\n    font-size: 1.2em;\n}\n\na.button{\n    text-decoration: none;\n    font-size: 21px;\n    font-weight: 300;\n    color: white;\n    padding: 12px 18px;\n    border-radius: 9px;\n    margin-right: 18px;\n    margin-top: 18px;\n    display: inline-block;\n    transition: opacity 200ms linear;\n}\n\na.button:hover{\n    opacity: 0.7;\n    transition: opacity 200ms linear;\n}\n\na.button-about{\n    background-color: var(--color-primary);\n}\n\na.button-contact{\n    background-color: var(--color-transparent-light);\n}\n\n@media screen and (max-width: 900px) {\n\n    h1.home{\n        font-size: 50px;\n    }\n    div.home-container{\n        max-width: 100%;\n        max-height: 100%;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n    }\n\n    div.home-row{\n        padding: 180px 0 180px;\n        margin: auto;\n    }\n    \n    div.home-content-container{\n        margin-left: 18px;\n        margin-right: 18px;\n        width: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtR0FBbUc7SUFDbkcsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsMkJBQW1CO1FBQW5CLHdCQUFtQjtRQUFuQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmhvbWUtY29udGFpbmVye1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuZGl2LmhvbWUtYmd7XG4gICAgei1pbmRleDogLTE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaGFpbmF5YW5kYS9pbWFnZS91cGxvYWQvdjE1NDc0MDkwNTYvaG9tZS1iZy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuZGl2LmhvbWUtcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbmRpdi5ob21lLWNvbnRlbnQtY29udGFpbmVye1xuICAgIHdpZHRoOiA5MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbmgxLmhvbWV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxpbmUtaGVpZ2h0OiA5NSUgIWltcG9ydGFudDtcbn1cblxucC5ob21le1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA0NXB4IDAgMThweDtcbn1cblxuaS5idXR0b24tci1hcnJvd3tcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG5hLmJ1dHRvbntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHggMThweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xufVxuXG5hLmJ1dHRvbjpob3ZlcntcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBsaW5lYXI7XG59XG5cbmEuYnV0dG9uLWFib3V0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG5hLmJ1dHRvbi1jb250YWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRyYW5zcGFyZW50LWxpZ2h0KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblxuICAgIGgxLmhvbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG4gICAgZGl2LmhvbWUtY29udGFpbmVye1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgZGl2LmhvbWUtcm93e1xuICAgICAgICBwYWRkaW5nOiAxODBweCAwIDE4MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIFxuICAgIGRpdi5ob21lLWNvbnRlbnQtY29udGFpbmVye1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "4Zlr":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about-dev-skills/about-dev-skills.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dev-skills-container\">\n  <div class=\"row\">\n    <div class=\"column\" *ngFor=\"let skill of skills\">\n      <h6 class=\"dev-skills regular\">{{skill.name}}</h6>\n        <circle-progress\n        [percent]=\"skill.value * 100\"\n        [radius]=\"54\"\n        [outerStrokeWidth]=\"12\"\n        [innerStrokeWidth]=\"2\"\n        [innerStrokeColor]=\"'var(--color-secondary)'\"\n        [outerStrokeColor]=\"'var(--color-primary)'\"\n        [animation]=\"true\"\n        [animationDuration]=\"300\"\n        [showTitle]=\"false\"\n        [showSubtitle] = \"false\"\n        [showUnits]=\"false\"\n      ></circle-progress>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "6bE9":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./projects.component.html */ "aggk");
/* harmony import */ var _projects_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.component.css */ "hA4Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/project.service */ "c3AT");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BaseComponent */ "lPu9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_mock_mock_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mock/mock-projects */ "KAVU");








var ProjectsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProjectsComponent, _super);
    function ProjectsComponent(router, projectService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.projectService = projectService;
        _this.projects = [];
        _this.appliedTags = [];
        return _this;
    }
    Object.defineProperty(ProjectsComponent.prototype, "tags", {
        get: function () {
            var tags = new Set();
            this.projects.forEach(function (project) {
                project.tags.forEach(function (tag) {
                    tags.add(tag);
                });
            });
            return Array.from(tags);
        },
        enumerable: false,
        configurable: true
    });
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (projects) {
            _this.projects = projects.sort(function (a, b) { return b.startedDate - a.startedDate; });
            _this.projectWithAppliedTags = _this.getProjectWithAppliedTags();
        }, function (_) {
            _this.projects = src_app_services_mock_mock_projects__WEBPACK_IMPORTED_MODULE_7__["MOCK_PROJECTS"];
            _this.projectWithAppliedTags = _this.getProjectWithAppliedTags();
        });
    };
    ProjectsComponent.prototype.getProjectWithAppliedTags = function () {
        var appliedTags = this.appliedTags;
        if (appliedTags.length === 0) {
            return this.projects;
        }
        var foundProjects = [];
        this.projects.forEach(function (project) {
            var found = 0;
            appliedTags.forEach(function (tag) {
                var tags = project.tags;
                if (tags != null) {
                    if (tags.includes(tag)) {
                        found++;
                    }
                }
            });
            if (found === appliedTags.length) {
                foundProjects.push(project);
            }
        });
        return foundProjects;
    };
    ProjectsComponent.prototype.onSelected = function (project, content) {
        this.router.navigate(['project', project.id]);
    };
    ProjectsComponent.prototype.onTagClicked = function (tag) {
        $('#' + this.formatTagId(tag)).toggleClass('active');
        if (this.appliedTags.includes(tag)) {
            this.appliedTags = this.appliedTags.filter(function (value, index, arr) {
                return value !== tag;
            });
        }
        else {
            this.appliedTags.push(tag);
        }
        this.projectWithAppliedTags = this.getProjectWithAppliedTags();
    };
    ProjectsComponent.prototype.formatTagId = function (tag) {
        return tag.toLowerCase().replace(' ', '').replace('.', 'dot');
    };
    ProjectsComponent.prototype.primaryPictureOf = function (project) {
        if (project.pictures == null) {
            return 'https://res.cloudinary.com/hainayanda/image/upload/v1547995844/project-blank.jpg';
        }
        else if (project.pictures.length === 0) {
            return 'https://res.cloudinary.com/hainayanda/image/upload/v1547995844/project-blank.jpg';
        }
        return project.pictures[0];
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['IProjectService',] }] }
    ]; };
    ProjectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-projects',
            template: _raw_loader_projects_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                { provide: 'IProjectService', useClass: _services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }
            ],
            styles: [_projects_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], Object])
    ], ProjectsComponent);
    return ProjectsComponent;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "8Lko":
/*!*******************************************!*\
  !*** ./src/app/services/about.service.ts ***!
  \*******************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-service */ "ROeJ");
/* harmony import */ var _mock_mock_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/mock-about */ "ogVo");






var AboutService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AboutService, _super);
    function AboutService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.endPoint = _this.serviceUrl + '/about';
        return _this;
    }
    AboutService.prototype.getSkills = function () {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_about__WEBPACK_IMPORTED_MODULE_5__["MOCK_SKILLS"]);
        }
        return this.httpClient.get(this.endPoint + '/skills');
    };
    AboutService.prototype.getAboutPage = function () {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_about__WEBPACK_IMPORTED_MODULE_5__["MOCK_ABOUT"]);
        }
        return this.httpClient.get(this.endPoint + '/page');
    };
    AboutService.prototype.getExperiences = function () {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_about__WEBPACK_IMPORTED_MODULE_5__["MOCK_EXPERIENCE"]);
        }
        return this.httpClient.get(this.endPoint + '/exp');
    };
    AboutService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AboutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AboutService);
    return AboutService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "8vE2":
/*!************************************************************************!*\
  !*** ./src/app/components/project-detail/project-detail.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.project-images-carousel{\n    background-position: center;\n    background-color: #00000000; \n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 1024px;\n    height: 512px;\n}\n\ndiv.carousel{\n    padding-top: 68px;\n    margin-left: auto;\n    margin-right: auto;\n    width: 1024px;\n    min-height: 100%;\n}\n\ndiv.project-description-container{\n    margin-top: 27px;\n    padding: 27px;\n    background-color: var(--color-not-so-dark);\n    text-align: center;\n}\n\ndiv.project-description-container h2{\n    color: var(--color-light)\n}\n\ndiv.project-description-container h5{\n    color: var(--color-light)\n}\n\ndiv.project-description-container p{\n    margin-top: 18px;\n    color: var(--color-light)\n}\n\ndiv.button-container {\n    margin-top: 18px;\n    margin-bottom: 18px;\n}\n\na.button{\n    text-decoration: none;\n    font-size: 21px;\n    font-weight: 300;\n    color: white;\n    padding: 12px 18px;\n    border-radius: 9px;\n    margin-right: 18px;\n    margin-top: 18px;\n    display: inline-block;\n    transition: opacity 200ms linear;\n}\n\na.button:hover{\n    opacity: 0.7;\n    transition: opacity 200ms linear;\n}\n\na.button-gotolink{\n    background-color: var(--color-primary);\n}\n\na.button-back{\n    background-color: var(--color-transparent-light);\n}\n\n@media screen and (max-width: 1024px) {\n    div.project-images-carousel{\n        width: 100%;\n    }\n    \n    div.carousel{\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnByb2plY3QtaW1hZ2VzLWNhcm91c2Vse1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7IFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAxMDI0cHg7XG4gICAgaGVpZ2h0OiA1MTJweDtcbn1cblxuZGl2LmNhcm91c2Vse1xuICAgIHBhZGRpbmctdG9wOiA2OHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAyNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmRpdi5wcm9qZWN0LWRlc2NyaXB0aW9uLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xuICAgIHBhZGRpbmc6IDI3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itbm90LXNvLWRhcmspO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnByb2plY3QtZGVzY3JpcHRpb24tY29udGFpbmVyIGgye1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodClcbn1cblxuZGl2LnByb2plY3QtZGVzY3JpcHRpb24tY29udGFpbmVyIGg1e1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodClcbn1cblxuZGl2LnByb2plY3QtZGVzY3JpcHRpb24tY29udGFpbmVyIHB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpXG59XG5cbmRpdi5idXR0b24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbmEuYnV0dG9ue1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBsaW5lYXI7XG59XG5cbmEuYnV0dG9uOmhvdmVye1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcbn1cblxuYS5idXR0b24tZ290b2xpbmt7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbmEuYnV0dG9uLWJhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdHJhbnNwYXJlbnQtbGlnaHQpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBkaXYucHJvamVjdC1pbWFnZXMtY2Fyb3VzZWx7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICBkaXYuY2Fyb3VzZWx7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AuN9":
/*!***********************************!*\
  !*** ./src/app/models/project.ts ***!
  \***********************************/
/*! exports provided: Project, ProjectTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTag", function() { return ProjectTag; });
var Project = /** @class */ (function () {
    function Project() {
    }
    Object.defineProperty(Project, "placeholder", {
        get: function () {
            var project = new Project();
            project.id = '';
            project.name = 'The Project';
            project.pictures = [];
            project.tags = [];
            project.description = '';
            return project;
        },
        enumerable: false,
        configurable: true
    });
    return Project;
}());

var ProjectTag;
(function (ProjectTag) {
    ProjectTag["iOS"] = "iOS";
    ProjectTag["Android"] = "Android";
    ProjectTag["Net"] = ".Net";
    ProjectTag["Desktop"] = "Desktop";
    ProjectTag["Website"] = "Website";
    ProjectTag["Backend"] = "Back End";
    ProjectTag["IOT"] = "IOT";
    ProjectTag["OpenSource"] = "Open Source";
    ProjectTag["SDK"] = "SDK";
    ProjectTag["Extension"] = "Extension";
})(ProjectTag || (ProjectTag = {}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "B8DR":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n    border-radius: 0%;\n    position: fixed;\n    width: 100%;\n    z-index: 9;\n    font-size: 16px;\n    font-weight: 700;\n    background-color: var(--color-dark);\n    padding-bottom: 10px;\n    min-height: 50px;\n    margin-bottom: 20px;\n    transition: background-color 500ms linear;\n    display: block;\n}\n\n.navbar.scrolled {\n    background-color:var(--color-darker) !important;\n    transition: background-color 500ms linear;\n    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.18);\n}\n\n.nav-image {\n    margin-left: 0px;\n    height: 24px;\n    width: 24px;\n    opacity: 0.8;\n    transition: opacity 200ms linear;\n}\n\n.nav-image:hover {\n    opacity: 1;\n    transition: opacity 200ms linear;\n}\n\n.main-nav {\n    list-style-type: none;\n    display: none;\n}\n\n.nav-links {\n    text-decoration: none;\n    color: var(--color-light);\n    transition: color 200ms linear;\n}\n\n.nav-links.active {\n    color: white;\n    transition: color 200ms linear;\n}\n\n.logo {\n    text-decoration: none;\n    color: var(--color-light)\n}\n\n.main-nav li {\n    text-align: center;\n    margin: auto;\n}\n\n.logo {\n    display: inline-block;\n    font-size: 22px;\n    margin-top: auto;\n    margin-bottom: auto;\n}\n\n.navbar-toggle {\n    position: absolute;\n    right: 18px;\n    float: right;\n    cursor: pointer;\n    color: var(--color-light-grey);\n    font-size: 24px;\n    margin-top: 0px;\n    transition: color 200ms linear;\n}\n\n.navbar-toggle:hover {\n    color: white;\n    transition: color 200ms linear;\n}\n\n.main-nav.active {\n    display: block;\n}\n\n@media screen and (min-width: 768px) {\n\n    .navbar {\n        z-index: 9;\n        position: fixed;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        padding-bottom: 0;\n        height: 45px;\n        align-items: center;\n    }\n\n    .main-nav {\n        display: flex;\n        margin-right: 30px;\n        flex-direction: row;\n        justify-content: flex-start;\n    }\n\n    .main-nav li {\n        margin: 0;\n    }\n\n    .nav-links {\n        margin-left: 40px;\n        transition: color 200ms linear;\n    }\n\n    .logo {\n        margin-top: 0;\n    }\n\n    .navbar-toggle {\n        display: none;\n    }\n\n    .logo:hover,\n\n    .nav-links:hover {\n        color: var(--color-secondary);\n        transition: color 200ms linear;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLHlDQUF5QztJQUN6QywrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsV0FBVztRQUNYLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7OztRQUdJLDZCQUE2QjtRQUM3Qiw4QkFBOEI7SUFDbEM7QUFDSiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGxpbmVhcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hdmJhci5zY3JvbGxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1kYXJrZXIpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBsaW5lYXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5uYXYtaW1hZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcbn1cblxuLm5hdi1pbWFnZTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGxpbmVhcjtcbn1cblxuLm1haW4tbmF2IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hdi1saW5rcyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG4ubmF2LWxpbmtzLmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuLmxvZ28ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpXG59XG5cbi5tYWluLW5hdiBsaSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4ubmF2YmFyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxOHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyZXkpO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG4ubmF2YmFyLXRvZ2dsZTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuLm1haW4tbmF2LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgICAubmF2YmFyIHtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5tYWluLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC5tYWluLW5hdiBsaSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAubmF2LWxpbmtzIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgLm5hdmJhci10b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5sb2dvOmhvdmVyLFxuXG4gICAgLm5hdi1saW5rczpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "0z2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/page */ "PMS6");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BaseComponent */ "lPu9");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/home.service */ "nr5L");
/* harmony import */ var src_app_services_mock_mock_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mock/mock-home */ "m3nk");








var HomeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomeComponent, _super);
    function HomeComponent(homeService) {
        var _this = _super.call(this) || this;
        _this.homeService = homeService;
        _this.page = _models_page__WEBPACK_IMPORTED_MODULE_4__["MainPage"].placeholder;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    HomeComponent.prototype.getPage = function () {
        var _this = this;
        this.homeService.getHomePage().subscribe(function (page) { return _this.page = page; }, function (_) { return _this.page = src_app_services_mock_mock_home__WEBPACK_IMPORTED_MODULE_7__["MOCK_HOME"]; });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['IHomeService',] }] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                { provide: 'IHomeService', useClass: _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"] }
            ],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], HomeComponent);
    return HomeComponent;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_5__["PageComponent"]));



/***/ }),

/***/ "C6Kx":
/*!**************************************************************************************!*\
  !*** ./src/app/components/about/about-other-skills/about-other-skills.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul.other-skills-list {\n    text-align: center;\n    margin-top: 18px;\n    margin-bottom: 45px;\n    margin-left: auto;\n    margin-right: auto;\n    vertical-align: middle;\n}\n\nul.other-skills-list li {\n    display: inline-block;\n    vertical-align: middle;\n    width: 16%;\n}\n\nul.other-skills-list li div {\n    padding: 12px 18px;\n    border-radius: 9px;\n    margin-right: 18px;\n    margin-top: 9px;\n    margin-bottom: 9px;\n    background-color: var(--color-dark);\n    transition: background-color 200ms linear;\n}\n\nul.other-skills-list li div:hover {\n    background-color: var(--color-darker);\n    transition: background-color 200ms linear;\n}\n\nul.other-skills-list li div h6 {\n    align-content: center;\n    color: var(--color-primary);\n    margin-top: 9px;\n    margin-bottom: 9px;\n    transition: color 200ms linear;\n}\n\nul.other-skills-list li div:hover h6 {\n    color: var(--color-secondary);\n    transition: color 200ms linear;\n}\n\ndiv.other-skills-container {\n    width: 100%;\n    margin: 0;\n    padding: 9px;\n    background-color: var(--color-not-so-dark);\n}\n\ndiv.other-skills-container h5 {\n    margin-left: 36px;\n    margin-top: 9px;\n    margin-bottom: 9px;\n    color: var(--color-semi-transparent-light);\n}\n\n@media screen and (max-width: 768px) {\n    ul.other-skills-list li {\n        width: 50%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW90aGVyLXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoiYWJvdXQtb3RoZXItc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bC5vdGhlci1za2lsbHMtbGlzdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxudWwub3RoZXItc2tpbGxzLWxpc3QgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAxNiU7XG59XG5cbnVsLm90aGVyLXNraWxscy1saXN0IGxpIGRpdiB7XG4gICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxudWwub3RoZXItc2tpbGxzLWxpc3QgbGkgZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYXJrZXIpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG51bC5vdGhlci1za2lsbHMtbGlzdCBsaSBkaXYgaDYge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDlweDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG59XG5cbnVsLm90aGVyLXNraWxscy1saXN0IGxpIGRpdjpob3ZlciBoNiB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG5kaXYub3RoZXItc2tpbGxzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ub3Qtc28tZGFyayk7XG59XG5cbmRpdi5vdGhlci1za2lsbHMtY29udGFpbmVyIGg1IHtcbiAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZW1pLXRyYW5zcGFyZW50LWxpZ2h0KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB1bC5vdGhlci1za2lsbHMtbGlzdCBsaSB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "D8Mh":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "spuZ");
/* harmony import */ var _nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component.css */ "B8DR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_external_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/external.links */ "/Hkw");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/page.service */ "fsaK");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_mock_mock_external_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mock/mock-external-links */ "O+XM");








var NavComponent = /** @class */ (function () {
    function NavComponent(pageService) {
        this.pageService = pageService;
        this.externalLinks = new _models_external_links__WEBPACK_IMPORTED_MODULE_4__["ExternalLinks"]();
    }
    NavComponent.prototype.ngOnInit = function () {
        this.getExternalLinks();
        jquery__WEBPACK_IMPORTED_MODULE_6__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_6__(document).on('scroll', function () {
                var $nav = jquery__WEBPACK_IMPORTED_MODULE_6__('.navbar');
                jquery__WEBPACK_IMPORTED_MODULE_6__('#js-menu').removeClass('active');
                $nav.toggleClass('scrolled', jquery__WEBPACK_IMPORTED_MODULE_6__(document).scrollTop() > $nav.height());
            });
        });
    };
    NavComponent.prototype.onNavMenuClicked = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__('#js-menu').toggleClass('active');
    };
    NavComponent.prototype.getExternalLinks = function () {
        var _this = this;
        this.pageService.getExternalLinks().subscribe(function (externalLinks) { return _this.externalLinks = externalLinks; }, function (_) { return _this.externalLinks = src_app_services_mock_mock_external_links__WEBPACK_IMPORTED_MODULE_7__["MOCK_EXTERNAL_LINKS"]; });
    };
    NavComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['IPageService',] }] }
    ]; };
    NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-nav',
            template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                { provide: 'IPageService', useClass: _services_page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"] }
            ],
            styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "E8xG":
/*!***********************************************************************************!*\
  !*** ./src/app/components/about/about-experiences/about-experiences.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AboutExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutExperiencesComponent", function() { return AboutExperiencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_experiences_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-experiences.component.html */ "v5q6");
/* harmony import */ var _about_experiences_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-experiences.component.css */ "fYVL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/about.service */ "8Lko");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BaseComponent */ "lPu9");
/* harmony import */ var src_app_services_mock_mock_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mock/mock-about */ "ogVo");








var middleMargin = 27;
var outerPadding = 36;
var AboutExperiencesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AboutExperiencesComponent, _super);
    function AboutExperiencesComponent(aboutService) {
        var _this = _super.call(this) || this;
        _this.aboutService = aboutService;
        _this.experiences = [];
        _this.onResize();
        return _this;
    }
    AboutExperiencesComponent.prototype.ngOnInit = function () {
        this.getExperiences();
    };
    AboutExperiencesComponent.prototype.onResize = function (event) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        jquery__WEBPACK_IMPORTED_MODULE_5__('div.experience').css('width', this.cellWidth());
    };
    AboutExperiencesComponent.prototype.cellWidth = function () {
        var outerPaddings = outerPadding * 2;
        if (this.scrWidth < 900) {
            var cellWidht = this.scrWidth - outerPaddings - 10;
            return cellWidht + 'px';
        }
        var cellWidth = ((this.scrWidth - outerPaddings - middleMargin) / 2) - 10;
        return cellWidth + 'px';
    };
    AboutExperiencesComponent.prototype.marginRightAt = function (index) {
        if (this.scrWidth < 900) {
            return '0px';
        }
        if (index % 2 === 0) {
            return middleMargin + 'px';
        }
        return '0px';
    };
    AboutExperiencesComponent.prototype.getExperiences = function () {
        var _this = this;
        this.aboutService.getExperiences().subscribe(function (experiences) {
            experiences.sort(function (a, b) {
                return b.startDate - a.startDate;
            });
            _this.experiences = experiences;
        }, function (_) { return _this.experiences = src_app_services_mock_mock_about__WEBPACK_IMPORTED_MODULE_7__["MOCK_EXPERIENCE"]; });
    };
    AboutExperiencesComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['IAboutService',] }] }
    ]; };
    AboutExperiencesComponent.propDecorators = {
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
    };
    AboutExperiencesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about-experiences',
            template: _raw_loader_about_experiences_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                { provide: 'IAboutService', useClass: _services_about_service__WEBPACK_IMPORTED_MODULE_4__["AboutService"] }
            ],
            styles: [_about_experiences_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], AboutExperiencesComponent);
    return AboutExperiencesComponent;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ "E9vc":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-header-bg\"></div>\n<div class=\"about-header\">\n  <div class=\"about-row\">\n    <div class=\"about-content-container\">\n      <h1 class=\"about boldest line-breaker\">\n        {{mainPage.title}}\n      </h1>\n      <h3 class=\"about semi-bold line-breaker\">\n        {{mainPage.subtitle}}\n      </h3>\n      <p class=\"big semi-bold about about-p line-breaker\">\n        {{mainPage.paragraph}}\n      </p>\n    </div>\n    <div>\n      <a class=\"button button-project\" routerLink=\"/projects\">\n        My Projects\n        <i class=\"button-r-arrow fas fa-caret-right\"></i>\n      </a>\n      <a class=\"button button-contact\" id=\"contact-me\" (click)=\"onContactMeClicked()\">\n        Contact Me\n        <i class=\"button-r-arrow fas fa-caret-right\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n<app-about-skills [title]=\"skills.title\" [description]=\"skills.description\" [skills]=\"skills.skills\"></app-about-skills>\n<app-about-dev-skills [skills]=\"skills.devSkills\"></app-about-dev-skills>\n<app-about-other-skills [skills]=\"skills.otherSkills\"></app-about-other-skills>\n<app-about-experiences></app-about-experiences>");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.footer {\n    background-color: var(--color-darker);\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    width: 100%;\n    padding-top: 18px;\n    padding-bottom: 18px;\n    display: flex;\n    box-shadow: 0px -2px 2px 1px rgba(0, 0, 0, 0.18);\n}\n\ndiv.footer div {\n    display: inline-block;\n    vertical-align: middle;\n}\n\ndiv.footer-text-container {\n    width: 72%;\n    padding: 9px 45px 9px;\n}\n\ndiv.footer-icon-container {\n    margin: auto 45px auto auto;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n\n.icon-footer {\n    display: flex;\n    align-self: flex-start;\n    list-style-type: none;\n}\n\n.icon-footer li {\n    margin: 27px;\n    float: left;\n    display: block;\n    text-align: center;\n}\n\n.footer-links {\n    text-decoration: none;\n    color: var(--color-primary);\n    transition: color 200ms linear;\n}\n\n.footer-links:hover {\n    color: var(--color-secondary);\n    transition: color 200ms linear;\n}\n\nh6.footer{\n    color: white;\n}\n\np.footer{\n    margin-top: 18px;\n    font-size: 16px;\n    color: var(--color-semi-transparent-light);\n}\n\nh6.phone-number{\n    margin-top: 9px;\n    font-size: 16px;\n    color: var(--color-semi-transparent-light);\n    \n}\n\n@media screen and (max-width: 900px) {\n\n    div.footer-icon-container {\n        margin: auto 45px auto auto;\n        width: -webkit-fit-content;\n        width: -moz-fit-content;\n        width: fit-content;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n    }\n\n    .icon-footer {\n        display: table;\n        list-style-type: none;\n    }\n\n    .icon-footer li {\n        margin: 12px;\n        float: none;\n    }\n\n    div.footer-text-container {\n        width: 81%;\n        padding: 9px 45px 9px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLCtCQUF1QjtJQUF2Qiw0QkFBdUI7SUFBdkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZiwwQ0FBMEM7O0FBRTlDOztBQUVBOztJQUVJO1FBQ0ksMkJBQTJCO1FBQzNCLDBCQUFrQjtRQUFsQix1QkFBa0I7UUFBbEIsa0JBQWtCO1FBQ2xCLDJCQUFtQjtRQUFuQix3QkFBbUI7UUFBbkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksY0FBYztRQUNkLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYXJrZXIpO1xuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG5kaXYuZm9vdGVyIGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmRpdi5mb290ZXItdGV4dC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3MiU7XG4gICAgcGFkZGluZzogOXB4IDQ1cHggOXB4O1xufVxuXG5kaXYuZm9vdGVyLWljb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG8gNDVweCBhdXRvIGF1dG87XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5pY29uLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmljb24tZm9vdGVyIGxpIHtcbiAgICBtYXJnaW46IDI3cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyLWxpbmtzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuLmZvb3Rlci1saW5rczpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG5oNi5mb290ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5wLmZvb3RlcntcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2VtaS10cmFuc3BhcmVudC1saWdodCk7XG59XG5cbmg2LnBob25lLW51bWJlcntcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZW1pLXRyYW5zcGFyZW50LWxpZ2h0KTtcbiAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcblxuICAgIGRpdi5mb290ZXItaWNvbi1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IGF1dG8gNDVweCBhdXRvIGF1dG87XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB9XG5cbiAgICAuaWNvbi1mb290ZXIge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIH1cblxuICAgIC5pY29uLWZvb3RlciBsaSB7XG4gICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuXG4gICAgZGl2LmZvb3Rlci10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA4MSU7XG4gICAgICAgIHBhZGRpbmc6IDlweCA0NXB4IDlweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "KAVU":
/*!************************************************!*\
  !*** ./src/app/services/mock/mock-projects.ts ***!
  \************************************************/
/*! exports provided: MOCK_PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_PROJECTS", function() { return MOCK_PROJECTS; });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/project */ "AuN9");

var MOCK_PROJECTS = [
    {
        id: '1',
        name: 'Hai Nayanda Web',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548086452/n-logo.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548095243/hainayanda-1.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548095246/hainayanda-2.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548095241/hainayanda-3.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Website, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2018, 11).getTime(),
        endDate: null,
        description: 'This web, offcourse. Using Angular and Node JS.',
        link: null
    },
    {
        id: '2',
        name: 'Topaz Android',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548091570/topaz-a-logo.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136899/topaz-a-1.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136911/topaz-a-2.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136902/topaz-a-3.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136912/topaz-a-5.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136906/topaz-a-4.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Android, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK],
        startedDate: new Date(2018, 11).getTime(),
        endDate: new Date(2019, 0).getTime(),
        description: 'Agate Studio project. Android SDK to show web view on top of screen with side menu, transparency bar and language selector. It can transform into draggable floating button if minimized',
        link: null
    },
    {
        id: '3',
        name: 'Topaz iOS',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548090182/topaz-i-logo.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136903/topaz-i-1.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136905/topaz-i-2.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136909/topaz-3.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136911/topaz-i-3.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548136905/topaz-i-4.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].iOS, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK],
        startedDate: new Date(2018, 11).getTime(),
        endDate: new Date(2019, 0).getTime(),
        description: 'Agate Studio project. iOS SDK to show web view on top of screen with side menu, transparency bar and language selector. It can transform into draggable floating button if minimized',
        link: null
    },
    {
        id: '4',
        name: 'iOS Nativefier',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548091569/ios-nat-logo.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].iOS, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2018, 7).getTime(),
        endDate: null,
        description: 'iOS Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.',
        link: 'https://github.com/nayanda1/iOSNativefier'
    },
    {
        id: '5',
        name: 'Droid Nativefier',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548091569/droid-nat-logo.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Android, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2018, 2).getTime(),
        endDate: null,
        description: 'Android Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.',
        link: 'https://github.com/nayanda1/DroidNativefier'
    },
    {
        id: '6',
        name: 'Net Nativefier',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548091569/net-nat-logo.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Net, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2018, 7).getTime(),
        endDate: null,
        description: '.Net Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.',
        link: 'https://github.com/nayanda1/NetNativefier'
    },
    {
        id: '7',
        name: 'iOS Eatr',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548086667/ios-logo.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].iOS, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2018, 1).getTime(),
        endDate: null,
        description: 'iOS Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.',
        link: 'https://github.com/nayanda1/iOSEatr'
    },
    {
        id: '8',
        name: 'Droid Eatr',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548086658/droid-logo.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Android, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2017, 11).getTime(),
        endDate: null,
        description: 'Android Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.',
        link: 'https://github.com/nayanda1/DroidEatr'
    },
    {
        id: '9',
        name: 'Net Eatr',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548086471/net-logo.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Net, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2018, 1).getTime(),
        endDate: null,
        description: '.Net Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.',
        link: 'https://github.com/nayanda1/NetEatr'
    },
    {
        id: '10',
        name: 'Catcher',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548086867/catcher_logo.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Net, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].SDK, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2017, 9).getTime(),
        endDate: null,
        description: 'CosmosDB Based with MongoDB Interface, with generic DAO Design Pattern for .NET Framework with C# Language.',
        link: 'https://github.com/catchid/catcher'
    },
    {
        id: '11',
        name: 'RobotF-Extension',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548088369/robot-logo.png',
            'https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/smart-keyword-autocomplete.png',
            'https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/smart-resource-autocomplete.png',
            'https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/smart-variable-autocomplete.png',
            'https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/reference-provider.png',
            'https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/keyword-definition.png',
            'https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/variable-definition.png',
            'https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/keyword-rename.png',
            'https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/variable-rename.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Desktop, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Extension, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2017, 3).getTime(),
        endDate: new Date(2017, 10).getTime(),
        description: 'Visual Studio Code extension for robot framework. this extension is still in its early stage but its fully functional. This Extension was created for internal use for Test Engineer at KMK-Labs, but published into Visual Studio Code Extension Marketplace for everyone to use',
        link: 'https://github.com/KMK-ONLINE/vscode-robotExtension'
    },
    {
        id: '12',
        name: 'Carrier',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548088663/carrier-logo.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548135407/2018-09-10_5.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548135407/2018-09-10_1.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548135408/2018-09-10_2.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548135408/2018-09-10_3.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548135408/2018-09-10_4.png'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Android, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].OpenSource],
        startedDate: new Date(2018, 2).getTime(),
        endDate: new Date(2018, 4).getTime(),
        description: 'Prototype android app for Pertamina Hackathon. This is the app to get the list of addresses to deliver for the driver. it will calculate the fastest route and which addresses needed to deliver first',
        link: 'https://github.com/nayanda1/shipping-manager'
    },
    {
        id: '13',
        name: 'Speaker Recognition',
        pictures: [
            'https://res.cloudinary.com/hainayanda/image/upload/v1548091569/speak-rec-logo.png',
            'https://res.cloudinary.com/hainayanda/image/upload/v1548135608/small.jpg'
        ],
        tags: [_models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].IOT, _models_project__WEBPACK_IMPORTED_MODULE_0__["ProjectTag"].Android],
        startedDate: new Date(2016, 6).getTime(),
        endDate: new Date(2017, 0).getTime(),
        description: 'My Thesis, programs that can learn human\'s voice\'s signatures and verifying it. The program is based on LPC (Linear Predictive Coefficient) and MFCC (Mel-frequency Cepstral Coefficients) algorithm. ',
        link: 'https://comp-eng.binus.ac.id/2017/03/22/kontroller-rumah-terintegrasi-dengan-pengenalan-google-voice-lpc-speaker/'
    },
];


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/page */ "PMS6");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/page.service */ "fsaK");
/* harmony import */ var _models_external_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/external.links */ "/Hkw");
/* harmony import */ var src_app_services_mock_mock_external_links__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mock/mock-external-links */ "O+XM");








var FooterComponent = /** @class */ (function () {
    function FooterComponent(pageService) {
        this.pageService = pageService;
        this.footer = _models_page__WEBPACK_IMPORTED_MODULE_4__["FooterPage"].placeholder;
        this.externalLinks = new _models_external_links__WEBPACK_IMPORTED_MODULE_6__["ExternalLinks"]();
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    FooterComponent.prototype.getPage = function () {
        var _this = this;
        this.pageService.getFooter().subscribe(function (footer) { return _this.footer = footer; }, function (_) { return _this.footer = src_app_services_mock_mock_external_links__WEBPACK_IMPORTED_MODULE_7__["MOCK_FOOTER"]; });
        this.pageService.getExternalLinks().subscribe(function (externalLinks) { return _this.externalLinks = externalLinks; }, function (_) { return _this.externalLinks = src_app_services_mock_mock_external_links__WEBPACK_IMPORTED_MODULE_7__["MOCK_EXTERNAL_LINKS"]; });
    };
    FooterComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['IPageService',] }] }
    ]; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                { provide: 'IPageService', useClass: _services_page_service__WEBPACK_IMPORTED_MODULE_5__["PageService"] }
            ],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "MckL":
/*!**************************************************************************!*\
  !*** ./src/app/components/about/about-skills/about-skills.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.skills-container {\n    width: 100%;\n    margin-top: 0px !important;\n    display: flex;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    background-color: var(--color-darker)\n}\n\ndiv.skills-list-container {\n    width: 50%;\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    padding: 73px 73px 73px 73px;\n    background-color: var(--color-not-so-dark)\n}\n\ndiv.skills-paragraph-container {\n    width: 50%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 54px 45px 90px 45px;\n    background-color: var(--color-darker)\n}\n\np.skills-p{\n    color: var(--color-light);\n    font-size: 18px;\n    font-weight: 300;\n    padding: 24px\n}\n\nul.skills-list{\n    list-style-type: none;\n}\n\nul.skills-list li{\n    margin: 27px\n}\n\ndiv.progress-bar {\n    background-color: var(--color-primary) !important;\n}\n\ndiv.progress{\n    background-color: var(--color-darker) !important;\n    border-radius: 10px;\n}\n\nh5.skills-title{\n    color: var(--color-semi-transparent-light);\n    padding: 24px;\n}\n\nh6.skills{\n    color: var(--color-semi-transparent-light);\n}\n\n@media screen and (max-width: 768px) {\n    div.skills-container{\n        display: table-cell;\n    }\n\n    div.skills-list-container {\n        width: 100%;\n    }\n    \n    div.skills-paragraph-container {\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDViwrQkFBdUI7SUFBdkIsNEJBQXVCO0lBQXZCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDViwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJhYm91dC1za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5za2lsbHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFya2VyKVxufVxuXG5kaXYuc2tpbGxzLWxpc3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDczcHggNzNweCA3M3B4IDczcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itbm90LXNvLWRhcmspXG59XG5cbmRpdi5za2lsbHMtcGFyYWdyYXBoLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDU0cHggNDVweCA5MHB4IDQ1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFya2VyKVxufVxuXG5wLnNraWxscy1we1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZzogMjRweFxufVxuXG51bC5za2lsbHMtbGlzdHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbnVsLnNraWxscy1saXN0IGxpe1xuICAgIG1hcmdpbjogMjdweFxufVxuXG5kaXYucHJvZ3Jlc3MtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5kaXYucHJvZ3Jlc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFya2VyKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmg1LnNraWxscy10aXRsZXtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2VtaS10cmFuc3BhcmVudC1saWdodCk7XG4gICAgcGFkZGluZzogMjRweDtcbn1cblxuaDYuc2tpbGxze1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZW1pLXRyYW5zcGFyZW50LWxpZ2h0KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXYuc2tpbGxzLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB9XG5cbiAgICBkaXYuc2tpbGxzLWxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIGRpdi5za2lsbHMtcGFyYWdyYXBoLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "O+XM":
/*!******************************************************!*\
  !*** ./src/app/services/mock/mock-external-links.ts ***!
  \******************************************************/
/*! exports provided: MOCK_EXTERNAL_LINKS, MOCK_FOOTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_EXTERNAL_LINKS", function() { return MOCK_EXTERNAL_LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_FOOTER", function() { return MOCK_FOOTER; });
var MOCK_EXTERNAL_LINKS = {
    github: 'https://github.com/nayanda1',
    linkedin: 'https://www.linkedin.com/in/nayanda/',
    email: 'mailto:nayanda1@outlook.com'
};
var MOCK_FOOTER = {
    title: 'Contact Me',
    paragraph: 'I\'m currently open for any projects. Would you like to discuss yours? Feel free to contact me through this below phone number and my personal email.',
    phoneNumber: '+628576500763',
    email: 'nayanda1@outlook.com'
};


/***/ }),

/***/ "PMS6":
/*!********************************!*\
  !*** ./src/app/models/page.ts ***!
  \********************************/
/*! exports provided: Page, MainPage, FooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPage", function() { return FooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

var Page = /** @class */ (function () {
    function Page() {
    }
    Object.defineProperty(Page, "placeholder", {
        get: function () {
            var page = new Page();
            page.title = "This is title";
            page.paragraph = "";
            return page;
        },
        enumerable: false,
        configurable: true
    });
    return Page;
}());

var MainPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MainPage, _super);
    function MainPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MainPage, "placeholder", {
        get: function () {
            var page = new MainPage();
            page.title = "This is title";
            page.paragraph = "";
            page.subtitle = "This is subtitle";
            return page;
        },
        enumerable: false,
        configurable: true
    });
    return MainPage;
}(Page));

var FooterPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FooterPage, _super);
    function FooterPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FooterPage, "placeholder", {
        get: function () {
            var page = new FooterPage();
            page.title = "This is title";
            page.paragraph = "";
            page.email = "";
            page.phoneNumber = "";
            return page;
        },
        enumerable: false,
        configurable: true
    });
    return FooterPage;
}(Page));



/***/ }),

/***/ "QC2F":
/*!*************************************************************************!*\
  !*** ./src/app/components/about/about-skills/about-skills.component.ts ***!
  \*************************************************************************/
/*! exports provided: AboutSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSkillsComponent", function() { return AboutSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_skills_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-skills.component.html */ "u5qf");
/* harmony import */ var _about_skills_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-skills.component.css */ "MckL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AboutSkillsComponent = /** @class */ (function () {
    function AboutSkillsComponent() {
    }
    AboutSkillsComponent.prototype.ngOnInit = function () {
    };
    AboutSkillsComponent.ctorParameters = function () { return []; };
    AboutSkillsComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        skills: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    AboutSkillsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about-skills',
            template: _raw_loader_about_skills_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_about_skills_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AboutSkillsComponent);
    return AboutSkillsComponent;
}());



/***/ }),

/***/ "ROeJ":
/*!******************************************!*\
  !*** ./src/app/services/base-service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
var BaseService = /** @class */ (function () {
    function BaseService() {
        this.serviceUrl = 'https://nayandah.com/api/v1';
    }
    return BaseService;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = window.location.pathname;
        if (path == null || path === '' || path === '/') {
            path = 'home';
        }
        this.router.navigate([path]).then(function (data) {
            console.log('Route exists, redirection is done');
        }).catch(function (e) {
            _this.router.navigate(['home']);
        });
    };
    AppComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<main>\n    <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\" id=\"footer\">\n  <div class=\"footer-text-container\">\n    <h6 class=\"semi-bold footer\">{{footer.title}}</h6>\n    <p class=\"footer regular\">{{footer.paragraph}}</p>\n    <h6 class=\"phone-number regular\">WhatsApp or message me to {{footer.phoneNumber}}</h6>\n  </div>\n  <div class=\"footer-icon-container\">\n    <ul class=\"icon-footer\">\n      <li>\n        <a [attr.href]=\"externalLinks.linkedin\" class=\"footer-links\" target=\"_blank\">\n          <i class=\"fab fa-linkedin-in fa-2x\"></i>\n        </a>\n      </li>\n      <li>\n        <a [attr.href]=\"externalLinks.github\" class=\"footer-links\" target=\"_blank\">\n          <i class=\"fab fa-github fa-2x\"></i>\n        </a>\n      </li>\n      <li>\n        <a [attr.href]=\"externalLinks.email\" class=\"footer-links\" target=\"_blank\">\n          <i class=\"fas fa-envelope fa-2x\"></i>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>");

/***/ }),

/***/ "YPsz":
/*!*************************************************************************************!*\
  !*** ./src/app/components/about/about-other-skills/about-other-skills.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AboutOtherSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutOtherSkillsComponent", function() { return AboutOtherSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_other_skills_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-other-skills.component.html */ "xLnn");
/* harmony import */ var _about_other_skills_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-other-skills.component.css */ "C6Kx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AboutOtherSkillsComponent = /** @class */ (function () {
    function AboutOtherSkillsComponent() {
    }
    AboutOtherSkillsComponent.prototype.ngOnInit = function () {
    };
    AboutOtherSkillsComponent.ctorParameters = function () { return []; };
    AboutOtherSkillsComponent.propDecorators = {
        skills: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    AboutOtherSkillsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about-other-skills',
            template: _raw_loader_about_other_skills_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_about_other_skills_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AboutOtherSkillsComponent);
    return AboutOtherSkillsComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nguniversal/common */ "rsbC");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav/nav.component */ "D8Mh");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/projects/projects.component */ "6bE9");
/* harmony import */ var _components_about_about_experiences_about_experiences_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about-experiences/about-experiences.component */ "E8xG");
/* harmony import */ var _components_about_about_skills_about_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about-skills/about-skills.component */ "QC2F");
/* harmony import */ var _components_about_about_dev_skills_about_dev_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about-dev-skills/about-dev-skills.component */ "sjzp");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _components_about_about_other_skills_about_other_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/about-other-skills/about-other-skills.component */ "YPsz");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/project-detail/project-detail.component */ "vmno");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _components_about_about_experiences_about_experiences_component__WEBPACK_IMPORTED_MODULE_10__["AboutExperiencesComponent"],
                _components_about_about_skills_about_skills_component__WEBPACK_IMPORTED_MODULE_11__["AboutSkillsComponent"],
                _components_about_about_dev_skills_about_dev_skills_component__WEBPACK_IMPORTED_MODULE_12__["AboutDevSkillsComponent"],
                _components_about_about_other_skills_about_other_skills_component__WEBPACK_IMPORTED_MODULE_14__["AboutOtherSkillsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProjectDetailComponent"]
            ],
            imports: [
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__["TransferHttpCacheModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbCarouselModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_13__["NgCircleProgressModule"].forRoot({
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: '#78C000',
                    innerStrokeColor: '#C7E596',
                    animationDuration: 300
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aggk":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"projects-container\">\n  <div class=\"projects-header\">\n    <h1 class=\"text-header\">My Project</h1>\n    <p class=\"text-header\">\n      Here are some of my self projects portfolio.\n      <br>Not including team project from office.\n      <br>All of them mostly if not all are developed by myself.\n      <br>Click any of them to see more about the project.\n    </p>\n  </div>\n  <div class=\"project-tags\">\n    <ul>\n      <li *ngFor=\"let tag of tags\">\n        <div [id]=\"formatTagId(tag)\" (click)=\"onTagClicked(tag)\">\n          <h6 class=\"regular smaller\">\n            {{tag}}\n          </h6>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"separator\"></div>\n  <div class=\"projects\">\n    <div *ngFor=\"let project of projectWithAppliedTags\" class=\"project-container\">\n      <div class=\"project\" (click)=\"onSelected(project, content)\">\n        <img [src]=\"primaryPictureOf(project)\" class=\"project-primary-photo\">\n        <h6 class=\"semi-bold\">{{project.name}}</h6>\n        <h6 class=\"regular smaller\">{{formatDate(project.startedDate)}} - {{formatDate(project.endDate)}}</h6>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "c3AT":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-service */ "ROeJ");
/* harmony import */ var _mock_mock_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/mock-projects */ "KAVU");






var ProjectService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProjectService, _super);
    function ProjectService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.endPoint = _this.serviceUrl + '/project';
        return _this;
    }
    ProjectService.prototype.getProjects = function () {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_projects__WEBPACK_IMPORTED_MODULE_5__["MOCK_PROJECTS"].sort(function (a, b) {
                return (b.startedDate - a.startedDate);
            }));
        }
        return this.httpClient.get(this.endPoint + '/all');
    };
    ProjectService.prototype.getProjectBy = function (id) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_projects__WEBPACK_IMPORTED_MODULE_5__["MOCK_PROJECTS"].find(function (project) { return project.id == id; }));
        }
        return this.httpClient.get(this.endPoint + '/' + id);
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ProjectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "fYVL":
/*!************************************************************************************!*\
  !*** ./src/app/components/about/about-experiences/about-experiences.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".experiences-container{\n    background-color: var(--color-not-so-dark);\n    margin: 0;\n    display: table;\n    width: 100%;\n    padding: 36px;\n}\n\nh6.experiences-title{\n    color: var(--color-semi-transparent-light)\n}\n\ndiv.experiences-list{\n    width: 100%;\n    vertical-align: middle;\n}\n\ndiv.experience:hover {\n    background-color: var(--color-darker);\n    transition: background-color 200ms linear;\n}\n\ndiv.experience {\n    display: flex;\n    float: left;\n    padding: 18px 18px 36px 18px;\n    margin-top: 18px;\n    background-color: var(--color-dark);\n    border-radius: 18px;\n    transition: background-color 200ms linear;\n}\n\ndiv.company-photo {\n    width: 90px;\n    height: 90px;\n    margin: 27px;\n}\n\ndiv.company-photo img {\n    width: 90px;\n    height: 90px;\n}\n\ndiv.experience-description {\n    padding-left: 18px;\n}\n\n.experience-description h3 {\n    font-size: 24px;\n    font-weight: 700;\n    color: var(--color-light)\n}\n\n.experience-description h4 {\n    font-size: 20px;\n    font-weight: 400;\n    color: var(--color-light)\n}\n\n.experience-description h5 {\n    font-size: 14px;\n    font-weight: 300;\n    color: var(--color-light)\n}\n\n@media screen and (max-width: 900px) {\n    div.company-photo {\n        width: 64px;\n        height: 64px;\n        margin: 18px;\n    }\n\n    div.company-photo img {\n        width: 64px;\n        height: 64px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWV4cGVyaWVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsU0FBUztJQUNULGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6ImFib3V0LWV4cGVyaWVuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZXMtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5vdC1zby1kYXJrKTtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzZweDtcbn1cblxuaDYuZXhwZXJpZW5jZXMtdGl0bGV7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlbWktdHJhbnNwYXJlbnQtbGlnaHQpXG59XG5cbmRpdi5leHBlcmllbmNlcy1saXN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmRpdi5leHBlcmllbmNlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYXJrZXIpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG5kaXYuZXhwZXJpZW5jZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxOHB4IDE4cHggMzZweCAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuZGl2LmNvbXBhbnktcGhvdG8ge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBtYXJnaW46IDI3cHg7XG59XG5cbmRpdi5jb21wYW55LXBob3RvIGltZyB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xufVxuXG5kaXYuZXhwZXJpZW5jZS1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xufVxuXG4uZXhwZXJpZW5jZS1kZXNjcmlwdGlvbiBoMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KVxufVxuXG4uZXhwZXJpZW5jZS1kZXNjcmlwdGlvbiBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KVxufVxuXG4uZXhwZXJpZW5jZS1kZXNjcmlwdGlvbiBoNSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGRpdi5jb21wYW55LXBob3RvIHtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAxOHB4O1xuICAgIH1cblxuICAgIGRpdi5jb21wYW55LXBob3RvIGltZyB7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "fsaK":
/*!******************************************!*\
  !*** ./src/app/services/page.service.ts ***!
  \******************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-service */ "ROeJ");
/* harmony import */ var _mock_mock_external_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/mock-external-links */ "O+XM");






var PageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageService, _super);
    function PageService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.endPoint = _this.serviceUrl + '/page';
        return _this;
    }
    PageService.prototype.getFooter = function () {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_external_links__WEBPACK_IMPORTED_MODULE_5__["MOCK_FOOTER"]);
        }
        return this.httpClient.get(this.endPoint + '/footer');
    };
    PageService.prototype.getExternalLinks = function () {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_external_links__WEBPACK_IMPORTED_MODULE_5__["MOCK_EXTERNAL_LINKS"]);
        }
        return this.httpClient.get(this.endPoint + '/extlinks');
    };
    PageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    PageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PageService);
    return PageService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "hA4Z":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.projects-container {\n    top: 0px;\n    left: 0px;\n    min-height: 100%;\n    width: 100%;\n    background-color: var(--color-not-so-dark);\n}\n\ndiv.projects-header {\n    padding: 90px 36px 36px 36px;\n}\n\ndiv.project-tags {\n    padding: 36px 36px 0px 36px;\n}\n\n.text-header {\n    color: white;\n}\n\n.projects-header h1.text-header {\n    font-size: 54px;\n    font-weight: 700;\n    text-align: center\n}\n\n.projects-header p.text-header {\n    font-size: 18px;\n    font-weight: 300;\n    text-align: center\n}\n\n.projects-header {\n    padding: 45px\n}\n\ndiv.project-tags ul {\n    text-align: center;\n    margin-top: 18px;\n    margin-bottom: 45px;\n}\n\ndiv.project-tags ul li {\n    display: inline-block;\n    vertical-align: middle;\n    width: 10%;\n}\n\ndiv.project-tags ul li div {\n    padding: 12px 18px;\n    border-radius: 9px;\n    margin-right: 18px;\n    margin-top: 9px;\n    margin-bottom: 9px;\n    background-color: var(--color-dark);\n    transition: background-color 200ms linear;\n}\n\ndiv.project-tags ul li div:hover {\n    background-color: var(--color-darker);\n    box-shadow: -1px 2px 2px 1px rgba(0, 0, 0, 0.18);\n    transition: background-color 200ms linear;\n}\n\ndiv.project-tags ul li div.active {\n    background-color: var(--color-primary);\n    transition: background-color 200ms linear;\n}\n\ndiv.project-tags ul li div h6 {\n    align-content: center;\n    color: var(--color-light);\n    margin-top: 5px;\n    margin-bottom: 5px;\n    transition: color 200ms linear;\n}\n\ndiv.project-tags ul li div:hover h6 {\n    color: white;\n    transition: color 200ms linear;\n}\n\ndiv.project-tags ul li div.active h6 {\n    color: white;\n    font-weight: 700;\n    transition: color 200ms linear;\n}\n\ndiv.projects {\n    width: 100%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 36px;\n    display: table;\n    vertical-align: middle;\n}\n\ndiv.project-container {\n    display: table-cell;\n    float: left;\n    width: 16.66%;\n    height: auto;\n    padding: 0px;\n}\n\ndiv.project {\n    max-width: 100%;\n    min-width: 90%;\n    margin: 9px;\n    background-color: var(--color-dark);\n    padding: 18px;\n    border-radius: 9px;\n    transition: background-color 200ms linear;\n}\n\ndiv.project h5 {\n    line-height: 90%;\n    color: var(--color-light);\n    transition: color 200ms linear;\n}\n\ndiv.project h6 {\n    line-height: 100%;\n    margin-top: 9px;\n    color: var(--color-semi-transparent-light);\n    transition: color 200ms linear;\n}\n\ndiv.project:hover h5 {\n    color: white;\n    transition: color 200ms linear;\n}\n\ndiv.project:hover h6 {\n    color: white;\n    transition: color 200ms linear;\n}\n\ndiv.project:hover {\n    background-color: var(--color-darker);\n    box-shadow: -1px 2px 2px 1px rgba(0, 0, 0, 0.18);\n    transition: background-color 200ms linear;\n}\n\n.project-primary-photo {\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 4.5px;\n}\n\ndiv.modal {\n    display: none;\n    position: absolute;\n    z-index: 10;\n    left: 0;\n    top: 0;\n    max-width: 100%;\n    max-height: 100%;\n    padding: 36px;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\n@media screen and (max-width: 900px) {\n    div.project-tags ul li {\n        display: inline-block;\n        vertical-align: middle;\n        width: 50%;\n    }\n    div.project {\n        padding: 12px;\n        min-height: 225px;\n    }\n    div.project-container {\n        width: 50%;\n    }\n    div.projects {\n        padding: 27px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdEQUFnRDtJQUNoRCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxnREFBZ0Q7SUFDaEQseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsTUFBTTtJQUNOLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ub3Qtc28tZGFyayk7XG59XG5cbmRpdi5wcm9qZWN0cy1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDkwcHggMzZweCAzNnB4IDM2cHg7XG59XG5cbmRpdi5wcm9qZWN0LXRhZ3Mge1xuICAgIHBhZGRpbmc6IDM2cHggMzZweCAwcHggMzZweDtcbn1cblxuLnRleHQtaGVhZGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0cy1oZWFkZXIgaDEudGV4dC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4ucHJvamVjdHMtaGVhZGVyIHAudGV4dC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4ucHJvamVjdHMtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA0NXB4XG59XG5cbmRpdi5wcm9qZWN0LXRhZ3MgdWwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG5cbmRpdi5wcm9qZWN0LXRhZ3MgdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAxMCU7XG59XG5cbmRpdi5wcm9qZWN0LXRhZ3MgdWwgbGkgZGl2IHtcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG5kaXYucHJvamVjdC10YWdzIHVsIGxpIGRpdjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFya2VyKTtcbiAgICBib3gtc2hhZG93OiAtMXB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG59XG5cbmRpdi5wcm9qZWN0LXRhZ3MgdWwgbGkgZGl2LmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG59XG5cbmRpdi5wcm9qZWN0LXRhZ3MgdWwgbGkgZGl2IGg2IHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuZGl2LnByb2plY3QtdGFncyB1bCBsaSBkaXY6aG92ZXIgaDYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG59XG5cbmRpdi5wcm9qZWN0LXRhZ3MgdWwgbGkgZGl2LmFjdGl2ZSBoNiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG5kaXYucHJvamVjdHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMzZweDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5kaXYucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDE2LjY2JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5kaXYucHJvamVjdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG5kaXYucHJvamVjdCBoNSB7XG4gICAgbGluZS1oZWlnaHQ6IDkwJTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuZGl2LnByb2plY3QgaDYge1xuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2VtaS10cmFuc3BhcmVudC1saWdodCk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuXG5kaXYucHJvamVjdDpob3ZlciBoNSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuZGl2LnByb2plY3Q6aG92ZXIgaDYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG59XG5cbmRpdi5wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYXJrZXIpO1xuICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cblxuLnByb2plY3QtcHJpbWFyeS1waG90byB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNC41cHg7XG59XG5cbmRpdi5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMzZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZGl2LnByb2plY3QtdGFncyB1bCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgZGl2LnByb2plY3Qge1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyMjVweDtcbiAgICB9XG4gICAgZGl2LnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgZGl2LnByb2plY3RzIHtcbiAgICAgICAgcGFkZGluZzogMjdweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "lPu9":
/*!*********************************************!*\
  !*** ./src/app/components/BaseComponent.ts ***!
  \*********************************************/
/*! exports provided: BaseComponent, PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


var monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'
];
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.formatDate = function (dateInNumber) {
        if (dateInNumber == null) {
            return 'Present';
        }
        else {
            var date = new Date(dateInNumber);
            var month = monthNames[date.getMonth()];
            var year = date.getFullYear().toString();
            return month + ' ' + year;
        }
    };
    return BaseComponent;
}());

var PageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PageComponent, _super);
    function PageComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageComponent.prototype.onContactMeClicked = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(document).height() }, 'slow');
    };
    return PageComponent;
}(BaseComponent));



/***/ }),

/***/ "m3nk":
/*!********************************************!*\
  !*** ./src/app/services/mock/mock-home.ts ***!
  \********************************************/
/*! exports provided: MOCK_HOME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_HOME", function() { return MOCK_HOME; });
var MOCK_HOME = {
    title: 'Hi!\nI\'m Nayanda\n',
    subtitle: 'Programmer',
    paragraph: 'Not just one kind of programmer. Most experienced with mobile apps development, but can do web development, back-end development, desktop application or even hardware programming.'
};


/***/ }),

/***/ "nr5L":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-service */ "ROeJ");
/* harmony import */ var _mock_mock_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock/mock-home */ "m3nk");






var HomeService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HomeService, _super);
    function HomeService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.endPoint = _this.serviceUrl + '/home';
        return _this;
    }
    HomeService.prototype.getHomePage = function () {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_home__WEBPACK_IMPORTED_MODULE_5__["MOCK_HOME"]);
        }
        return this.httpClient.get(this.endPoint + '/page');
    };
    HomeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeService);
    return HomeService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "ogVo":
/*!*********************************************!*\
  !*** ./src/app/services/mock/mock-about.ts ***!
  \*********************************************/
/*! exports provided: MOCK_ABOUT, MOCK_SKILLS, MOCK_EXPERIENCE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_ABOUT", function() { return MOCK_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_SKILLS", function() { return MOCK_SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_EXPERIENCE", function() { return MOCK_EXPERIENCE; });
var MOCK_ABOUT = {
    title: 'About Me',
    subtitle: 'Nayanda Haberty',
    paragraph: 'Born at Jakarta, on 10 May 1991. Love to draw, painting and gaming. Passionate with science, history and technology. Now still living in Jakarta. \n\n' +
        'Everything started even before I\'m going to college but in my high school period when I try and learn by myself to exploit some open source bot for online games. \n\n' +
        'My curiousity started from the question about "how can some electrical device can perform such a thing just by a bunch of code?" which then lead me to Computer Engineering Major. Later this curiousity became passion.'
};
var MOCK_SKILLS = {
    title: 'Programming Language',
    description: 'I personally have my first programming experience with PERL, but then I dig deep into C and C++ as my basic learning language. Later, Java is the language that mostly thougt me many fundamentals of Object Oriented Programming language \n\n'
        + 'On app development, I prefer the native approach, since the native generally have better performance than its hybrid alternative. I usually using Kotlin for Android and Swift for iOS as this languages are offer more modern approach for developing instead of Java or Objective-C. \n\n'
        + 'For web development, since I usually using Angular 2 or above, TypeScript is my first option for my front end language. The back-end can adjusted according to the requirement.',
    skills: [
        { name: 'C# & Java', value: 0.85 },
        { name: 'Kotlin', value: 0.8 },
        { name: 'Swift', value: 0.9 },
        { name: 'JavaScript & TypeScript', value: 0.75 },
        { name: 'C/C++', value: 0.7 }
    ],
    devSkills: [
        { name: 'Mobile App Development', value: 0.9 },
        { name: 'Web Development', value: 0.8 },
        { name: 'Back-End Development', value: 0.85 },
        { name: 'Desktop Application', value: 0.75 },
        { name: 'Hardware Programming', value: 0.7 }
    ],
    otherSkills: ['HTML', 'CSS', 'Spring Framework', 'Angular', 'JQuery', 'SQL', 'MongoDB', 'REST API', '.Net Core', 'ASP .NET', 'Micro Controller', 'Basic Electronics', 'PERL', 'Computer Science', 'Basic Machine Learning', 'Assembly Language']
};
var MOCK_EXPERIENCE = [
    {
        officeName: 'Home Credit Indonesia',
        officeLogo: 'https://res.cloudinary.com/hainayanda/image/upload/v1587139341/PuRhYeyB_400x400.png',
        position: 'Senior iOS Developer',
        startDate: new Date(2019, 9).getTime(),
        endDate: null,
        location: 'South Jakarta, Greater Jakarta, Indonesia',
        description: 'Developing and maintain Home Credit iOS Application'
    },
    {
        officeName: 'Bukalapak',
        officeLogo: 'https://res.cloudinary.com/hainayanda/image/upload/v1547886175/BukalapakLogo.png',
        position: 'iOS Developer',
        startDate: new Date(2018, 10).getTime(),
        endDate: new Date(2019, 9).getTime(),
        location: 'South Jakarta, Greater Jakarta, Indonesia',
        description: 'Developing and maintain Bukalapak iOS Application, especially in search features'
    },
    {
        officeName: 'Kencana Graha Global',
        officeLogo: 'https://res.cloudinary.com/hainayanda/image/upload/v1547886175/KG-Logo.png',
        position: 'Software Developer',
        startDate: new Date(2017, 5).getTime(),
        endDate: new Date(2018, 9).getTime(),
        location: 'Central Jakarta, Greater Jakarta, Indonesia',
        description: 'Developing Back-End, iOS and Android application for start-up'
    },
    {
        officeName: 'PT Kreatif Media Karya',
        officeLogo: 'https://res.cloudinary.com/hainayanda/image/upload/v1547886175/KMKLogo.png',
        position: 'Test Engineer',
        startDate: new Date(2017, 2).getTime(),
        endDate: new Date(2017, 5).getTime(),
        location: 'Central Jakarta, Greater Jakarta, Indonesia',
        description: 'Create and maintain test and develop tester tools for Liputan6.com'
    },
    {
        officeName: 'PT Aprisma Wirecard',
        officeLogo: 'https://res.cloudinary.com/hainayanda/image/upload/v1547886175/WirecardLogo.png',
        position: 'Java Developer',
        startDate: new Date(2016, 5).getTime(),
        endDate: new Date(2017, 1).getTime(),
        location: 'South Jakarta, Greater Jakarta, Indonesia',
        description: 'Java Developer'
    },
    {
        officeName: 'Freelance',
        officeLogo: 'https://res.cloudinary.com/hainayanda/image/upload/v1547886175/GraphicDesignLogo.png',
        position: 'Graphic Designer',
        startDate: new Date(2016, 3).getTime(),
        endDate: new Date(2016, 5).getTime(),
        location: 'South Jakarta, Greater Jakarta, Indonesia',
        description: 'Design Poster, Banner, Logo'
    },
];


/***/ }),

/***/ "rZw3":
/*!**********************************!*\
  !*** ./src/app/models/skills.ts ***!
  \**********************************/
/*! exports provided: Skills, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Skills = /** @class */ (function () {
    function Skills() {
    }
    Object.defineProperty(Skills, "placeholder", {
        get: function () {
            var skills = new Skills();
            skills.title = "This is title";
            skills.description = '';
            skills.skills = [];
            skills.devSkills = [];
            skills.otherSkills = [];
            return skills;
        },
        enumerable: false,
        configurable: true
    });
    return Skills;
}());

var Skill = /** @class */ (function () {
    function Skill() {
    }
    return Skill;
}());



/***/ }),

/***/ "salP":
/*!**********************************************************************************!*\
  !*** ./src/app/components/about/about-dev-skills/about-dev-skills.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.column {\n  float: left;\n  width: 20%;\n}\n\n.row {\n  padding: 18px;\n  vertical-align: middle;\n  text-align: center;\n  margin: 0;\n}\n\ncircle {\n  margin: auto;\n}\n\nh6.dev-skills {\n  color: var(--color-semi-transparent-light);\n  line-height: 120%;\n  margin: auto, auto, 18px, auto;\n}\n\ndiv.dev-skills-container {\n  background-color: var(--color-not-so-dark);\n  padding: 27px;\n}\n\n@media screen and (max-width: 768px) {\n  div.column {\n    width: 50%;\n    min-height: 210px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWRldi1za2lsbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJhYm91dC1kZXYtc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29sdW1uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5yb3cge1xuICBwYWRkaW5nOiAxOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuY2lyY2xlIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oNi5kZXYtc2tpbGxzIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlbWktdHJhbnNwYXJlbnQtbGlnaHQpO1xuICBsaW5lLWhlaWdodDogMTIwJTtcbiAgbWFyZ2luOiBhdXRvLCBhdXRvLCAxOHB4LCBhdXRvO1xufVxuXG5kaXYuZGV2LXNraWxscy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ub3Qtc28tZGFyayk7XG4gIHBhZGRpbmc6IDI3cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGRpdi5jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWluLWhlaWdodDogMjEwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "sjzp":
/*!*********************************************************************************!*\
  !*** ./src/app/components/about/about-dev-skills/about-dev-skills.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AboutDevSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDevSkillsComponent", function() { return AboutDevSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_dev_skills_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about-dev-skills.component.html */ "4Zlr");
/* harmony import */ var _about_dev_skills_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-dev-skills.component.css */ "salP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AboutDevSkillsComponent = /** @class */ (function () {
    function AboutDevSkillsComponent() {
        this.skills = [];
    }
    AboutDevSkillsComponent.prototype.ngOnInit = function () {
    };
    AboutDevSkillsComponent.ctorParameters = function () { return []; };
    AboutDevSkillsComponent.propDecorators = {
        skills: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    AboutDevSkillsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about-dev-skills',
            template: _raw_loader_about_dev_skills_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_about_dev_skills_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AboutDevSkillsComponent);
    return AboutDevSkillsComponent;
}());



/***/ }),

/***/ "spuZ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\" id=\"navbar\">\n  <span class=\"navbar-toggle\" id=\"js-navbar-toggle\" (click)=\"onNavMenuClicked()\">\n    <i class=\"fas fa-bars\"></i>\n  </span>\n  <a routerLink=\"/home\" class=\"logo\">\n    <img class=\"nav-image\" src=\"https://res.cloudinary.com/hainayanda/image/upload/v1548086145/n-logo-nav.png\"\n      alt=\"logo\">\n  </a>\n  <ul class=\"main-nav\" id=\"js-menu\">\n    <li>\n      <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-links\">Home</a>\n    </li>\n    <li>\n      <a routerLink=\"/about\" routerLinkActive=\"active\" class=\"nav-links\">About</a>\n    </li>\n    <li>\n      <a routerLink=\"/projects\" routerLinkActive=\"active\" class=\"nav-links\">Projects</a>\n    </li>\n  </ul>\n  <ul class=\"main-nav\">\n    <li>\n      <a [attr.href]=\"externalLinks.linkedin\" class=\"nav-links\" target=\"_blank\">\n        <i class=\"fab fa-linkedin-in\"></i>\n      </a>\n    </li>\n    <li>\n      <a [attr.href]=\"externalLinks.github\" class=\"nav-links\" target=\"_blank\">\n        <i class=\"fab fa-github\"></i>\n      </a>\n    </li>\n    <li>\n      <a [attr.href]=\"externalLinks.email\" class=\"nav-links\" target=\"_blank\">\n        <i class=\"fas fa-envelope\"></i>\n      </a>\n    </li>\n  </ul>\n</nav>");

/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-container\">\n  <div class=\"home-bg\"></div>\n  <div class=\"home-row\">\n    <div class=\"home-content-container\">\n      <h1 class=\"home boldest line-breaker\">\n        {{page.title}}\n      </h1>\n      <h1 class=\"home semi-bold line-breaker\">{{page.subtitle}}</h1>\n      <p class=\"home big regular line-breaker\">\n        {{page.paragraph}}\n      </p>\n      <div>\n        <a class=\"button button-about\" routerLink=\"/about\">\n          Learn More\n          <i class=\"button-r-arrow fas fa-caret-right\"></i>\n        </a>\n        <a class=\"button button-contact\" id=\"contact-me\" (click)=\"onContactMeClicked()\">\n          Contact Me\n          <i class=\"button-r-arrow fas fa-caret-right\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "u5qf":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about-skills/about-skills.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"skills-container\">\n  <div class=\"skills-paragraph-container\">\n    <h5 class=\"line-breaker skills-title semi-bold\">{{title}}</h5>\n    <p class=\"skills-p line-breaker\">\n      {{description}}\n    </p>\n  </div>\n  <div class=\"skills-list-container\">\n    <ul class=\"skills-list\">\n      <li *ngFor=\"let skill of skills\">\n        <h6 class=\"skills regular\">{{skill.name}}</h6>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n            [style.width]=\"skill.value | percent\">\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>");

/***/ }),

/***/ "v5q6":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about-experiences/about-experiences.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"experiences-container\">\n  <div class=experiences-title>\n    <h6 class=\"experiences-title semi-bold\">Experience</h6>\n  </div>\n  <div class=\"experiences-list\">\n    <div *ngFor=\"let experience of experiences; let i = index\" class=\"experience\" [style.margin-right]=\"marginRightAt(i)\" [style.width]=\"cellWidth()\">\n      <div class=\"company-photo\">\n        <img [src]=\"experience.officeLogo\">\n      </div>\n      <div class=\"experience-description\">\n        <h3>{{experience.position}}</h3>\n        <h4>{{experience.officeName}}</h4>\n        <h5>{{formatDate(experience.startDate)}} - {{formatDate(experience.endDate)}}</h5>\n        <h5>{{experience.location}}</h5>\n        <h5>{{experience.description}}</h5>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ "6bE9");
/* harmony import */ var _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project-detail/project-detail.component */ "vmno");







var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'projects', component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] },
    { path: 'project/:id', component: _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vmno":
/*!***********************************************************************!*\
  !*** ./src/app/components/project-detail/project-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-detail.component.html */ "0qMD");
/* harmony import */ var _project_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-detail.component.css */ "8vE2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/project.service */ "c3AT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BaseComponent */ "lPu9");








var ProjectDetailComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProjectDetailComponent, _super);
    function ProjectDetailComponent(route, carouselConfig, projectService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.carouselConfig = carouselConfig;
        _this.projectService = projectService;
        return _this;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carouselConfig.interval = 10000;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.projectService.getProjectBy(id).subscribe(function (project) {
                _this.project = project;
            });
        });
    };
    ProjectDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProjectDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['IProjectService',] }] }
    ]; };
    ProjectDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-project-detail',
            template: _raw_loader_project_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [
                { provide: 'IProjectService', useClass: _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }
            ],
            styles: [_project_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarouselConfig"], Object])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_7__["BaseComponent"]));



/***/ }),

/***/ "xLnn":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about-other-skills/about-other-skills.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"other-skills-container\">\n  <h5 class=\"semi-bold\">Other notable skills</h5>\n  <ul class=\"other-skills-list\">\n    <li *ngFor=\"let skill of skills\">\n      <div>\n        <h6 class=\"regular\">\n          {{skill}}\n        </h6>\n      </div>\n    </li>\n  </ul>\n  <div class=\"separator\"></div>\n</div>");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map