(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github/github.component */ "./src/app/github/github.component.ts");
/* harmony import */ var _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flickr/flickr.component */ "./src/app/flickr/flickr.component.ts");
/* harmony import */ var _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linkedin/linkedin.component */ "./src/app/linkedin/linkedin.component.ts");
/* harmony import */ var _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facebook/facebook.component */ "./src/app/facebook/facebook.component.ts");
/* harmony import */ var _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./twitter/twitter.component */ "./src/app/twitter/twitter.component.ts");










const routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
        path: 'github',
        component: _github_github_component__WEBPACK_IMPORTED_MODULE_3__["GithubComponent"]
    }, {
        path: 'flickr',
        component: _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_4__["FlickrComponent"]
    }, {
        path: 'linkedin',
        component: _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_5__["LinkedinComponent"]
    }, {
        path: 'facebook',
        component: _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_6__["FacebookComponent"]
    }, {
        path: 'twitter',
        component: _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__["TwitterComponent"]
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
// Components list: Nav bar - sensitive to scroll.
// Photography section - routable carousel
// Projects section - cards



class AppComponent {
    constructor() {
        this.title = 'website-in-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".app-container[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  background-color: #eee;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bW9oYW4vdmlqZXNobS5naXRodWIuaW8vd2Vic2l0ZS1pbi1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250YWluZXIge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufSIsIi5hcHAtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github/github.component */ "./src/app/github/github.component.ts");
/* harmony import */ var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-media-loading-icon/social-media-loading-icon.component */ "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");
/* harmony import */ var _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flickr/flickr.component */ "./src/app/flickr/flickr.component.ts");
/* harmony import */ var _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./linkedin/linkedin.component */ "./src/app/linkedin/linkedin.component.ts");
/* harmony import */ var _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facebook/facebook.component */ "./src/app/facebook/facebook.component.ts");
/* harmony import */ var _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./twitter/twitter.component */ "./src/app/twitter/twitter.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _github_github_component__WEBPACK_IMPORTED_MODULE_5__["GithubComponent"],
        _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_6__["SocialMediaLoadingIconComponent"],
        _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_7__["FlickrComponent"],
        _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_8__["LinkedinComponent"],
        _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_9__["FacebookComponent"],
        _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_10__["TwitterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _github_github_component__WEBPACK_IMPORTED_MODULE_5__["GithubComponent"],
                    _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_6__["SocialMediaLoadingIconComponent"],
                    _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_7__["FlickrComponent"],
                    _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_8__["LinkedinComponent"],
                    _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_9__["FacebookComponent"],
                    _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_10__["TwitterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/facebook/facebook.component.ts":
/*!************************************************!*\
  !*** ./src/app/facebook/facebook.component.ts ***!
  \************************************************/
/*! exports provided: FacebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookComponent", function() { return FacebookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-media-loading-icon/social-media-loading-icon.component */ "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");



class FacebookComponent {
    constructor() { }
    ngOnInit() {
        window.location.href = 'http://facebook.com/mv.vijesh';
    }
}
FacebookComponent.ɵfac = function FacebookComponent_Factory(t) { return new (t || FacebookComponent)(); };
FacebookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacebookComponent, selectors: [["app-facebook"]], decls: 1, vars: 0, consts: [["social-media-name", "Facebook"]], template: function FacebookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
    } }, directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacebookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facebook',
                templateUrl: './facebook.component.html',
                styleUrls: ['./facebook.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/flickr/flickr.component.ts":
/*!********************************************!*\
  !*** ./src/app/flickr/flickr.component.ts ***!
  \********************************************/
/*! exports provided: FlickrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrComponent", function() { return FlickrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-media-loading-icon/social-media-loading-icon.component */ "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");



class FlickrComponent {
    constructor() { }
    ngOnInit() {
        window.location.href = 'http://flickr.com/vijeshm';
    }
}
FlickrComponent.ɵfac = function FlickrComponent_Factory(t) { return new (t || FlickrComponent)(); };
FlickrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlickrComponent, selectors: [["app-flickr"]], decls: 1, vars: 0, consts: [["social-media-name", "Flickr"]], template: function FlickrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
    } }, directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWNrci9mbGlja3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlickrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flickr',
                templateUrl: './flickr.component.html',
                styleUrls: ['./flickr.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/github/github.component.ts":
/*!********************************************!*\
  !*** ./src/app/github/github.component.ts ***!
  \********************************************/
/*! exports provided: GithubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubComponent", function() { return GithubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-media-loading-icon/social-media-loading-icon.component */ "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");



class GithubComponent {
    constructor() { }
    ngOnInit() {
        window.location.href = 'http://github.com/vijeshm';
    }
}
GithubComponent.ɵfac = function GithubComponent_Factory(t) { return new (t || GithubComponent)(); };
GithubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GithubComponent, selectors: [["app-github"]], decls: 1, vars: 0, consts: [["social-media-name", "Github"]], template: function GithubComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
    } }, directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi9naXRodWIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-github',
                templateUrl: './github.component.html',
                styleUrls: ['./github.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function HomeComponent_div_11_span_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_11_span_1_span_3_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const isLast_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, tag_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r4);
} }
function HomeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_11_span_1_Template, 4, 4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tags);
} }
function HomeComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const socialMediaLink_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", socialMediaLink_r7.socialMediaLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", socialMediaLink_r7.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_12_div_1_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.socialMediaLinks);
} }
class HomeComponent {
    constructor() {
        this.imagePath = '../../assets/images/mylogo.png';
        this.name = 'Vijesh Mohan';
        this.tags = ['Engineer', 'Photographer', 'Researcher', 'A restless soul'];
        this.socialMediaLinks = [{
                socialMediaLink: 'http://github.com/vijeshm',
                iconPath: '../../assets/images/social-media/github.png'
            }, {
                socialMediaLink: 'http://flickr.com/vijeshm',
                iconPath: '../../assets/images/social-media/flickr.png'
            }, {
                socialMediaLink: 'http://linkedin.com/pub/vijesh-m/48/683/780',
                iconPath: '../../assets/images/social-media/linkedin.png'
            }, {
                socialMediaLink: 'http://facebook.com/mv.vijesh',
                iconPath: '../../assets/images/social-media/facebook.png'
            }, {
                socialMediaLink: 'http://twitter.com/edbidangi',
                iconPath: '../../assets/images/social-media/twitter.png'
            }];
    }
    ngOnInit() {
        window.twttr.widgets.load();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 24, vars: 6, consts: [[1, "home"], [1, "content"], [1, "row"], [1, "col-9"], [1, "intro-content-container"], [1, "intro-content"], [1, "image"], [3, "src"], [1, "name"], ["class", "tags", 4, "ngIf"], ["class", "row social-media-links", 4, "ngIf"], [1, "col-3"], [1, "sidebar"], [1, "twitter-timeline-container"], ["data-theme", "dark", "data-width", "100%", "data-height", "50vh", "href", "https://twitter.com/edbidangi?ref_src=twsrc%5Etfw", 1, "twitter-timeline"], [1, "youtube-playlist-container"], [1, "youtube-header"], [1, "videos"], ["width", "100%", "src", "https://www.youtube.com/embed/videoseries?list=PLe7ei_ouCSxVkw9rMxah1CxZ59WbtenWz", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "tags"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row", "social-media-links"], ["class", "col social-media-link", 4, "ngFor", "ngForOf"], [1, "col", "social-media-link"], ["target", "_new", 3, "href"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tweets by edbidangi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " by Vijesh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "iframe", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tags.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialMediaLinks.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".home[_ngcontent-%COMP%] {\n  background-image: url('1.jpg');\n  background-repeat: none;\n  background-attachment: fixed;\n  background-position: center top;\n  background-size: cover;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-animation: slideBg 20s linear infinite 0s;\n          animation: slideBg 20s linear infinite 0s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  height: 100vh;\n  text-align: center;\n  color: white;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 10px white;\n  -webkit-filter: drop-shadow(0px 0px 15px black);\n          filter: drop-shadow(0px 0px 15px black);\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-family: \"Century Gothic\";\n  font-size: 25px;\n  text-shadow: 0px 0px 7px black;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%]   .social-media-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  -webkit-filter: drop-shadow(0px 0px 2px black);\n          filter: drop-shadow(0px 0px 2px black);\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .twitter-timeline-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .youtube-playlist-container[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  background-color: #292F33;\n  border-radius: 4px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .youtube-playlist-container[_ngcontent-%COMP%]   .youtube-header[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(145, 165, 180, 0.6);\n  text-align: left;\n  font-size: 12px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .youtube-playlist-container[_ngcontent-%COMP%]   .youtube-header[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%] {\n  font-size: 21px;\n  padding-right: 5px;\n}\n@-webkit-keyframes slideBg {\n  0% {\n    background-image: url('1.jpg');\n  }\n  25% {\n    background-image: url('2.jpg');\n  }\n  50% {\n    background-image: url('3.jpg');\n  }\n  75% {\n    background-image: url('4.jpg');\n  }\n  100% {\n    background-image: url('1.jpg');\n  }\n}\n@keyframes slideBg {\n  0% {\n    background-image: url('1.jpg');\n  }\n  25% {\n    background-image: url('2.jpg');\n  }\n  50% {\n    background-image: url('3.jpg');\n  }\n  75% {\n    background-image: url('4.jpg');\n  }\n  100% {\n    background-image: url('1.jpg');\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bW9oYW4vdmlqZXNobS5naXRodWIuaW8vd2Vic2l0ZS1pbi1hbmd1bGFyL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdm1vaGFuL3ZpamVzaG0uZ2l0aHViLmlvL3dlYnNpdGUtaW4tYW5ndWxhci9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUdBLHNCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER1E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREVZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQ0FoQjtBREVnQjtFQUNJLCtCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ0FwQjtBREdnQjtFQUNJLGdCRWpDQztBRGdDckI7QURJZ0I7RUFDSSxnQkVyQ0M7RUZzQ0QsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNGcEI7QURLZ0I7RUFDSSxnQkU1Q0M7QUR5Q3JCO0FES3dCO0VBQ0ksV0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNINUI7QURVWTtFQUNJLGdCRXhESztBRGdEckI7QURVWTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1JoQjtBRFNnQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUHBCO0FEUW9CO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDTnhCO0FEY0E7RUFDSTtJQUNJLDhCQUFBO0VDWE47RURjRTtJQUNJLDhCQUFBO0VDWk47RURlRTtJQUNJLDhCQUFBO0VDYk47RURnQkU7SUFDSSw4QkFBQTtFQ2ROO0VEaUJFO0lBQ0ksOEJBQUE7RUNmTjtBQUNGO0FESkE7RUFDSTtJQUNJLDhCQUFBO0VDWE47RURjRTtJQUNJLDhCQUFBO0VDWk47RURlRTtJQUNJLDhCQUFBO0VDYk47RURnQkU7SUFDSSw4QkFBQTtFQ2ROO0VEaUJFO0lBQ0ksOEJBQUE7RUNmTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG4uaG9tZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2VzLzEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYW5pbWF0aW9uOiBzbGlkZUJnIDIwcyBsaW5lYXIgaW5maW5pdGUgMHM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgLmludHJvLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAuaW50cm8tY29udGVudCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxNXB4IGJsYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC50YWdzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJG1hcmdpbi10b3AtZGVmYXVsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJG1hcmdpbi10b3AtZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYyc7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggN3B4IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1tZWRpYS1saW5rcyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdG9wLWRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEtbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggYmxhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgIC50d2l0dGVyLXRpbWVsaW5lLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJG1hcmdpbi10b3AtZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC55b3V0dWJlLXBsYXlsaXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MkYzMztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgLnlvdXR1YmUtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDUsMTY1LDE4MCwuNik7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgLnZpZGVvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVCZyB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvMS5qcGcnKTtcbiAgICB9XG5cbiAgICAyNSUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvMi5qcGcnKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvMy5qcGcnKTtcbiAgICB9XG5cbiAgICA3NSUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvNC5qcGcnKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2VzLzEuanBnJyk7XG4gICAgfVxufSIsIi5ob21lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy8xLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogc2xpZGVCZyAyMHMgbGluZWFyIGluZmluaXRlIDBzO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIgLmludHJvLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lIC5jb250ZW50IC5pbnRyby1jb250ZW50LWNvbnRhaW5lciAuaW50cm8tY29udGVudCAuaW1hZ2Uge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHdoaXRlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTVweCBibGFjayk7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIgLmludHJvLWNvbnRlbnQgLnRhZ3Mge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhvbWUgLmNvbnRlbnQgLmludHJvLWNvbnRlbnQtY29udGFpbmVyIC5pbnRyby1jb250ZW50IC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA3cHggYmxhY2s7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIgLmludHJvLWNvbnRlbnQgLnNvY2lhbC1tZWRpYS1saW5rcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIgLmludHJvLWNvbnRlbnQgLnNvY2lhbC1tZWRpYS1saW5rcyAuc29jaWFsLW1lZGlhLWxpbmsgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggYmxhY2spO1xufVxuLmhvbWUgLmNvbnRlbnQgLnNpZGViYXIgLnR3aXR0ZXItdGltZWxpbmUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ob21lIC5jb250ZW50IC5zaWRlYmFyIC55b3V0dWJlLXBsYXlsaXN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyRjMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaG9tZSAuY29udGVudCAuc2lkZWJhciAueW91dHViZS1wbGF5bGlzdC1jb250YWluZXIgLnlvdXR1YmUtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDUsIDE2NSwgMTgwLCAwLjYpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uaG9tZSAuY29udGVudCAuc2lkZWJhciAueW91dHViZS1wbGF5bGlzdC1jb250YWluZXIgLnlvdXR1YmUtaGVhZGVyIC52aWRlb3Mge1xuICBmb250LXNpemU6IDIxcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUJnIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvMS5qcGdcIik7XG4gIH1cbiAgMjUlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2VzLzIuanBnXCIpO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy8zLmpwZ1wiKTtcbiAgfVxuICA3NSUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvNC5qcGdcIik7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy8xLmpwZ1wiKTtcbiAgfVxufSIsIiRtYXJnaW4tdG9wLWRlZmF1bHQ6IDIwcHg7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/linkedin/linkedin.component.ts":
/*!************************************************!*\
  !*** ./src/app/linkedin/linkedin.component.ts ***!
  \************************************************/
/*! exports provided: LinkedinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinComponent", function() { return LinkedinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-media-loading-icon/social-media-loading-icon.component */ "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");



class LinkedinComponent {
    constructor() { }
    ngOnInit() {
        window.location.href = 'http://linkedin.com/pub/vijesh-m/48/683/780';
    }
}
LinkedinComponent.ɵfac = function LinkedinComponent_Factory(t) { return new (t || LinkedinComponent)(); };
LinkedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkedinComponent, selectors: [["app-linkedin"]], decls: 1, vars: 0, consts: [["social-media-name", "LinkedIn"]], template: function LinkedinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
    } }, directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmtlZGluL2xpbmtlZGluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkedinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-linkedin',
                templateUrl: './linkedin.component.html',
                styleUrls: ['./linkedin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/social-media-loading-icon/social-media-loading-icon.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SocialMediaLoadingIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaLoadingIconComponent", function() { return SocialMediaLoadingIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SocialMediaLoadingIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
SocialMediaLoadingIconComponent.ɵfac = function SocialMediaLoadingIconComponent_Factory(t) { return new (t || SocialMediaLoadingIconComponent)(); };
SocialMediaLoadingIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaLoadingIconComponent, selectors: [["app-social-media-loading-icon"]], inputs: { socialMediaName: ["social-media-name", "socialMediaName"] }, decls: 7, vars: 1, consts: [[1, "spinner-container"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-grow"], [1, "sr-only"], [1, "loading-message"]], template: function SocialMediaLoadingIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Redirecting to ", ctx.socialMediaName, " ");
    } }, styles: [".spinner-container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n.spinner-container[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bW9oYW4vdmlqZXNobS5naXRodWIuaW8vd2Vic2l0ZS1pbi1hbmd1bGFyL3NyYy9hcHAvc29jaWFsLW1lZGlhLWxvYWRpbmctaWNvbi9zb2NpYWwtbWVkaWEtbG9hZGluZy1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zb2NpYWwtbWVkaWEtbG9hZGluZy1pY29uL3NvY2lhbC1tZWRpYS1sb2FkaW5nLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsLW1lZGlhLWxvYWRpbmctaWNvbi9zb2NpYWwtbWVkaWEtbG9hZGluZy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAubG9hZGluZy1tZXNzYWdlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn0iLCIuc3Bpbm5lci1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5zcGlubmVyLWNvbnRhaW5lciAubG9hZGluZy1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaLoadingIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-media-loading-icon',
                templateUrl: './social-media-loading-icon.component.html',
                styleUrls: ['./social-media-loading-icon.component.scss']
            }]
    }], function () { return []; }, { socialMediaName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['social-media-name']
        }] }); })();


/***/ }),

/***/ "./src/app/twitter/twitter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/twitter/twitter.component.ts ***!
  \**********************************************/
/*! exports provided: TwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterComponent", function() { return TwitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-media-loading-icon/social-media-loading-icon.component */ "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");



class TwitterComponent {
    constructor() { }
    ngOnInit() {
        window.location.href = 'http://twitter.com/edbidangi';
    }
}
TwitterComponent.ɵfac = function TwitterComponent_Factory(t) { return new (t || TwitterComponent)(); };
TwitterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwitterComponent, selectors: [["app-twitter"]], decls: 1, vars: 0, consts: [["social-media-name", "Twitter"]], template: function TwitterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
    } }, directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3aXR0ZXIvdHdpdHRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwitterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-twitter',
                templateUrl: './twitter.component.html',
                styleUrls: ['./twitter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vmohan/vijeshm.github.io/website-in-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map