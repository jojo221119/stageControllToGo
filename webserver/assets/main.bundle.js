webpackJsonp([1,4],{

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(459);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/goWorkspace/src/gitlab.mary-cap.de/VV/StageControllToGo/stageControlToGoFrontend/src/main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'StageControl To Go';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(517),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/goWorkspace/src/gitlab.mary-cap.de/VV/StageControllToGo/stageControlToGoFrontend/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__element_viewer_element_viewer_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__script_view_script_view_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(443);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    { path: 'script', component: __WEBPACK_IMPORTED_MODULE_6__script_view_script_view_component__["a" /* ScriptViewComponent */] },
    { path: '',
        redirectTo: 'script',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__element_viewer_element_viewer_component__["a" /* ElementViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__script_view_script_view_component__["a" /* ScriptViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/goWorkspace/src/gitlab.mary-cap.de/VV/StageControllToGo/stageControlToGoFrontend/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementViewerComponent = (function () {
    function ElementViewerComponent() {
    }
    ElementViewerComponent.prototype.ngOnInit = function () {
    };
    ElementViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-element-viewer',
            template: __webpack_require__(518),
            styles: [__webpack_require__(514)]
        }), 
        __metadata('design:paramtypes', [])
    ], ElementViewerComponent);
    return ElementViewerComponent;
}());
//# sourceMappingURL=C:/goWorkspace/src/gitlab.mary-cap.de/VV/StageControllToGo/stageControlToGoFrontend/src/element-viewer.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptProviderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScriptProviderService = (function () {
    function ScriptProviderService(http) {
        this.http = http;
        this.scriptUrl = '/api/script';
    }
    ScriptProviderService.prototype.getScript = function () {
        //return Promise.resolve(MOCKSCRIPT)
        return this.http.get(this.scriptUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ScriptProviderService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ScriptProviderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ScriptProviderService);
    return ScriptProviderService;
    var _a;
}());
//# sourceMappingURL=C:/goWorkspace/src/gitlab.mary-cap.de/VV/StageControllToGo/stageControlToGoFrontend/src/script-provider.service.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_provider_service__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScriptViewComponent = (function () {
    function ScriptViewComponent(scriptProviderService) {
        this.scriptProviderService = scriptProviderService;
        this.script = null;
    }
    ScriptViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scriptProviderService.getScript().then(function (response) {
            console.log(response);
            console.log(response.Document[0]);
            _this.script = response.Document;
            console.log(_this.script);
        });
    };
    ScriptViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-script-view',
            template: __webpack_require__(519),
            styles: [__webpack_require__(515)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__script_provider_service__["a" /* ScriptProviderService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__script_provider_service__["a" /* ScriptProviderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__script_provider_service__["a" /* ScriptProviderService */]) === 'function' && _a) || Object])
    ], ScriptViewComponent);
    return ScriptViewComponent;
    var _a;
}());
//# sourceMappingURL=C:/goWorkspace/src/gitlab.mary-cap.de/VV/StageControllToGo/stageControlToGoFrontend/src/script-view.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/goWorkspace/src/gitlab.mary-cap.de/VV/StageControllToGo/stageControlToGoFrontend/src/environment.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)(false);
// imports


// module
exports.push([module.i, "body, div {\r\n  font-family: Arial, \"Helvetica New\", Helvetica, sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(88)(false);
// imports


// module
exports.push([module.i, ".content-container {\r\n  height: 100%;\r\n  margin: 0.5em 0em 0.5em 0em;\r\n  color: #f2f2f2;\r\n  background-color: #778899;\r\n}\r\n\r\n/deep/ .jumbotron, .navbar {\r\n  color: #f2f2f2;\r\n  background-color: #778899;\r\n}\r\n\r\n.regie {\r\n font-style: italic;\r\n color: #FFE600;\r\n}\r\n\r\n.text {\r\n  display: inline !important;\r\n  line-height: 10px;\r\n}\r\n\r\n.text-head {\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n}\r\n\r\n.setting{\r\n  height: 2em;\r\n  background-color: #545454;\r\n  width: 100%;\r\n  text-align: center;\r\n  border-radius: 0.5em;\r\n  font-size: 1.2em;\r\n  color: white;\r\n}\r\n\r\n.setting:hover {\r\n  background-color: #5fb200;\r\n  cursor: pointer;\r\n}\r\n\r\n.setting:visited {\r\n  background-color: red;\r\n}\r\n\r\n.content {\r\n\r\n  display: inline-block;\r\n  margin: 0.5em;\r\n  padding: 0.5em;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n          aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      </div>\n      <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n  </nav>\n\n  <div class=\"jumbotron\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  element-viewer works!\r\n</p>\r\n"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let element of script\" class=\"content-container\">\r\n\r\n  <div *ngIf=\"element.Name\" class=\"text-head\">\r\n    {{element.Name}}:\r\n  </div>\r\n\r\n  <ng-container *ngFor=\"let typedElement of element.Body\">\r\n    <ng-container [ngSwitch]=\"typedElement.Type\">\r\n      <template ngSwitchCase=\"Text\" style=\"display: inline-block\">\r\n        <div class=\"text content\">\r\n          {{typedElement.Body}}\r\n        </div>\r\n      </template>\r\n      <template ngSwitchCase=\"Seite\" style=\"display: inline-block\">\r\n        <!--\r\n        <div class=\"text content\">\r\n          {{typedElement.Body}}\r\n        </div>\r\n-->\r\n      </template>\r\n      <template ngSwitchCase=\"AudioEinstellung\">\r\n        <div class=\"setting content\">\r\n          {{typedElement.Body}}\r\n        </div>\r\n      </template>\r\n      <template ngSwitchCase=\"Einstellung\">\r\n        <div class=\"setting content\">\r\n          {{typedElement.Body}}\r\n        </div>\r\n      </template>\r\n      <template ngSwitchCase=\"LangsameEinstellung\">\r\n        <div class=\"setting content\">\r\n          {{typedElement.Body}}\r\n        </div>\r\n      </template>\r\n      <template ngSwitchCase=\"SchnelleEinstellung\">\r\n        <div class=\"setting content\">\r\n          {{typedElement.Body}}\r\n        </div>\r\n      </template>\r\n      <template ngSwitchCase=\"Regie\">\r\n        <div class=\"regie content\">\r\n          {{typedElement.Body}}\r\n        </div>\r\n      </template>\r\n      <template ngSwitchCase=\"Setting\">\r\n        <div class=\"setting content\">\r\n          {{typedElement.Body}}\r\n        </div>\r\n      </template>\r\n      <div *ngSwitchDefault class=\"content\">\r\n        Unbekannter Elementtyp.\r\n      </div>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>"

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[537]);
//# sourceMappingURL=main.bundle.js.map