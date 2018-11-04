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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutes, routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_signs_signs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signs/signs.component */ "./src/app/components/signs/signs.component.ts");
/* harmony import */ var _components_rallies_rallies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rallies/rallies.component */ "./src/app/components/rallies/rallies.component.ts");
/* harmony import */ var _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/generator/generator.component */ "./src/app/components/generator/generator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppRoutes = {
    Home: '',
    Signs: 'signs',
    Generator: 'generator',
    Rallies: 'rallies'
};
var routes = [
    { path: AppRoutes.Home, component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: AppRoutes.Signs, component: _components_signs_signs_component__WEBPACK_IMPORTED_MODULE_3__["SignsComponent"] },
    { path: AppRoutes.Generator, component: _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_5__["GeneratorComponent"] },
    { path: AppRoutes.Rallies, component: _components_rallies_rallies_component__WEBPACK_IMPORTED_MODULE_4__["RalliesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_signs_signs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signs/signs.component */ "./src/app/components/signs/signs.component.ts");
/* harmony import */ var _components_rallies_rallies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rallies/rallies.component */ "./src/app/components/rallies/rallies.component.ts");
/* harmony import */ var _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/generator/generator.component */ "./src/app/components/generator/generator.component.ts");
/* harmony import */ var _services_drag_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/drag.service */ "./src/app/services/drag.service.ts");
/* harmony import */ var _directives_drag_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/drag.directive */ "./src/app/directives/drag.directive.ts");
/* harmony import */ var _directives_drop_target_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/drop-target.directive */ "./src/app/directives/drop-target.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _components_signs_signs_component__WEBPACK_IMPORTED_MODULE_5__["SignsComponent"],
                _components_rallies_rallies_component__WEBPACK_IMPORTED_MODULE_6__["RalliesComponent"],
                _components_generator_generator_component__WEBPACK_IMPORTED_MODULE_7__["GeneratorComponent"],
                _directives_drag_directive__WEBPACK_IMPORTED_MODULE_9__["DraggableDirective"],
                _directives_drop_target_directive__WEBPACK_IMPORTED_MODULE_10__["DropTargetDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_services_drag_service__WEBPACK_IMPORTED_MODULE_8__["DragService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/generator/generator.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/generator/generator.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generator-container {\r\n    display: flex;\r\n    \r\n    margin:30px;\r\n}\r\n\r\n.info-text {\r\n    height: 25px;\r\n}\r\n\r\ncanvas, .canvas {\r\n    border: 3px solid skyblue;\r\n    width: 1000px;\r\n    height: 700px;\r\n    margin-right: 50px;\r\n    position: relative;;\r\n}\r\n\r\n.signs {\r\n    display: flex;\r\n    width: 620px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.sign img {\r\n    max-width: 100px;\r\n    margin: 5px;\r\n    border: 1px solid gray;\r\n}\r\n\r\n.rally-sign {\r\n    position: absolute;\r\n    max-width: 100px;\r\n}\r\n\r\n.arrow {\r\n    margin: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/generator/generator.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/generator/generator.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"no-print\">Pálya Generátor <img src=\"./assets/info.png\" [title]=\"infoText\" class=\"info-text\"></h2>\n\n<div class=\"generator-container\">\n  <div>\n    <div class=\"canvas\" id=\"canvas\" #rallyCanvas  myDropTarget (myDrop)=\"onDrop($event)\">\n        <img class=\"rally-sign\" *ngFor=\"let sign of rallySigns\" \n        [style.left]=\"sign.posX\" [style.top]=\"sign.posY\" \n        src=\"./assets/signs/hu/{{sign.image}}.png\" alt=\"sign.name\" (click)=\"rotate($event, sign)\">\n    </div>\n    <div class=\"arrow-container no-print\">\n      <img class=\"arrow\" src=\"./assets/signs/hu/arrow_up.png\" [myDraggable]=\"{data: {id:0, name:'arrow', image:'arrow_up'}}\" alt=\"arrow\">\n      <img class=\"arrow\" src=\"./assets/signs/hu/arrow_right.png\" [myDraggable]=\"{data: {id:0, name:'arrow', image:'arrow_right'}}\" alt=\"arrow\">\n      <img class=\"arrow\" src=\"./assets/signs/hu/arrow_down.png\" [myDraggable]=\"{data: {id:0, name:'arrow', image:'arrow_down'}}\" alt=\"arrow\">\n      <img class=\"arrow\" src=\"./assets/signs/hu/arrow_left.png\" [myDraggable]=\"{data: {id:0, name:'arrow', image:'arrow_left'}}\" alt=\"arrow\">\n    </div>\n  </div>\n  <div class=\"signs no-print\">\n      <div *ngFor=\"let sign of signs.signs\" class=\"sign\">\n          <img [myDraggable]=\"{data: sign}\" src=\"./assets/signs/hu/{{sign.image}}.png\" [title]=\"sign.name\"> \n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/generator/generator.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/generator/generator.component.ts ***!
  \*************************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_sign_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/sign.models */ "./src/app/models/sign.models.ts");
/* harmony import */ var src_app_models_sign_hu_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/sign-hu.models */ "./src/app/models/sign-hu.models.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent() {
        this.signs = src_app_models_sign_hu_models__WEBPACK_IMPORTED_MODULE_2__["NoviceSigns"].find(function (set) { return set.category === src_app_models_sign_models__WEBPACK_IMPORTED_MODULE_1__["RallyCategory"].Basic; });
        this.rallySigns = [];
        this.infoText = 'A jelek és nyílak húzásával készítsd el a saját pályádat. ' +
            'Az elhelyezett elemeket tudod forgatni kattintással. Nyomtatáshoz használd a Chrome beépitett funckióját (Ctrl + P).';
    }
    GeneratorComponent.prototype.onDrop = function (data) {
        this.rallySigns.push(__assign({}, data.data, { posX: data.event.layerX - data.data.offsetX + 'px', posY: data.event.layerY - data.data.offsetY + 'px' }));
    };
    GeneratorComponent.prototype.rotate = function (event, sign) {
        if (!sign.rotateIndex) {
            event.target.style.transform = 'rotate(-90deg)';
            sign.rotateIndex = 90;
        }
        else if (sign.rotateIndex === 90) {
            event.target.style.transform = 'rotate(-180deg)';
            sign.rotateIndex = 180;
        }
        else if (sign.rotateIndex === 180) {
            event.target.style.transform = 'rotate(-270deg)';
            sign.rotateIndex = 270;
        }
        else if (sign.rotateIndex === 270) {
            event.target.style.transform = 'rotate(0deg)';
            sign.rotateIndex = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rallyCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GeneratorComponent.prototype, "canvasRef", void 0);
    GeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generator',
            template: __webpack_require__(/*! ./generator.component.html */ "./src/app/components/generator/generator.component.html"),
            styles: [__webpack_require__(/*! ./generator.component.css */ "./src/app/components/generator/generator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneratorComponent);
    return GeneratorComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\n  <a [routerLink]=\"[ '/signs' ]\">Jelek</a>\n  <a [routerLink]=\"[ '/generator' ]\">Pálya generáló</a>\n  <a [routerLink]=\"[ '/rallies' ]\">Pálya sablonok</a>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/rallies/rallies.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/rallies/rallies.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rallies/rallies.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/rallies/rallies.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Pre-defined Rallies</h2>\n<span><i>Scroll for further rally setups</i></span>\n\n<div>\n<img *ngFor=\"let rally of rallies\" src=\"./assets/rallies/{{rally.image}}\" alt=\"{{rally.name}}\">\n</div>"

/***/ }),

/***/ "./src/app/components/rallies/rallies.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/rallies/rallies.component.ts ***!
  \*********************************************************/
/*! exports provided: RalliesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RalliesComponent", function() { return RalliesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RalliesComponent = /** @class */ (function () {
    function RalliesComponent() {
        this.rallies = [];
    }
    RalliesComponent.prototype.ngOnInit = function () {
        this.rallies = [
            {
                id: 1,
                name: 'first',
                image: 'first.jpg'
            }
        ];
    };
    RalliesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rallies',
            template: __webpack_require__(/*! ./rallies.component.html */ "./src/app/components/rallies/rallies.component.html"),
            styles: [__webpack_require__(/*! ./rallies.component.css */ "./src/app/components/rallies/rallies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RalliesComponent);
    return RalliesComponent;
}());



/***/ }),

/***/ "./src/app/components/signs/signs.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/signs/signs.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu-container div a {\r\n    display: inline-block;\r\n    margin: 5px;\r\n    padding: 10px;\r\n}\r\n\r\n.country-selector, .level-selector {\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.sign-container {\r\n    display:flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.sign img {\r\n    max-width: 180px;\r\n    margin: 10px;\r\n    border: 1px solid grey;\r\n}"

/***/ }),

/***/ "./src/app/components/signs/signs.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/signs/signs.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\n  <div class=\"country-selector\">\n    <a [class.selected]=\"selectedLanguage === Language.HU\">Magyar szabályzat</a>\n  </div>\n  <div class=\"level-selector\">\n    <a [class.selected]=\"selectedLevel === HUN_LEVELS.RO_B\">RO B</a>\n    <a [class.selected]=\"selectedLevel === HUN_LEVELS.RO_1\">RO 1</a>\n    <a [class.selected]=\"selectedLevel === HUN_LEVELS.RO_2\">RO 2</a>\n    <a [class.selected]=\"selectedLevel === HUN_LEVELS.RO_3\">RO 3</a>\n  </div>\n</div>\n<div class=\"sign-container\">\n  <div *ngFor=\"let sign of noviceSigns.signs\" class=\"sign\">\n    <img src=\"./assets/signs/{{selectedLanguage}}/{{sign.image}}.png\" [title]=\"sign.desc\"> \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signs/signs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/signs/signs.component.ts ***!
  \*****************************************************/
/*! exports provided: SignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignsComponent", function() { return SignsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_sign_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/sign.models */ "./src/app/models/sign.models.ts");
/* harmony import */ var src_app_models_sign_hu_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/sign-hu.models */ "./src/app/models/sign-hu.models.ts");
/* harmony import */ var src_app_enum_hun_levels_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enum/hun-levels.enum */ "./src/app/enum/hun-levels.enum.ts");
/* harmony import */ var src_app_enum_language_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enum/language.enum */ "./src/app/enum/language.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignsComponent = /** @class */ (function () {
    function SignsComponent() {
        this.noviceSigns = src_app_models_sign_hu_models__WEBPACK_IMPORTED_MODULE_2__["NoviceSigns"].find(function (set) { return set.category === src_app_models_sign_models__WEBPACK_IMPORTED_MODULE_1__["RallyCategory"].Basic; });
        this.selectedLanguage = src_app_enum_language_enum__WEBPACK_IMPORTED_MODULE_4__["Language"].HU;
        this.selectedLevel = src_app_enum_hun_levels_enum__WEBPACK_IMPORTED_MODULE_3__["HUN_LEVELS"].RO_B;
        this.HUN_LEVELS = src_app_enum_hun_levels_enum__WEBPACK_IMPORTED_MODULE_3__["HUN_LEVELS"];
        this.Language = src_app_enum_language_enum__WEBPACK_IMPORTED_MODULE_4__["Language"];
    }
    SignsComponent.prototype.ngOnInit = function () {
    };
    SignsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signs',
            template: __webpack_require__(/*! ./signs.component.html */ "./src/app/components/signs/signs.component.html"),
            styles: [__webpack_require__(/*! ./signs.component.css */ "./src/app/components/signs/signs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignsComponent);
    return SignsComponent;
}());



/***/ }),

/***/ "./src/app/directives/drag.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/directives/drag.directive.ts ***!
  \**********************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/drag.service */ "./src/app/services/drag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(dragService) {
        this.dragService = dragService;
        this.options = {};
    }
    Object.defineProperty(DraggableDirective.prototype, "draggable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableDirective.prototype, "myDraggable", {
        set: function (options) {
            if (options) {
                this.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.onDragStart = function (event) {
        var _a = this.options, _b = _a.zone, zone = _b === void 0 ? 'zone' : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
        data.offsetX = event.layerX - event.target.offsetLeft;
        data.offsetY = event.layerY - event.target.offsetTop;
        data.height = event.target.clientHeight;
        data.width = event.target.clientWidth;
        this.dragService.startDrag(zone);
        event.dataTransfer.setData('Text', JSON.stringify(data));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('draggable'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DraggableDirective.prototype, "draggable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "myDraggable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDragStart", null);
    DraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[myDraggable]'
        }),
        __metadata("design:paramtypes", [_services_drag_service__WEBPACK_IMPORTED_MODULE_1__["DragService"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/directives/drop-target.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/drop-target.directive.ts ***!
  \*****************************************************/
/*! exports provided: DropTargetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropTargetDirective", function() { return DropTargetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/drag.service */ "./src/app/services/drag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropTargetDirective = /** @class */ (function () {
    function DropTargetDirective(dragService) {
        this.dragService = dragService;
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = {};
    }
    Object.defineProperty(DropTargetDirective.prototype, "myDropTarget", {
        set: function (options) {
            if (options) {
                this.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    DropTargetDirective.prototype.onDragOver = function (event) {
        var _a = this.options.zone, zone = _a === void 0 ? 'zone' : _a;
        if (this.dragService.accepts(zone)) {
            event.preventDefault();
        }
    };
    DropTargetDirective.prototype.onDrop = function (event) {
        if ('canvas' === event.target.id) {
            var data = JSON.parse(event.dataTransfer.getData('Text'));
            this.drop.next({ event: event, data: data });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DropTargetDirective.prototype, "myDropTarget", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('myDrop'),
        __metadata("design:type", Object)
    ], DropTargetDirective.prototype, "drop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragenter', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropTargetDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropTargetDirective.prototype, "onDrop", null);
    DropTargetDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[myDropTarget]'
        }),
        __metadata("design:paramtypes", [_services_drag_service__WEBPACK_IMPORTED_MODULE_1__["DragService"]])
    ], DropTargetDirective);
    return DropTargetDirective;
}());



/***/ }),

/***/ "./src/app/enum/hun-levels.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/enum/hun-levels.enum.ts ***!
  \*****************************************/
/*! exports provided: HUN_LEVELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUN_LEVELS", function() { return HUN_LEVELS; });
var HUN_LEVELS;
(function (HUN_LEVELS) {
    HUN_LEVELS["RO_B"] = "RO_B";
    HUN_LEVELS["RO_1"] = "RO_1";
    HUN_LEVELS["RO_2"] = "RO_2";
    HUN_LEVELS["RO_3"] = "RO_3";
})(HUN_LEVELS || (HUN_LEVELS = {}));


/***/ }),

/***/ "./src/app/enum/language.enum.ts":
/*!***************************************!*\
  !*** ./src/app/enum/language.enum.ts ***!
  \***************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
var Language;
(function (Language) {
    Language["HU"] = "hu";
    Language["EN_US"] = "en-us";
})(Language || (Language = {}));


/***/ }),

/***/ "./src/app/models/sign-hu.models.ts":
/*!******************************************!*\
  !*** ./src/app/models/sign-hu.models.ts ***!
  \******************************************/
/*! exports provided: NoviceSigns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoviceSigns", function() { return NoviceSigns; });
/* harmony import */ var _sign_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign.models */ "./src/app/models/sign.models.ts");

var NoviceSigns = [
    {
        id: 1,
        name: 'Novice Set',
        desc: '',
        category: _sign_models__WEBPACK_IMPORTED_MODULE_0__["RallyCategory"].Basic,
        signs: [
            {
                id: 1,
                name: 'Start',
                desc: "Miut\u00E1n a teljes\u00EDtm\u00E9nyb\u00EDr\u00F3 \u00E1tadta az akad\u00E1lyp\u00E1ly\u00E1t, a p\u00E1ros norm\u00E1l l\u00E9p\u00E9ssel halad \u00E1t a startvonalon. A p\u00E1rosnak el\u0151tte nem kell \u00FAj alap\u00E1ll\u00E1st felvennie, hanem r\u00F6gt\u00F6n elindulhat a felk\u00E9sz\u00FCl\u00E9s ut\u00E1n. A b\u00EDr\u00E1l\u00E1s \u00E9s az id\u0151m\u00E9r\u00E9s a startvonal \u00E1tl\u00E9p\u00E9s\u00E9vel indul.",
                image: '001-start'
            },
            {
                id: 2,
                name: 'Cél',
                desc: "Amint a p\u00E1ros a t\u00E1bla bal oldal\u00E1n \u00E1thalad a c\u00E9lvonalon, le\u00E1ll az id\u0151, \u00E9s kisz\u00E1molj\u00E1k a futamid\u0151t. Az \u00E9rt\u00E9kel\u00E9s a c\u00E9lvonal \u00E1tl\u00E9p\u00E9s\u00E9vel \u00E9r v\u00E9get. Ut\u00E1na lehet a kuty\u00E1t simogat\u00E1ssal, j\u00E1t\u00E9kkal, jutalomfalatokkal \u00E9s j\u00E1t\u00E9kszerekkel jutalmazni.",
                image: '002-finish'
            },
            {
                id: 3,
                name: 'Lábhoz kerülés',
                desc: "",
                image: '003-labhoz-kerules'
            },
            {
                id: 4,
                name: 'Lábhoz',
                desc: "",
                image: '004-labhoz'
            },
            {
                id: 5,
                name: 'Lábhoz kerülés - lépés indul',
                desc: "",
                image: '005-labhoz-kerules-lepes-indul'
            },
            {
                id: 6,
                name: 'Lábhoz - lépés indul',
                desc: "",
                image: '006-labhoz-lepes-indul'
            },
            {
                id: 7,
                name: 'Stop',
                desc: "",
                image: '007-stop'
            },
            {
                id: 8,
                name: 'Stop - fektetés',
                desc: "",
                image: '008-stop-fektetes'
            },
            {
                id: 9,
                name: 'Stop - fektetés - ültetés',
                desc: "",
                image: '009-stop-fektetes-ultetes'
            },
            {
                id: 10,
                name: 'Stop - kutya megkerülése',
                desc: "",
                image: '010-stop-kutya-megkerulese'
            },
            {
                id: 11,
                name: 'Stop - Fektetés - Kutya megkerülése',
                desc: "",
                image: '011-stop-fektetes-kutya-megkerulese'
            },
            {
                id: 12,
                name: 'Jobbra át',
                desc: "",
                image: '012-jobbra-at'
            },
            {
                id: 13,
                name: 'Balra át',
                desc: "",
                image: '013-balra-at'
            },
            {
                id: 14,
                name: 'Hátra arc jobbra',
                desc: "",
                image: '014-hatra-arc-jobbra'
            },
            {
                id: 15,
                name: 'Hátra arc balra',
                desc: "",
                image: '015-hatra-arc-balra'
            },
            {
                id: 16,
                name: 'Hátra arc - vezető balra - kutya jobbra',
                desc: "",
                image: '016-hatra-arc-vezeto-balra-kutya-jobbra'
            },
            {
                id: 17,
                name: '270° jobbra',
                desc: "",
                image: '017-270-jobbra'
            },
            {
                id: 18,
                name: '270° balra',
                desc: "",
                image: '018-270-balra'
            },
            {
                id: 19,
                name: '360° jobbra',
                desc: "",
                image: '019-360-jobbra'
            },
            {
                id: 20,
                name: 'Beülés',
                desc: "",
                image: '020-beules'
            },
            {
                id: 21,
                name: 'Lassú lépés',
                desc: "",
                image: '021-lassu-lepes'
            },
            {
                id: 22,
                name: 'Futólépés',
                desc: "",
                image: '022-futo-lepes'
            },
            {
                id: 23,
                name: 'Normál lépés',
                desc: "",
                image: '023-normal-lepes'
            },
            {
                id: 24,
                name: 'Spirál jobbra - kutya kívül',
                desc: "",
                image: '024-spiral-jobbra-kutya-kivul'
            },
            {
                id: 25,
                name: 'Spirál balra - kutya belül',
                desc: "",
                image: '025-spiral-balra-kutya-belul'
            },
            {
                id: 26,
                name: 'Szlalom',
                desc: "",
                image: '026-szlalom'
            },
            {
                id: 27,
                name: 'Szlalom oda vissza',
                desc: "",
                image: '027-szlalom-oda-vissza'
            },
            {
                id: 28,
                name: 'Nyolcas kerülés - zavarás nélkül',
                desc: "",
                image: '028-nyolcas-kerules-zavaras-nelkul'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/models/sign.models.ts":
/*!***************************************!*\
  !*** ./src/app/models/sign.models.ts ***!
  \***************************************/
/*! exports provided: Sign, RallySign, RallyCategory, SignsSet, NoviceSigns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sign", function() { return Sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RallySign", function() { return RallySign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RallyCategory", function() { return RallyCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignsSet", function() { return SignsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoviceSigns", function() { return NoviceSigns; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sign = /** @class */ (function () {
    function Sign() {
    }
    return Sign;
}());

var RallySign = /** @class */ (function (_super) {
    __extends(RallySign, _super);
    function RallySign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RallySign;
}(Sign));

var RallyCategory;
(function (RallyCategory) {
    RallyCategory[RallyCategory["Basic"] = 0] = "Basic";
    RallyCategory[RallyCategory["LevelOne"] = 1] = "LevelOne";
    RallyCategory[RallyCategory["LevelTwo"] = 2] = "LevelTwo";
    RallyCategory[RallyCategory["LevelThree"] = 3] = "LevelThree";
})(RallyCategory || (RallyCategory = {}));
var SignsSet = /** @class */ (function () {
    function SignsSet() {
    }
    return SignsSet;
}());

var NoviceSigns = [
    {
        id: 1,
        name: 'Novice Set',
        desc: '',
        category: RallyCategory.Basic,
        signs: [
            {
                id: 1,
                name: 'Start',
                desc: 'Indicates the beginning of the course. The dog does not have to be sitting at the start',
                image: '001-start'
            },
            {
                id: 2,
                name: 'Finish',
                desc: ' Indicates the end of the course - timing stops.',
                image: '002-finish'
            },
            {
                id: 3,
                name: 'Stop and Sit',
                desc: 'While heeling, the handler halts and the dog sits in heel position. (Stationary)',
                image: '003-stop_sit'
            },
            {
                id: 4,
                name: 'Stop and Sit Down',
                desc: 'While heeling, the handler halts and the dog sits in heel position. The dog must then down in heel position. ' +
                    '(Stationary)',
                image: '004-stop_sit_down'
            },
            {
                id: 5,
                name: 'Turn Right 90°',
                desc: 'Right Turn - 90° turn to the right.',
                image: '005-turn_right'
            },
            {
                id: 6,
                name: 'Turn Left 90°',
                desc: 'Left Turn - 90° turn to the left',
                image: '006-turn_left'
            },
            {
                id: 7,
                name: 'Turn Right 180°',
                desc: 'About Turn - Right - 180° turn to the right.',
                image: '007-turn_right_180'
            },
            {
                id: 8,
                name: 'Turn Left 180°',
                desc: 'About Turn - Left - 180° turn to the left.',
                image: '008-turn_left_180'
            },
            {
                id: 9,
                name: 'Turn Right 270°',
                desc: '270° Right Turn - While heeling, the dog and handler make a tight 270° turn to the right',
                image: '009-turn_right_270'
            },
            {
                id: 10,
                name: 'Turn Left 270°',
                desc: '270° Left Turn - While heeling, the dog and handler make a tight 270° turn to the left',
                image: '010-turn_left_270'
            },
            {
                id: 11,
                name: 'Turn Right 360°',
                desc: '360° Right Turn - While heeling, the dog and handler make a tight 360° turn to the right',
                image: '011-turn_right_360'
            },
            {
                id: 12,
                name: 'Turn Left 360°',
                desc: '360° Left Turn - While heeling, the dog and handler make a tight 360° turn to the left',
                image: '012-turn_left_360'
            },
            {
                id: 13,
                name: 'Call Front – Finish Right – Forward',
                desc: 'Call Front – Finish Right – Forward – While heeling, the handler stops forward motion and calls the dog to front. ' +
                    'The handler may take several steps backward. The dog must come and sit in front. Without the handler moving  ' +
                    'their feet, the dog must finish to the right. As the dog clears the handler’s path, the handler will heel forward ' +
                    'before the dog returns to heel position. (Stationary)',
                image: '013-call_front_finish_right_forward'
            },
            {
                id: 14,
                name: 'Call Front – Finish Left – Forward',
                desc: 'Call Front – Finish Left – Forward – While heeling, the handler stops forward motion and calls the dog to front. ' +
                    'The handler may take several steps backward. The dog must come and sit in front. Without the handler moving  ' +
                    'their feet, the dog must finish to the left. As the dog clears the handler’s path, the handler will heel forward ' +
                    'before the dog returns to heel position. (Stationary)',
                image: '014-call_front_finish_left_forward'
            },
            {
                id: 15,
                name: 'Call Front – Finish Right – Sit',
                desc: 'Call Front – Finish Right – Sit – While heeling, the handler stops forward motion and calls the dog to front.  ' +
                    'The handler may take several steps backward. The dog must come and sit in front. Without the handler moving their ' +
                    'feet, the dog must finish to the right and sit in heel position. (Stationary)',
                image: '015-call_front_finish_right_stop'
            },
            {
                id: 16,
                name: 'Call Front – Finish Left – Sit',
                desc: 'Call Front – Finish Left – Sit – While heeling, the handler stops forward motion and calls the dog to front.  ' +
                    'The handler may take several steps backward. The dog must come and sit in front. Without the handler moving their ' +
                    'feet, the dog must finish to the left and sit in heel position. (Stationary)',
                image: '016-call_front_finish_left_stop'
            },
            {
                id: 17,
                name: 'Slow Pace',
                desc: 'Slow Pace - The dog and handler must slow down noticeably. This must be followed by a normal pace sign unless ' +
                    'it is the last station on the course.',
                image: '017-slow_pace'
            },
            {
                id: 18,
                name: 'Fast Pace',
                desc: 'Fast Pace -  The dog and handler must speed up noticeably. This must be followed by a normal pace sign',
                image: '018-fast_pace'
            },
            {
                id: 19,
                name: 'Normal Pace',
                desc: 'Normal Pace - The dog and handler walk briskly. This sign is only used after a slow or fast pace sign.',
                image: '019-normal_pace'
            },
            {
                id: 20,
                name: 'Moving Side Step Right',
                desc: 'Moving Side Step Right – While heeling, the handler takes one step to the right, leading with the right foot, ' +
                    'and continues heeling along the newly established line. The dog must move with the handler. This sign will be ' +
                    'placed directly in line of the team’s path requiring the handler and dog to sidestep to the right to pass the sign.',
                image: '020-side_step_right'
            },
            {
                id: 21,
                name: 'Spiral Right - Dog Outside',
                desc: 'Spiral Right - Dog Outside - This sign requires three pylons placed in a straight line with spaces between them ' +
                    'of approximately 6 - 8 feet. The dog and handler must turn to the right to move around each of the pylons.',
                image: '021-spiral_right_outside'
            },
            {
                id: 22,
                name: 'Spiral Left - Dog Inside',
                desc: 'Spiral Left - Dog Inside - This sign requires three pylons placed in a straight line with spaces between them ' +
                    'of approximately 6 - 8 feet. The dog and handler must turn to the left to move around each of the pylons.',
                image: '022-spiral_left_inside'
            },
            {
                id: 23,
                name: 'Straight Figure 8 Weave Twice',
                desc: 'Straight Figure 8 Weave Twice - This sign requires four pylons placed in a straight line with spaces between them ' +
                    'of approximately 6-8 feet. The dog and handler will enter into the weave with the first pylon on their left side. ' +
                    'They must complete the entire weave twice.',
                image: '023-figure_8_twice'
            },
            {
                id: 24,
                name: 'Serpentine Weave Once',
                desc: 'Serpentine Weave Once - This sign requires four pylons placed in a straight line with spaces between them of ' +
                    'approximately 6-8 feet. The dog and handler will enter into the weave with the first pylon on their left side. ' +
                    'They must complete the entire weave once.',
                image: '024-figure_8'
            },
            {
                id: 25,
                name: 'HALT - 1, 2 and 3 Steps',
                desc: 'HALT - 1, 2 and 3 Steps - While heeling, the handler halts and the dog sits in heel position. The handler takes ' +
                    'one step forward, halts and the dog sits in heel position. The handler takes two steps forward, halts and the dog ' +
                    'sits in heel position and then three steps forward, halts and the dog sits in heel position. The dog moves with ' +
                    'the handler each time. (Stationary)',
                image: '025-step_1_2_3_stops'
            },
            {
                id: 26,
                name: 'Call Front – 1, 2 and 3 Steps Backward - Forward',
                desc: 'Call Front – 1, 2 and 3 Steps Backward - Forward - While heeling, the handler stops forward motion and calls ' +
                    'the dog to front. The handler may take several steps backward. The dog must come and sit in front. The handler ' +
                    'takes one step backward and halts. The dog must move with the handler and sit in front as the handler halts. ' +
                    'The handler takes two steps backward and halts. The dog must move with the handler and sit in front as the handler ' +
                    "halts.The handler takes three steps backward and halts. The\n                dog must move with the handler and sit in\n                front as the handler halts. The handler may\n                command/signal the dog to finish. As the dog\n                clears the handler\u2019s path, the handler will\n                heel forward before the dog returns to heel\n                position. (Stationary)",
                image: '026-call_front_step_1_2_3_stops_back'
            },
            {
                id: 27,
                name: 'Stop and Down',
                desc: "Stop and Down \u2013 While heeling, the handler\n                stops forward motion and the dog downs in\n                heel position. The dog must stay down until\n                the handler moves forward. (Stationary)",
                image: '027-down_and_stop'
            },
            {
                id: 28,
                name: 'HALT – Fast Forward from Sit',
                desc: "HALT \u2013 Fast Forward from Sit \u2013 While\n                heeling, the handler halts and the dog sits in\n                heel position. The dog and handler then heel\n                forward at a fast pace. This must be followed\n                by a normal pace sign. (Stationary)",
                image: '028-fast_forward_from_sit'
            },
            {
                id: 29,
                name: 'Left About Turn',
                desc: "Left About Turn \u2013 While heeling, the\n                handler will make an about turn to the left,\n                while at the same time the dog must move\n                around the handler to the right and into heel\n                position.",
                image: '029-left_about_turn'
            },
            {
                id: 30,
                name: 'HALT - Walk Around',
                desc: "HALT - Walk Around \u2013 While heeling,\n                the handler halts and the dog sits in heel\n                position. The dog must stay while the\n                handler walks around behind the dog,\n                returns to heel position and pauses. The\n                handler must pause before heeling forward.\n                (Stationary)",
                image: '030-stop_walk_around_dog'
            },
            {
                id: 31,
                name: 'HALT – Down – Walk Around',
                desc: "HALT \u2013 Down \u2013 Walk Around - While\n                heeling, the handler halts and the dog sits in\n                heel position. The dog must then down and\n                stay while the handler walks around behind\n                the dog, returns to heel position and pauses.\n                The dog and handler then heel forward.\n                (Stationary)",
                image: '031-stop_and_down_walk_around_dog'
            },
            {
                id: 32,
                name: 'Figure 8 – No Distractions',
                desc: "Figure 8 \u2013 No Distractions - This sign\n                requires two pylons spaced approximately 6-8\n                feet apart. The Figure 8 may be entered with\n                the pylons on either the left or right side. The\n                dog and handler will perform a complete\n                figure 8 around the pylons, crossing the\n                center line three times",
                image: '032-figure_8_no_distraction'
            },
            {
                id: 33,
                name: 'HALT – Right Turn – Forward',
                desc: "HALT \u2013 Right Turn \u2013 Forward - While\n                heeling, the handler halts and the dog sits\n                in heel position. The handler and dog turn\n                right together and heel forward. (Stationary)",
                image: '033-stop_right_turn_forward'
            },
            {
                id: 34,
                name: 'HALT – Left Turn – Forward',
                desc: "HALT \u2013 Left Turn \u2013 Forward - While\n                heeling, the handler halts and the dog sits in\n                heel position. The handler and dog turn left\n                together and heel forward. (Stationary)",
                image: '034-stop_left_turn_forward'
            },
            {
                id: 35,
                name: 'Call Front – Return to Heel',
                desc: "Call Front \u2013 Return to Heel \u2013 While heeling,\n                the handler stops forward motion and may\n                command/signal the dog to front. The handler\n                may take several steps backward. The dog\n                must come and sit in front. The dog must\n                stay while the handler walks around behind\n                the dog to return to heel position. The\n                handler must pause before heeling forward.\n                (Stationary)",
                image: '035-call_front_return_to_heel'
            },
            {
                id: 36,
                name: 'HALT – Slow Forward From Sit',
                desc: "HALT \u2013 Slow Forward From Sit \u2013 While\n                heeling, the handler halts and the dog sits\n                in heel position. The dog and handler then\n                heel forward at a slow pace. This must be\n                followed by a normal pace sign unless it is\n                the last sign on the course. (Stationary)",
                image: '036-stop_slow_forward_from_sit'
            },
            {
                id: 37,
                name: 'Loop Right',
                desc: "Loop Right - While heeling, the dog\n                and handler loop right crossing over the\n                original path",
                image: '037-loop_right'
            },
            {
                id: 38,
                name: 'Loop Left',
                desc: "Loop Left - While heeling, the dog and\n                handler loop left crossing over the original\n                path.",
                image: '038-loop_left'
            },
            {
                id: 39,
                name: 'Diagonal Right',
                desc: "Diagonal Right \u2013 While heeling, the dog and\n                handler make an open angle turn to the\n                right. The dog must move with the handler.\n                This sign will be placed directly in line of the\n                team\u2019s path",
                image: '039-diagonal_right'
            },
            {
                id: 40,
                name: 'Diagonal Left',
                desc: "Diagonal Left \u2013 While heeling, the dog and\n                handler make an open angle turn to the\n                left. The dog must move with the handler.\n                This sign will be placed directly in line of the\n                team\u2019s path.",
                image: '040-diagonal_left'
            },
            {
                id: 41,
                name: 'Offset Serpentine Right',
                desc: "Offset Serpentine Right - This sign requires\n                three pylons. The center pylon will be offset to\n                the right by 3-4 feet with the other two spaced\n                approximately 6-8 feet apart. The dog and\n                handler will enter into the weave with the\n                first pylon on their right side. They must\n                complete the entire serpentine together.",
                image: '041-offset_serpentine_right'
            },
            {
                id: 42,
                name: 'Offset Serpentine Left',
                desc: "Offset Serpentine Left - This sign requires\n                three pylons. The center pylon will be offset to\n                the left by 3-4 feet with the other two spaced\n                approximately 6-8 feet apart. The dog and\n                handler will enter into the weave with the\n                first pylon on their left side. They must\n                complete the entire serpentine together.",
                image: '042-offset_serpentine_left'
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/services/drag.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/drag.service.ts ***!
  \******************************************/
/*! exports provided: DragService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragService", function() { return DragService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragService = /** @class */ (function () {
    function DragService() {
    }
    DragService.prototype.startDrag = function (zone) {
        this.zone = zone;
    };
    DragService.prototype.accepts = function (zone) {
        return zone === this.zone;
    };
    DragService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DragService);
    return DragService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\BlackAIllas\Stuff\Apps\Rally-Obidience\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map