function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _github_github_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./github/github.component */
    "./src/app/github/github.component.ts");
    /* harmony import */


    var _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./flickr/flickr.component */
    "./src/app/flickr/flickr.component.ts");
    /* harmony import */


    var _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./linkedin/linkedin.component */
    "./src/app/linkedin/linkedin.component.ts");
    /* harmony import */


    var _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./facebook/facebook.component */
    "./src/app/facebook/facebook.component.ts");
    /* harmony import */


    var _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./twitter/twitter.component */
    "./src/app/twitter/twitter.component.ts");

    var routes = [{
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

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Components list: Nav bar - sensitive to scroll.
    // Photography section - routable carousel
    // Projects section - cards


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'website-in-angular';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "app-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".app-container[_ngcontent-%COMP%] {\n  font-family: \"Lato\", \"Roboto\", sans-serif;\n  background-color: #eee;\n  height: 100vh;\n}\n\n[class*=col-][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media only screen and (min-width: 600px) {\n  \n  .col-s-1[_ngcontent-%COMP%] {\n    width: 8.33%;\n  }\n\n  .col-s-2[_ngcontent-%COMP%] {\n    width: 16.66%;\n  }\n\n  .col-s-3[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n\n  .col-s-4[_ngcontent-%COMP%] {\n    width: 33.33%;\n  }\n\n  .col-s-5[_ngcontent-%COMP%] {\n    width: 41.66%;\n  }\n\n  .col-s-6[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .col-s-7[_ngcontent-%COMP%] {\n    width: 58.33%;\n  }\n\n  .col-s-8[_ngcontent-%COMP%] {\n    width: 66.66%;\n  }\n\n  .col-s-9[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n\n  .col-s-10[_ngcontent-%COMP%] {\n    width: 83.33%;\n  }\n\n  .col-s-11[_ngcontent-%COMP%] {\n    width: 91.66%;\n  }\n\n  .col-s-12[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 768px) {\n  \n  .col-1[_ngcontent-%COMP%] {\n    width: 8.33%;\n  }\n\n  .col-2[_ngcontent-%COMP%] {\n    width: 16.66%;\n  }\n\n  .col-3[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n\n  .col-4[_ngcontent-%COMP%] {\n    width: 33.33%;\n  }\n\n  .col-5[_ngcontent-%COMP%] {\n    width: 41.66%;\n  }\n\n  .col-6[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .col-7[_ngcontent-%COMP%] {\n    width: 58.33%;\n  }\n\n  .col-8[_ngcontent-%COMP%] {\n    width: 66.66%;\n  }\n\n  .col-9[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n\n  .col-10[_ngcontent-%COMP%] {\n    width: 83.33%;\n  }\n\n  .col-11[_ngcontent-%COMP%] {\n    width: 91.66%;\n  }\n\n  .col-12[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bW9oYW4vdmlqZXNobS5naXRodWIuaW8vd2Vic2l0ZS1pbi1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQTtJQUFVLFlBQUE7RUNFWjs7RURERTtJQUFVLGFBQUE7RUNLWjs7RURKRTtJQUFVLFVBQUE7RUNRWjs7RURQRTtJQUFVLGFBQUE7RUNXWjs7RURWRTtJQUFVLGFBQUE7RUNjWjs7RURiRTtJQUFVLFVBQUE7RUNpQlo7O0VEaEJFO0lBQVUsYUFBQTtFQ29CWjs7RURuQkU7SUFBVSxhQUFBO0VDdUJaOztFRHRCRTtJQUFVLFVBQUE7RUMwQlo7O0VEekJFO0lBQVcsYUFBQTtFQzZCYjs7RUQ1QkU7SUFBVyxhQUFBO0VDZ0NiOztFRC9CRTtJQUFXLFdBQUE7RUNtQ2I7QUFDRjs7QURqQ0E7RUFDSSxpQkFBQTtFQUNBO0lBQVEsWUFBQTtFQ29DVjs7RURuQ0U7SUFBUSxhQUFBO0VDdUNWOztFRHRDRTtJQUFRLFVBQUE7RUMwQ1Y7O0VEekNFO0lBQVEsYUFBQTtFQzZDVjs7RUQ1Q0U7SUFBUSxhQUFBO0VDZ0RWOztFRC9DRTtJQUFRLFVBQUE7RUNtRFY7O0VEbERFO0lBQVEsYUFBQTtFQ3NEVjs7RURyREU7SUFBUSxhQUFBO0VDeURWOztFRHhERTtJQUFRLFVBQUE7RUM0RFY7O0VEM0RFO0lBQVMsYUFBQTtFQytEWDs7RUQ5REU7SUFBUyxhQUFBO0VDa0VYOztFRGpFRTtJQUFTLFdBQUE7RUNxRVg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC8qIEZvciB0YWJsZXRzOiAqL1xuICAgIC5jb2wtcy0xIHt3aWR0aDogOC4zMyU7fVxuICAgIC5jb2wtcy0yIHt3aWR0aDogMTYuNjYlO31cbiAgICAuY29sLXMtMyB7d2lkdGg6IDI1JTt9XG4gICAgLmNvbC1zLTQge3dpZHRoOiAzMy4zMyU7fVxuICAgIC5jb2wtcy01IHt3aWR0aDogNDEuNjYlO31cbiAgICAuY29sLXMtNiB7d2lkdGg6IDUwJTt9XG4gICAgLmNvbC1zLTcge3dpZHRoOiA1OC4zMyU7fVxuICAgIC5jb2wtcy04IHt3aWR0aDogNjYuNjYlO31cbiAgICAuY29sLXMtOSB7d2lkdGg6IDc1JTt9XG4gICAgLmNvbC1zLTEwIHt3aWR0aDogODMuMzMlO31cbiAgICAuY29sLXMtMTEge3dpZHRoOiA5MS42NiU7fVxuICAgIC5jb2wtcy0xMiB7d2lkdGg6IDEwMCU7fVxufVxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAvKiBGb3IgZGVza3RvcDogKi9cbiAgICAuY29sLTEge3dpZHRoOiA4LjMzJTt9XG4gICAgLmNvbC0yIHt3aWR0aDogMTYuNjYlO31cbiAgICAuY29sLTMge3dpZHRoOiAyNSU7fVxuICAgIC5jb2wtNCB7d2lkdGg6IDMzLjMzJTt9XG4gICAgLmNvbC01IHt3aWR0aDogNDEuNjYlO31cbiAgICAuY29sLTYge3dpZHRoOiA1MCU7fVxuICAgIC5jb2wtNyB7d2lkdGg6IDU4LjMzJTt9XG4gICAgLmNvbC04IHt3aWR0aDogNjYuNjYlO31cbiAgICAuY29sLTkge3dpZHRoOiA3NSU7fVxuICAgIC5jb2wtMTAge3dpZHRoOiA4My4zMyU7fVxuICAgIC5jb2wtMTEge3dpZHRoOiA5MS42NiU7fVxuICAgIC5jb2wtMTIge3dpZHRoOiAxMDAlO31cbn0iLCIuYXBwLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuW2NsYXNzKj1jb2wtXSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC8qIEZvciB0YWJsZXRzOiAqL1xuICAuY29sLXMtMSB7XG4gICAgd2lkdGg6IDguMzMlO1xuICB9XG5cbiAgLmNvbC1zLTIge1xuICAgIHdpZHRoOiAxNi42NiU7XG4gIH1cblxuICAuY29sLXMtMyB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuXG4gIC5jb2wtcy00IHtcbiAgICB3aWR0aDogMzMuMzMlO1xuICB9XG5cbiAgLmNvbC1zLTUge1xuICAgIHdpZHRoOiA0MS42NiU7XG4gIH1cblxuICAuY29sLXMtNiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5jb2wtcy03IHtcbiAgICB3aWR0aDogNTguMzMlO1xuICB9XG5cbiAgLmNvbC1zLTgge1xuICAgIHdpZHRoOiA2Ni42NiU7XG4gIH1cblxuICAuY29sLXMtOSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuXG4gIC5jb2wtcy0xMCB7XG4gICAgd2lkdGg6IDgzLjMzJTtcbiAgfVxuXG4gIC5jb2wtcy0xMSB7XG4gICAgd2lkdGg6IDkxLjY2JTtcbiAgfVxuXG4gIC5jb2wtcy0xMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLyogRm9yIGRlc2t0b3A6ICovXG4gIC5jb2wtMSB7XG4gICAgd2lkdGg6IDguMzMlO1xuICB9XG5cbiAgLmNvbC0yIHtcbiAgICB3aWR0aDogMTYuNjYlO1xuICB9XG5cbiAgLmNvbC0zIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cbiAgLmNvbC00IHtcbiAgICB3aWR0aDogMzMuMzMlO1xuICB9XG5cbiAgLmNvbC01IHtcbiAgICB3aWR0aDogNDEuNjYlO1xuICB9XG5cbiAgLmNvbC02IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLmNvbC03IHtcbiAgICB3aWR0aDogNTguMzMlO1xuICB9XG5cbiAgLmNvbC04IHtcbiAgICB3aWR0aDogNjYuNjYlO1xuICB9XG5cbiAgLmNvbC05IHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLmNvbC0xMCB7XG4gICAgd2lkdGg6IDgzLjMzJTtcbiAgfVxuXG4gIC5jb2wtMTEge1xuICAgIHdpZHRoOiA5MS42NiU7XG4gIH1cblxuICAuY29sLTEyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _github_github_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./github/github.component */
    "./src/app/github/github.component.ts");
    /* harmony import */


    var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./social-media-loading-icon/social-media-loading-icon.component */
    "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");
    /* harmony import */


    var _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./flickr/flickr.component */
    "./src/app/flickr/flickr.component.ts");
    /* harmony import */


    var _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./linkedin/linkedin.component */
    "./src/app/linkedin/linkedin.component.ts");
    /* harmony import */


    var _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./facebook/facebook.component */
    "./src/app/facebook/facebook.component.ts");
    /* harmony import */


    var _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./twitter/twitter.component */
    "./src/app/twitter/twitter.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _section_card_section_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./section-card/section-card.component */
    "./src/app/section-card/section-card.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _github_github_component__WEBPACK_IMPORTED_MODULE_5__["GithubComponent"], _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_6__["SocialMediaLoadingIconComponent"], _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_7__["FlickrComponent"], _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_8__["LinkedinComponent"], _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_9__["FacebookComponent"], _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_10__["TwitterComponent"], _section_card_section_card_component__WEBPACK_IMPORTED_MODULE_13__["SectionCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _github_github_component__WEBPACK_IMPORTED_MODULE_5__["GithubComponent"], _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_6__["SocialMediaLoadingIconComponent"], _flickr_flickr_component__WEBPACK_IMPORTED_MODULE_7__["FlickrComponent"], _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_8__["LinkedinComponent"], _facebook_facebook_component__WEBPACK_IMPORTED_MODULE_9__["FacebookComponent"], _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_10__["TwitterComponent"], _section_card_section_card_component__WEBPACK_IMPORTED_MODULE_13__["SectionCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/facebook/facebook.component.ts":
  /*!************************************************!*\
    !*** ./src/app/facebook/facebook.component.ts ***!
    \************************************************/

  /*! exports provided: FacebookComponent */

  /***/
  function srcAppFacebookFacebookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacebookComponent", function () {
      return FacebookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../social-media-loading-icon/social-media-loading-icon.component */
    "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");

    var FacebookComponent = /*#__PURE__*/function () {
      function FacebookComponent() {
        _classCallCheck(this, FacebookComponent);
      }

      _createClass(FacebookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.location.href = 'http://facebook.com/mv.vijesh';
        }
      }]);

      return FacebookComponent;
    }();

    FacebookComponent.ɵfac = function FacebookComponent_Factory(t) {
      return new (t || FacebookComponent)();
    };

    FacebookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacebookComponent,
      selectors: [["app-facebook"]],
      decls: 1,
      vars: 0,
      consts: [["social-media-name", "Facebook"]],
      template: function FacebookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
        }
      },
      directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacebookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facebook',
          templateUrl: './facebook.component.html',
          styleUrls: ['./facebook.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/flickr/flickr.component.ts":
  /*!********************************************!*\
    !*** ./src/app/flickr/flickr.component.ts ***!
    \********************************************/

  /*! exports provided: FlickrComponent */

  /***/
  function srcAppFlickrFlickrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlickrComponent", function () {
      return FlickrComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../social-media-loading-icon/social-media-loading-icon.component */
    "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");

    var FlickrComponent = /*#__PURE__*/function () {
      function FlickrComponent() {
        _classCallCheck(this, FlickrComponent);
      }

      _createClass(FlickrComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.location.href = 'http://flickr.com/vijeshm';
        }
      }]);

      return FlickrComponent;
    }();

    FlickrComponent.ɵfac = function FlickrComponent_Factory(t) {
      return new (t || FlickrComponent)();
    };

    FlickrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlickrComponent,
      selectors: [["app-flickr"]],
      decls: 1,
      vars: 0,
      consts: [["social-media-name", "Flickr"]],
      template: function FlickrComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
        }
      },
      directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWNrci9mbGlja3IuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlickrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flickr',
          templateUrl: './flickr.component.html',
          styleUrls: ['./flickr.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/github/github.component.ts":
  /*!********************************************!*\
    !*** ./src/app/github/github.component.ts ***!
    \********************************************/

  /*! exports provided: GithubComponent */

  /***/
  function srcAppGithubGithubComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GithubComponent", function () {
      return GithubComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../social-media-loading-icon/social-media-loading-icon.component */
    "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");

    var GithubComponent = /*#__PURE__*/function () {
      function GithubComponent() {
        _classCallCheck(this, GithubComponent);
      }

      _createClass(GithubComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.location.href = 'http://github.com/vijeshm';
        }
      }]);

      return GithubComponent;
    }();

    GithubComponent.ɵfac = function GithubComponent_Factory(t) {
      return new (t || GithubComponent)();
    };

    GithubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GithubComponent,
      selectors: [["app-github"]],
      decls: 1,
      vars: 0,
      consts: [["social-media-name", "Github"]],
      template: function GithubComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
        }
      },
      directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi9naXRodWIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-github',
          templateUrl: './github.component.html',
          styleUrls: ['./github.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _section_card_section_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../section-card/section-card.component */
    "./src/app/section-card/section-card.component.ts");

    function HomeComponent_div_11_span_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "|");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_11_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_11_span_1_span_3_Template, 2, 0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r4 = ctx.$implicit;
        var isLast_r5 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, tag_r4), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r5);
      }
    }

    function HomeComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_11_span_1_Template, 4, 4, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tags);
      }
    }

    function HomeComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var socialMediaLink_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", socialMediaLink_r8.socialMediaLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", socialMediaLink_r8.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_12_div_1_Template, 3, 2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.socialMediaLinks);
      }
    }

    function HomeComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-section-card", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("section-icon-path", section_r9.sectionIconPath)("label", section_r9.label)("state", section_r9.stateUrl)("description", section_r9.description);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

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
        this.sections = [{
          sectionIconPath: '../../assets/images/section-cards/photography.jpg',
          label: 'Photography',
          description: '"You don\'t take a photograph, you make it." - Ansel Adams',
          stateUrl: '/photography'
        }, {
          sectionIconPath: '../../assets/images/section-cards/projects.png',
          label: 'Projects',
          description: '"If you optimize everything, you will always be unhappy." - Donald Knuth',
          stateUrl: '/projects'
        }, {
          sectionIconPath: '../../assets/images/section-cards/fyp.png',
          label: 'Research',
          description: '"If we knew what it was we were doing, it would not be called research, would it?" - Albert Einstein',
          stateUrl: '/research'
        }, {
          sectionIconPath: '../../assets/images/section-cards/blog.jpg',
          label: 'Blog',
          description: '"If we knew what it was we were doing, it would not be called research, would it?" - Albert Einstein',
          stateUrl: '/blog'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var windowAsAny = window;

          if (windowAsAny.twttr) {
            windowAsAny.twttr.widgets.load();
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 26,
      vars: 7,
      consts: [[1, "home"], [1, "content"], [1, "row"], [1, "col-xs-12", "col-sm-9", "adjust-responsive-width-by-media-query"], [1, "intro-content-container"], [1, "intro-content"], [1, "image"], [3, "src"], [1, "name"], ["class", "tags", 4, "ngIf"], ["class", "row social-media-links", 4, "ngIf"], [1, "sections-row"], ["class", "section-card-container", 4, "ngFor", "ngForOf"], [1, "col-3"], [1, "sidebar"], [1, "twitter-timeline-container"], ["data-theme", "dark", "data-width", "100%", "data-height", "50vh", "href", "https://twitter.com/edbidangi?ref_src=twsrc%5Etfw", 1, "twitter-timeline"], [1, "youtube-playlist-container"], [1, "youtube-header"], [1, "videos"], ["width", "100%", "src", "https://www.youtube.com/embed/videoseries?list=PLe7ei_ouCSxVkw9rMxah1CxZ59WbtenWz", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "tags"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "row", "social-media-links"], ["class", "col social-media-link", 4, "ngFor", "ngForOf"], [1, "col", "social-media-link"], ["target", "_new", 3, "href"], [1, "section-card-container"], [3, "section-icon-path", "label", "state", "description"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 2, 4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tweets by edbidangi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Videos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " by Vijesh ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "iframe", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tags.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.socialMediaLinks.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _section_card_section_card_component__WEBPACK_IMPORTED_MODULE_2__["SectionCardComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: ["@media only screen and (width: 576px) {\n  .adjust-responsive-width-by-media-query[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.home[_ngcontent-%COMP%] {\n  background-image: url('7.jpg');\n  background-repeat: none;\n  background-attachment: fixed;\n  background-position: center top;\n  background-size: cover;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  _-webkit-animation: slideBg 20s linear infinite 0s;\n  _        animation: slideBg 20s linear infinite 0s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  _height: 100vh;\n  text-align: center;\n  color: white;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%] {\n  _height: 100vh;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%] {\n  _position: absolute;\n  _top: 50%;\n  _left: 50%;\n  _transform: translate(-50%, -50%);\n  _width: 100%;\n  margin-top: 50px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 10px white;\n  -webkit-filter: drop-shadow(0px 0px 15px black);\n          filter: drop-shadow(0px 0px 15px black);\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-family: \"Century Gothic\";\n  font-size: 25px;\n  text-shadow: 0px 0px 7px black;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%]   .social-media-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  -webkit-filter: drop-shadow(0px 0px 2px black);\n          filter: drop-shadow(0px 0px 2px black);\n  transition: width 0.2s ease-in-out;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .social-media-links[_ngcontent-%COMP%]   .social-media-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  -webkit-animation: rotate360 0.2s linear;\n          animation: rotate360 0.2s linear;\n  width: 30px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sections-row[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sections-row[_ngcontent-%COMP%]   .section-card-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 5px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .intro-content-container[_ngcontent-%COMP%]   .intro-content[_ngcontent-%COMP%]   .sections-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   app-section-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .twitter-timeline-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .youtube-playlist-container[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  background-color: #292F33;\n  border-radius: 4px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .youtube-playlist-container[_ngcontent-%COMP%]   .youtube-header[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(145, 165, 180, 0.6);\n  text-align: left;\n  font-size: 12px;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .youtube-playlist-container[_ngcontent-%COMP%]   .youtube-header[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%] {\n  font-size: 21px;\n  padding-right: 5px;\n}\n@-webkit-keyframes rotate360 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate360 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes slideBg {\n  0% {\n    background-image: url('1.jpg');\n  }\n  25% {\n    background-image: url('2.jpg');\n  }\n  50% {\n    background-image: url('3.jpg');\n  }\n  75% {\n    background-image: url('4.jpg');\n  }\n  100% {\n    background-image: url('1.jpg');\n  }\n}\n@keyframes slideBg {\n  0% {\n    background-image: url('1.jpg');\n  }\n  25% {\n    background-image: url('2.jpg');\n  }\n  50% {\n    background-image: url('3.jpg');\n  }\n  75% {\n    background-image: url('4.jpg');\n  }\n  100% {\n    background-image: url('1.jpg');\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bW9oYW4vdmlqZXNobS5naXRodWIuaW8vd2Vic2l0ZS1pbi1hbmd1bGFyL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvdm1vaGFuL3ZpamVzaG0uZ2l0aHViLmlvL3dlYnNpdGUtaW4tYW5ndWxhci9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFJSTtJQUNJLGNBQUE7SUFDQSxlQUFBO0VDSk47QUFDRjtBRE9BO0VBQ0k7SUFDSSxhQUFBO0VDTE47QUFDRjtBRFFBO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFHQSxzQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7R0FDQSxpREFBQTtXQUFBLHlDQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtHQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNOSjtBRFFRO0dBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDTlo7QURPWTtHQUNJLGtCQUFBO0dBQ0EsUUFBQTtHQUNBLFNBQUE7R0FDQSxnQ0FBQTtHQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0xoQjtBRE9nQjtFQUNJLCtCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ0xwQjtBRFFnQjtFQUNJLGdCRWxEQztBRDRDckI7QURTZ0I7RUFDSSxnQkV0REM7RUZ1REQsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNQcEI7QURVZ0I7RUFDSSxnQkU3REM7QURxRHJCO0FEVXdCO0VBQ0ksV0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxrQ0FBQTtBQ1I1QjtBRFd3QjtFQUNJLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxXQUFBO0FDVDVCO0FEY2dCO0VBQ0ksZ0JBQUE7QUNacEI7QURhb0I7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNYeEI7QURjd0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNaNUI7QURtQlk7RUFDSSxnQkU3Rks7QUQ0RXJCO0FEbUJZO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDakJoQjtBRGtCZ0I7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2hCcEI7QURpQm9CO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDZnhCO0FEdUJBO0VBQ0k7SUFDSSx1QkFBQTtFQ3BCTjtFRHVCRTtJQUNJLHlCQUFBO0VDckJOO0VEd0JFO0lBQ0kseUJBQUE7RUN0Qk47QUFDRjtBRFdBO0VBQ0k7SUFDSSx1QkFBQTtFQ3BCTjtFRHVCRTtJQUNJLHlCQUFBO0VDckJOO0VEd0JFO0lBQ0kseUJBQUE7RUN0Qk47QUFDRjtBRHlCQTtFQUNJO0lBQ0ksOEJBQUE7RUN2Qk47RUQwQkU7SUFDSSw4QkFBQTtFQ3hCTjtFRDJCRTtJQUNJLDhCQUFBO0VDekJOO0VENEJFO0lBQ0ksOEJBQUE7RUMxQk47RUQ2QkU7SUFDSSw4QkFBQTtFQzNCTjtBQUNGO0FEUUE7RUFDSTtJQUNJLDhCQUFBO0VDdkJOO0VEMEJFO0lBQ0ksOEJBQUE7RUN4Qk47RUQyQkU7SUFDSSw4QkFBQTtFQ3pCTjtFRDRCRTtJQUNJLDhCQUFBO0VDMUJOO0VENkJFO0lBQ0ksOEJBQUE7RUMzQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGg6IDU3NnB4KSB7XG4gICAgLy8gQm90aCBjb2wteHMtMTIgYW5kIGNvbC1zbS05IGNsYXNzZXMgd2VyZSBhcHBsaWVkLlxuICAgIC8vIEZvciB0aGUgYm9yZGVybGluZSBwaXhlbCB2YWx1ZSBvZiA1NzYsIHdoZXJlIHRoZSB0cmFuc2l0aW9uIG9mIGJvb3RzdHJhcCBjbGFzc2VzIHdpbGwgaGFwcGVuLCB0aGUgc2lkZWJhciB3aWxsIGdldCBoaWRkZW4sIGJ1dCB0aGUgc20gY2xhc3Mgd291bGRuJ3QgaGF2ZSBiZWVuIGFwcGxpZWQuXG4gICAgLy8gU28sIGF0IHRoaXMgcGl4ZWwgdmFsdWUsIHdlIG5lZWQgdG8gZm9yY2UgdGhlIHdpZHRoIHRvIGdvIHRvIDEwMCUuXG4gICAgLmFkanVzdC1yZXNwb25zaXZlLXdpZHRoLWJ5LW1lZGlhLXF1ZXJ5IHtcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uaG9tZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2VzLzcuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgX2FuaW1hdGlvbjogc2xpZGVCZyAyMHMgbGluZWFyIGluZmluaXRlIDBzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIF9oZWlnaHQ6IDEwMHZoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICAuaW50cm8tY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgX2hlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAuaW50cm8tY29udGVudCB7XG4gICAgICAgICAgICAgICAgX3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBfdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgX2xlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICBfdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgX3dpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTVweCBibGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAudGFncyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdG9wLWRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdG9wLWRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDdweCBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEtbGlua3Mge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkbWFyZ2luLXRvcC1kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAuc29jaWFsLW1lZGlhLWxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IGJsYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlMzYwIDAuMnMgbGluZWFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNlY3Rpb25zLXJvdyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5zZWN0aW9uLWNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwLXNlY3Rpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgICAudHdpdHRlci10aW1lbGluZS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdG9wLWRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAueW91dHViZS1wbGF5bGlzdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJGMzM7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIC55b3V0dWJlLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQ1LDE2NSwxODAsLjYpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIC52aWRlb3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZTM2MCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUJnIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy8xLmpwZycpO1xuICAgIH1cblxuICAgIDI1JSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy8yLmpwZycpO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy8zLmpwZycpO1xuICAgIH1cblxuICAgIDc1JSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy80LmpwZycpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvMS5qcGcnKTtcbiAgICB9XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGg6IDU3NnB4KSB7XG4gIC5hZGp1c3QtcmVzcG9uc2l2ZS13aWR0aC1ieS1tZWRpYS1xdWVyeSB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvNy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBfYW5pbWF0aW9uOiBzbGlkZUJnIDIwcyBsaW5lYXIgaW5maW5pdGUgMHM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBfaGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIge1xuICBfaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUgLmNvbnRlbnQgLmludHJvLWNvbnRlbnQtY29udGFpbmVyIC5pbnRyby1jb250ZW50IHtcbiAgX3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgX3RvcDogNTAlO1xuICBfbGVmdDogNTAlO1xuICBfdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIF93aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5ob21lIC5jb250ZW50IC5pbnRyby1jb250ZW50LWNvbnRhaW5lciAuaW50cm8tY29udGVudCAuaW1hZ2Uge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHdoaXRlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTVweCBibGFjayk7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIgLmludHJvLWNvbnRlbnQgLnRhZ3Mge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhvbWUgLmNvbnRlbnQgLmludHJvLWNvbnRlbnQtY29udGFpbmVyIC5pbnRyby1jb250ZW50IC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQ2VudHVyeSBHb3RoaWNcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA3cHggYmxhY2s7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIgLmludHJvLWNvbnRlbnQgLnNvY2lhbC1tZWRpYS1saW5rcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaG9tZSAuY29udGVudCAuaW50cm8tY29udGVudC1jb250YWluZXIgLmludHJvLWNvbnRlbnQgLnNvY2lhbC1tZWRpYS1saW5rcyAuc29jaWFsLW1lZGlhLWxpbmsgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggYmxhY2spO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmhvbWUgLmNvbnRlbnQgLmludHJvLWNvbnRlbnQtY29udGFpbmVyIC5pbnRyby1jb250ZW50IC5zb2NpYWwtbWVkaWEtbGlua3MgLnNvY2lhbC1tZWRpYS1saW5rIGltZzpob3ZlciB7XG4gIGFuaW1hdGlvbjogcm90YXRlMzYwIDAuMnMgbGluZWFyO1xuICB3aWR0aDogMzBweDtcbn1cbi5ob21lIC5jb250ZW50IC5pbnRyby1jb250ZW50LWNvbnRhaW5lciAuaW50cm8tY29udGVudCAuc2VjdGlvbnMtcm93IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ob21lIC5jb250ZW50IC5pbnRyby1jb250ZW50LWNvbnRhaW5lciAuaW50cm8tY29udGVudCAuc2VjdGlvbnMtcm93IC5zZWN0aW9uLWNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDVweDtcbn1cbi5ob21lIC5jb250ZW50IC5pbnRyby1jb250ZW50LWNvbnRhaW5lciAuaW50cm8tY29udGVudCAuc2VjdGlvbnMtcm93IC5jb2wgYXBwLXNlY3Rpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhvbWUgLmNvbnRlbnQgLnNpZGViYXIgLnR3aXR0ZXItdGltZWxpbmUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ob21lIC5jb250ZW50IC5zaWRlYmFyIC55b3V0dWJlLXBsYXlsaXN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyRjMzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaG9tZSAuY29udGVudCAuc2lkZWJhciAueW91dHViZS1wbGF5bGlzdC1jb250YWluZXIgLnlvdXR1YmUtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDUsIDE2NSwgMTgwLCAwLjYpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uaG9tZSAuY29udGVudCAuc2lkZWJhciAueW91dHViZS1wbGF5bGlzdC1jb250YWluZXIgLnlvdXR1YmUtaGVhZGVyIC52aWRlb3Mge1xuICBmb250LXNpemU6IDIxcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUzNjAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVCZyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2VzLzEuanBnXCIpO1xuICB9XG4gIDI1JSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlcy8yLmpwZ1wiKTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvMy5qcGdcIik7XG4gIH1cbiAgNzUlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2VzLzQuanBnXCIpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1pbWFnZXMvMS5qcGdcIik7XG4gIH1cbn0iLCIkbWFyZ2luLXRvcC1kZWZhdWx0OiAyMHB4OyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/linkedin/linkedin.component.ts":
  /*!************************************************!*\
    !*** ./src/app/linkedin/linkedin.component.ts ***!
    \************************************************/

  /*! exports provided: LinkedinComponent */

  /***/
  function srcAppLinkedinLinkedinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkedinComponent", function () {
      return LinkedinComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../social-media-loading-icon/social-media-loading-icon.component */
    "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");

    var LinkedinComponent = /*#__PURE__*/function () {
      function LinkedinComponent() {
        _classCallCheck(this, LinkedinComponent);
      }

      _createClass(LinkedinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.location.href = 'http://linkedin.com/pub/vijesh-m/48/683/780';
        }
      }]);

      return LinkedinComponent;
    }();

    LinkedinComponent.ɵfac = function LinkedinComponent_Factory(t) {
      return new (t || LinkedinComponent)();
    };

    LinkedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LinkedinComponent,
      selectors: [["app-linkedin"]],
      decls: 1,
      vars: 0,
      consts: [["social-media-name", "LinkedIn"]],
      template: function LinkedinComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
        }
      },
      directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmtlZGluL2xpbmtlZGluLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkedinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-linkedin',
          templateUrl: './linkedin.component.html',
          styleUrls: ['./linkedin.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/section-card/section-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/section-card/section-card.component.ts ***!
    \********************************************************/

  /*! exports provided: SectionCardComponent */

  /***/
  function srcAppSectionCardSectionCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionCardComponent", function () {
      return SectionCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SectionCardComponent_img_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionCardComponent_img_2_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.navigateToState();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.sectionIconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SectionCardComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.label);
      }
    }

    function SectionCardComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.description);
      }
    }

    var SectionCardComponent = /*#__PURE__*/function () {
      function SectionCardComponent(router) {
        _classCallCheck(this, SectionCardComponent);

        this.router = router;
      }

      _createClass(SectionCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToState",
        value: function navigateToState() {
          this.router.navigate([this.state]);
        }
      }]);

      return SectionCardComponent;
    }();

    SectionCardComponent.ɵfac = function SectionCardComponent_Factory(t) {
      return new (t || SectionCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SectionCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionCardComponent,
      selectors: [["app-section-card"]],
      inputs: {
        sectionIconPath: ["section-icon-path", "sectionIconPath"],
        label: "label",
        state: "state",
        description: "description"
      },
      decls: 5,
      vars: 3,
      consts: [[1, "section-card"], [1, "image-container"], ["class", "section-icon", 3, "src", "click", 4, "ngIf"], ["class", "label", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "section-icon", 3, "src", "click"], [1, "label"], [1, "description"]],
      template: function SectionCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionCardComponent_img_2_Template, 1, 1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SectionCardComponent_div_3_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SectionCardComponent_div_4_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sectionIconPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".section-card[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  border-radius: 5px;\n  background-color: #fff;\n  max-width: 210px;\n  box-shadow: 0px 0px 10px #333;\n  transition: box-shadow 0.2s;\n}\n.section-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding-bottom: 5px;\n}\n.section-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img.section-icon[_ngcontent-%COMP%] {\n  width: 200px;\n  cursor: pointer;\n  transition: transform 0.2s linear;\n}\n.section-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img.section-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.section-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding-bottom: 5px;\n  color: #555;\n}\n.section-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  padding-bottom: 5px;\n}\n.section-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bW9oYW4vdmlqZXNobS5naXRodWIuaW8vd2Vic2l0ZS1pbi1hbmd1bGFyL3NyYy9hcHAvc2VjdGlvbi1jYXJkL3NlY3Rpb24tY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VjdGlvbi1jYXJkL3NlY3Rpb24tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUNHWjtBRERRO0VBQ0ksc0JBQUE7QUNHWjtBREFJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRVI7QURFQTtFQUNJLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uLWNhcmQvc2VjdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tY2FyZCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWF4LXdpZHRoOiAyMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzMzMztcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGltZy5zZWN0aW9uLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIGltZy5zZWN0aW9uLWljb246aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjNTU1O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbn1cblxuLnNlY3Rpb24tY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDA7XG59IiwiLnNlY3Rpb24tY2FyZCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1heC13aWR0aDogMjEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMzMzO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG59XG4uc2VjdGlvbi1jYXJkIC5pbWFnZS1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLnNlY3Rpb24tY2FyZCAuaW1hZ2UtY29udGFpbmVyIGltZy5zZWN0aW9uLWljb24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xufVxuLnNlY3Rpb24tY2FyZCAuaW1hZ2UtY29udGFpbmVyIGltZy5zZWN0aW9uLWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLnNlY3Rpb24tY2FyZCAubGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuLnNlY3Rpb24tY2FyZCAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODg4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uc2VjdGlvbi1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section-card',
          templateUrl: './section-card.component.html',
          styleUrls: ['./section-card.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        sectionIconPath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['section-icon-path']
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/social-media-loading-icon/social-media-loading-icon.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: SocialMediaLoadingIconComponent */

  /***/
  function srcAppSocialMediaLoadingIconSocialMediaLoadingIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMediaLoadingIconComponent", function () {
      return SocialMediaLoadingIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var SocialMediaLoadingIconComponent = /*#__PURE__*/function () {
      function SocialMediaLoadingIconComponent() {
        _classCallCheck(this, SocialMediaLoadingIconComponent);
      }

      _createClass(SocialMediaLoadingIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialMediaLoadingIconComponent;
    }();

    SocialMediaLoadingIconComponent.ɵfac = function SocialMediaLoadingIconComponent_Factory(t) {
      return new (t || SocialMediaLoadingIconComponent)();
    };

    SocialMediaLoadingIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialMediaLoadingIconComponent,
      selectors: [["app-social-media-loading-icon"]],
      inputs: {
        socialMediaName: ["social-media-name", "socialMediaName"]
      },
      decls: 5,
      vars: 1,
      consts: [[1, "spinner-container"], [1, "d-flex", "justify-content-center"], ["mode", "indeterminate", "diameter", "30"], [1, "loading-message"]],
      template: function SocialMediaLoadingIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Redirecting to ", ctx.socialMediaName, " ");
        }
      },
      directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinner"]],
      styles: [".spinner-container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n.spinner-container[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92bW9oYW4vdmlqZXNobS5naXRodWIuaW8vd2Vic2l0ZS1pbi1hbmd1bGFyL3NyYy9hcHAvc29jaWFsLW1lZGlhLWxvYWRpbmctaWNvbi9zb2NpYWwtbWVkaWEtbG9hZGluZy1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zb2NpYWwtbWVkaWEtbG9hZGluZy1pY29uL3NvY2lhbC1tZWRpYS1sb2FkaW5nLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtbWVkaWEtbG9hZGluZy1pY29uL3NvY2lhbC1tZWRpYS1sb2FkaW5nLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIC5sb2FkaW5nLW1lc3NhZ2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSIsIi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLnNwaW5uZXItY29udGFpbmVyIC5sb2FkaW5nLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaLoadingIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-social-media-loading-icon',
          templateUrl: './social-media-loading-icon.component.html',
          styleUrls: ['./social-media-loading-icon.component.scss']
        }]
      }], function () {
        return [];
      }, {
        socialMediaName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['social-media-name']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/twitter/twitter.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/twitter/twitter.component.ts ***!
    \**********************************************/

  /*! exports provided: TwitterComponent */

  /***/
  function srcAppTwitterTwitterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwitterComponent", function () {
      return TwitterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../social-media-loading-icon/social-media-loading-icon.component */
    "./src/app/social-media-loading-icon/social-media-loading-icon.component.ts");

    var TwitterComponent = /*#__PURE__*/function () {
      function TwitterComponent() {
        _classCallCheck(this, TwitterComponent);
      }

      _createClass(TwitterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.location.href = 'http://twitter.com/edbidangi';
        }
      }]);

      return TwitterComponent;
    }();

    TwitterComponent.ɵfac = function TwitterComponent_Factory(t) {
      return new (t || TwitterComponent)();
    };

    TwitterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TwitterComponent,
      selectors: [["app-twitter"]],
      decls: 1,
      vars: 0,
      consts: [["social-media-name", "Twitter"]],
      template: function TwitterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-social-media-loading-icon", 0);
        }
      },
      directives: [_social_media_loading_icon_social_media_loading_icon_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaLoadingIconComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3aXR0ZXIvdHdpdHRlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwitterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-twitter',
          templateUrl: './twitter.component.html',
          styleUrls: ['./twitter.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vmohan/vijeshm.github.io/website-in-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map