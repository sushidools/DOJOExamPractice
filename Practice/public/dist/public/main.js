(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-notfound/page-notfound.component */ "./src/app/page-notfound/page-notfound.component.ts");



var APP_ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationComponent"] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: _page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_2__["PageNotfoundComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\">\n  <h1>Pretend App</h1>\n</div>\n<div id=\"body\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _directives_validate_equal_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/validate-equal.directive */ "./src/app/directives/validate-equal.directive.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-notfound/page-notfound.component */ "./src/app/page-notfound/page-notfound.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
                _page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_12__["PageNotfoundComponent"],
                _directives_validate_equal_directive__WEBPACK_IMPORTED_MODULE_5__["EqualValidator"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["APP_ROUTES"]),
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_14__["DashboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieModule"].forRoot(),
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/dashboard/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-post/new-post.component */ "./src/app/dashboard/new-post/new-post.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_7__["NewPostComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_6__["dashboardRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            providers: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: dashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function() { return dashboardRoutes; });
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/dashboard/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-post/new-post.component */ "./src/app/dashboard/new-post/new-post.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");




var dashboardRoutes = [
    {
        path: 'dashboard',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"],
        canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
            { path: 'new/post', component: _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_2__["NewPostComponent"] }
        ]
    }
];


/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  align-content: center;\n  width: 98%;\n  padding: 10px;\n  margin-right: auto;\n  margin-left: auto;\n  overflow: scroll;\n  height: 680px;\n}\n#leftpic {\n  width: 40%;\n  display: inline-block;\n}\n.crop {\n  height: 250px;\n  width: 100%;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n}\n.crop img {\n  height: 100%;\n  width: auto;\n}\n#rightcontent {\n  width: 60%;\n  display: inline-block;\n  align-content: center;\n  vertical-align: top;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA5OCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGhlaWdodDogNjgwcHg7XG59XG4jbGVmdHBpYyB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jcm9wIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY3JvcCBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xufVxuI3JpZ2h0Y29udGVudCB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" *ngIf='posts'>\n  <div id=\"posts\" *ngFor=\"let p of posts\">\n    <fieldset>\n      <legend>{{ p.title }}</legend>\n      <div id=\"leftpic\">\n        <div class=\"crop\">\n          <img src=\"{{ p.url }}\" alt=\"a picture\" />\n        </div>\n      </div>\n      <div id=\"rightcontent\">\n        <h5>{{ p.content }}</h5>\n      </div>\n    </fieldset>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_post) {
        this._post = _post;
        this.posts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._post);
        this._post.getPosts().subscribe(function (posts) {
            console.log('Got our data ', posts);
            console.log('This is the this ', _this);
            _this.posts = posts;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/layout/layout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/layout/layout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  background:none!important;\n  color: blue;\n  border:none;\n  padding:0!important;\n  font: inherit;\n  /*border is optional*/\n  border-bottom:1px solid blue;\n  cursor: pointer;\n}\na {\n  background:none!important;\n  color: blue;\n  border:none;\n  padding:0!important;\n  text-decoration: none;\n  font: inherit;\n  /*border is optional*/\n  border-bottom:1px solid blue;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgYmFja2dyb3VuZDpub25lIWltcG9ydGFudDtcbiAgY29sb3I6IGJsdWU7XG4gIGJvcmRlcjpub25lO1xuICBwYWRkaW5nOjAhaW1wb3J0YW50O1xuICBmb250OiBpbmhlcml0O1xuICAvKmJvcmRlciBpcyBvcHRpb25hbCovXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsdWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmEge1xuICBiYWNrZ3JvdW5kOm5vbmUhaW1wb3J0YW50O1xuICBjb2xvcjogYmx1ZTtcbiAgYm9yZGVyOm5vbmU7XG4gIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udDogaW5oZXJpdDtcbiAgLypib3JkZXIgaXMgb3B0aW9uYWwqL1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibHVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/layout/layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/layout/layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Dashboard Layout</h3>\n    <p>\n      <a routerLink=\"home\" >Home</a> |\n      <a routerLink=\"new/post\"> Create New Post </a> |\n      <button (click)=\"logout()\">Logout</button>\n    </p>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/dashboard/layout/layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/layout/layout.component.ts ***!
  \******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.isAuthed = false;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.isAuthed$.subscribe(function (isLogged) {
            console.log(isLogged);
            _this.isAuthed = isLogged;
        });
    };
    LayoutComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function () {
            _this.router.navigateByUrl('/login');
        });
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/dashboard/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/dashboard/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/new-post/new-post.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/new-post/new-post.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9uZXctcG9zdC9uZXctcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/new-post/new-post.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/new-post/new-post.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"newpost\">\n  <div *ngIf=\"postErrors.length\">\n    <ul class=\"alert alert-danger\">\n      <li *ngFor=\"let error of postErrors\">{{ error }}</li>\n    </ul>\n  </div>\n  <form (submit)=\"onSubmit($event, addPost.value)\"\n  #addPost=\"ngForm\"\n  class=\"form-group\"\n  autocomplete=\"off\">\n  <fieldset>\n    <legend>Create A New Post</legend>\n    <div class=\"form-control\">\n      <label for=\"title\">Title: </label>\n      <input type=\"text\"\n      name=\"title\"\n      #title=\"ngModel\"\n      [(ngModel)]=\"post.title\">\n    </div>\n    <div class=\"form-control\">\n      <label for=\"content\">Content: </label>\n      <input type=\"text\"\n      name=\"content\"\n      #content=\"ngModel\"\n      [(ngModel)]=\"post.content\">\n    </div>\n    <div class=\"form-control\">\n      <label for=\"url\">Image Url: </label>\n      <input type=\"text\"\n      name=\"url\"\n      #url=\"ngModel\"\n      [(ngModel)]=\"post.url\">\n    </div>\n    <div class=\"form-control\">\n      <button>Add Post</button>\n    </div>\n  </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/new-post/new-post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/new-post/new-post.component.ts ***!
  \**********************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");





var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(_post, router) {
        this._post = _post;
        this.router = router;
        this.post = new _models__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        this.postErrors = [];
    }
    NewPostComponent.prototype.ngOnInit = function () { };
    NewPostComponent.prototype.onSubmit = function (event, post) {
        var _this = this;
        event.preventDefault();
        this.sub = this._post.addPost(post).subscribe(function (newPost) {
            console.log(newPost);
            _this.router.navigateByUrl('dashboard');
        }, function (error) {
            console.log(error);
            _this.handleErrors(error.error);
        });
    };
    NewPostComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    NewPostComponent.prototype.handleErrors = function (error) {
        this.postErrors = Array.isArray(error) ? error : [error];
    };
    NewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-post',
            template: __webpack_require__(/*! ./new-post.component.html */ "./src/app/dashboard/new-post/new-post.component.html"),
            styles: [__webpack_require__(/*! ./new-post.component.css */ "./src/app/dashboard/new-post/new-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/directives/validate-equal.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/validate-equal.directive.ts ***!
  \********************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            else {
                return this.reverse === 'true' ? true : false;
            }
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: "[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('validateEqual')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('reverse')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, _router) {
        this.auth = auth;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isAuthed()) {
            return true;
        }
        // navigate to login page
        this._router.navigate(['/login']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loginForm\">\n  <a style='text-align: right;' routerLink='/register'>New User</a>\n    <div *ngIf=\"errors.length\">\n      <ul class=\"alert alert-danger\">\n        <li *ngFor=\"let error of errors\">{{ error }}</li>\n      </ul>\n    </div>\n  <form (submit)=\"onSubmit(login.value)\" #login=\"ngForm\" class=\"form-group\">\n    <fieldset>\n      <legend>Login</legend>\n      <div class=\"form-control\">\n        <label for=\"email\">Email: </label>\n        <input\n        type=\"text\"\n        name=\"email\"\n        #name=\"ngModel\"\n        [(ngModel)]=\"user.email\"\n        >\n      </div>\n      <br>\n      <div class=\"form-control\">\n        <label for=\"password\">Password: </label>\n        <input\n        type=\"password\"\n        name=\"password\"\n        #password=\"ngModel\"\n        [(ngModel)]=\"user.password\"\n        minlength=\"8\">\n      </div>\n      <div class=\"form-control\">\n        <button *ngIf=\"login.valid\">Login</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.user = new _models__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (user) {
        var _this = this;
        console.log('logging in ', user);
        this.auth.login(user).subscribe(function (loggedUser) {
            console.log('logged ', loggedUser);
            _this.router.navigateByUrl('/dashboard');
        }, function (error) {
            console.log('got an error ', error.error);
            _this.handleErrors(error.error);
        });
    };
    LoginComponent.prototype.handleErrors = function (errors) {
        this.errors = Array.isArray(errors) ? errors : [errors];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: User, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/app/models/post.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _post__WEBPACK_IMPORTED_MODULE_1__["Post"]; });





/***/ }),

/***/ "./src/app/models/post.ts":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/page-notfound/page-notfound.component.css":
/*!***********************************************************!*\
  !*** ./src/app/page-notfound/page-notfound.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90Zm91bmQvcGFnZS1ub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-notfound/page-notfound.component.html":
/*!************************************************************!*\
  !*** ./src/app/page-notfound/page-notfound.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-notfound/page-notfound.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page-notfound/page-notfound.component.ts ***!
  \**********************************************************/
/*! exports provided: PageNotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotfoundComponent", function() { return PageNotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotfoundComponent = /** @class */ (function () {
    function PageNotfoundComponent() {
    }
    PageNotfoundComponent.prototype.ngOnInit = function () {
    };
    PageNotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-notfound',
            template: __webpack_require__(/*! ./page-notfound.component.html */ "./src/app/page-notfound/page-notfound.component.html"),
            styles: [__webpack_require__(/*! ./page-notfound.component.css */ "./src/app/page-notfound/page-notfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotfoundComponent);
    return PageNotfoundComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"registration\">\n  <a style='text-align: right;' routerLink='/login'>Returning User?</a>\n  <div *ngIf=\"registrationErrors.length\">\n    <ul class=\"alert alert-danger\">\n      <li *ngFor=\"let error of registrationErrors\">{{ error }}</li>\n    </ul>\n  </div>\n  <form (submit)=\"onSubmit($event, register.value)\"\n  #register=\"ngForm\"\n  class=\"form-group\"\n  autocomplete=\"off\" >\n    <fieldset>\n      <legend>Registration</legend>\n      <div class=\"form-control\">\n        <label for=\"firstName\">First Name: </label>\n        <input type=\"text\"\n        name=\"firstName\"\n        #firstName=\"ngModel\"\n        [(ngModel)]=\"user.firstName\">\n      </div>\n      <div class=\"form-control\">\n        <label for=\"lastName\">Last Name: </label>\n        <input type=\"text\"\n        name=\"lastName\"\n        #lastName=\"ngModel\"\n        [(ngModel)]=\"user.lastName\">\n      </div>\n      <div class=\"form-control\">\n        <label for=\"email\">Email: </label>\n        <input ttype=\"email\"\n        name=\"email\"\n        #username=\"ngModel\"\n        [(ngModel)]=\"user.email\">\n      </div>\n      <div class=\"form-control\">\n        <label for=\"password\">Password: </label>\n        <input type=\"password\"\n        name=\"password\"\n        #password=\"ngModel\"\n        [(ngModel)]=\"user.password\"\n        validateEqual='confirmPassword'\n        reverse='true'\n        minlength=\"8\">\n      </div>\n      <div class=\"form-control\">\n        <label for=\"confirmPassword\">Confirm Password: </label>\n        <input type=\"password\"\n        name='confirmPassword'\n        [ngModel]='user.confirmPassword'\n        required validateEqual='password'\n        #confirmPassword=\"ngModel\">\n      </div>\n      <div class=\"form-control\">\n        <button *ngIf='register.valid'>Register</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = new _models__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.registrationErrors = [];
    }
    RegistrationComponent.prototype.ngOnInit = function () { };
    RegistrationComponent.prototype.onSubmit = function (event, user) {
        var _this = this;
        event.preventDefault();
        this.sub = this.auth.register(user).subscribe(function (loggedUser) {
            console.log(loggedUser);
            _this.router.navigateByUrl('dashboard');
        }, function (error) {
            console.log(error);
            _this.handleErrors(error.error);
        });
    };
    RegistrationComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    RegistrationComponent.prototype.handleErrors = function (error) {
        this.registrationErrors = Array.isArray(error) ? error : [error];
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");






var AuthService = /** @class */ (function () {
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.base = '/api/auth';
        this.isAuthed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.isAuthed());
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http
            .post(this.base + "/login", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.isAuthed$.next(true); }));
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        return this.http
            .post(this.base + "/register", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.isAuthed$.next(true); }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http
            .delete(this.base + "/logout")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.isAuthed$.next(false); }));
    };
    AuthService.prototype.isAuthed = function () {
        var expired = parseInt(this.cookieService.get('expiration'), 10);
        var userID = this.cookieService.get('userID');
        var session = this.cookieService.get('session');
        return Boolean(expired && session && userID && expired > Date.now());
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.base = '/api/post';
    }
    PostService.prototype.addPost = function (post) {
        return this.http
            .post(this.base + "/new/post", post);
    };
    PostService.prototype.getPosts = function () {
        return this.http
            .get(this.base);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksandradooley/Desktop/Practice/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map