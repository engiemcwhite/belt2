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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirect/redirect.component */ "./src/app/redirect/redirect.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', component: _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_6__["RedirectComponent"] },
    { path: 'products', pathMatch: 'full', component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] },
    { path: 'products/new', component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"] },
    { path: 'products/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] },
    { path: 'products/:id/edit', component: _update_update_component__WEBPACK_IMPORTED_MODULE_4__["UpdateComponent"] }
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>Commerce Manager</h1>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redirect/redirect.component */ "./src/app/redirect/redirect.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _redirect_redirect_component__WEBPACK_IMPORTED_MODULE_7__["RedirectComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_belt_service__WEBPACK_IMPORTED_MODULE_3__["BeltService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/belt.service.ts":
/*!*********************************!*\
  !*** ./src/app/belt.service.ts ***!
  \*********************************/
/*! exports provided: BeltService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeltService", function() { return BeltService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeltService = /** @class */ (function () {
    function BeltService(_http) {
        this._http = _http;
        console.log("hi service");
    }
    BeltService.prototype.getProducts = function () {
        return this._http.get('/products');
    };
    BeltService.prototype.getOneProduct = function (id) {
        return this._http.get('/products/' + id);
    };
    BeltService.prototype.addProduct = function (data) {
        console.log(data);
        console.log("Made it to the service!");
        return this._http.post('/products', data);
    };
    BeltService.prototype.updateProduct = function (data, id) {
        console.log(id);
        console.log("I made it to the service boys!");
        return this._http.put('/products/' + id, data);
    };
    BeltService.prototype.deleteProduct = function (id) {
        console.log(id);
        return this._http.delete('/products/' + id);
    };
    BeltService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeltService);
    return BeltService;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    text-align: center;\r\n    margin-left: 40%;\r\n}"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>New Product</h2>\n<div *ngFor=\"let error of errors\">\n  {{error}}\n  <br>\n</div>\n<div>\n    <form name=\"myform\" (submit)=\"makeProduct()\">\n      <!-- use the json pipe to see how newTask changes in real time -->\n      <!-- <p> {{ pet | json }} </p> -->\n      {{name.errors | json}} <br>\n      {{quantity.errors | json}} <br>\n      {{price.errors | json}} <br>\n      <table>\n          <tr>\n            <td>Name:</td>\n            <td><input type=\"text\" name=\"name\" required minlength=\"3\" [(ngModel)]=\"product.name\" #name=\"ngModel\"/></td>\n          </tr>\n          <tr>\n            <td>Quantity:</td>\n            <td><input type=\"number\" name=\"quantity\" required min=\"0\" [(ngModel)]=\"product.quantity\" #quantity=\"ngModel\" /></td>\n          </tr>\n          <tr>\n            <td>Price:</td>\n            <td>$<input type=\"number\" name=\"price\" required min=\"0\" [(ngModel)]=\"product.price\" #price=\"ngModel\"  /></td>\n          </tr>\n        </table>\n      <button type=\"submit\" [disabled]=\"!(name.valid && quantity.valid && price.valid)\">CREATE</button>\n      <!-- <input ng-disabled=\"!name.valid || !quantity.valid || !price.valid\" type=\"submit\" value=\"CREATE\" /> -->\n      <button [routerLink]=\"['/']\">CANCEL</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(_authorService, _route, _router) {
        this._authorService = _authorService;
        this._route = _route;
        this._router = _router;
        this.product = { name: "", quantity: 0, price: 0.00 };
    }
    CreateComponent.prototype.ngOnInit = function () {
        console.log("Attempting to go to the Create Component!");
    };
    CreateComponent.prototype.makeProduct = function () {
        var _this = this;
        console.log("Attempting to make a product...");
        var observable = this._authorService.addProduct(this.product);
        observable.subscribe(function (data) {
            console.log("Made it back!");
            _this.errors = [];
            console.log(data);
            if (data['status'] == "Not goodly") {
                for (var err in data['errors']) {
                    _this.errors.push(data['errors'][err]);
                }
                console.log(_this.errors);
                for (var error in _this.errors) {
                    console.log(_this.errors[error]);
                }
                //this._router.navigate(['/products/new']);
            }
            else {
                console.log("Made a product!", data);
                _this.product.name = "";
                _this.product.quantity = 0;
                _this.product.price = "";
                _this._router.navigate(['/']);
            }
        });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_1__["BeltService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    text-align: center;\r\n    margin-left: 40%;\r\n}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Product Details</h2> \n<table>\n  <tr>\n    <td><b>Name:</b></td>\n    <td>{{product.name}}</td>\n  </tr>\n  <tr>\n      <td><b>Qty:</b></td>\n      <td>{{product.quantity}}</td>\n  </tr>\n  <tr>\n      <td><b>Price:</b></td>\n      <td>{{product.price}}</td>\n  </tr>\n</table>\n<br><br><br>\n<button [routerLink]=\"['/']\">BACK</button>\n<button [disabled]= \"product.quantity > 0\" (click)=\"removeProduct(product.productId)\">DELETE</button>\n\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_beltService, _route, _router) {
        this._beltService = _beltService;
        this._route = _route;
        this._router = _router;
        this.product = { name: "", quantity: 0, price: "" };
        this.isValid = true;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Attempting to go into the Details component!");
        this._route.params.subscribe(function (params) { return _this.id = params["id"]; });
        console.log(this.id);
        this.findProduct();
        console.log(this.product);
        this.currProduct = this.product;
    };
    DetailsComponent.prototype.findProduct = function () {
        var _this = this;
        console.log(this.id);
        var observable = this._beltService.getOneProduct(this.id);
        observable.subscribe(function (data) {
            console.log("Found my product!");
            _this.product = data;
            console.log(_this.product);
            //this.author.name = data["name"];
        });
    };
    // likePet(){
    //     this.isValid = false;
    //     console.log("Attempting to change the like count!")
    //     this.pet.likes++;
    //     let observable = this._beltService.updatePet(this.pet,this.id);
    //     observable.subscribe(data => {
    //       console.log("Changed a pet!",data);
    //     })
    // }
    DetailsComponent.prototype.removeProduct = function () {
        var _this = this;
        var observable = this._beltService.deleteProduct(this.id);
        observable.subscribe(function (data) {
            console.log("Deleted this product!");
            _this._router.navigate(['/']);
        });
    };
    DetailsComponent.prototype.isValidForm = function () {
        return this.isValid;
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_1__["BeltService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    text-align: center;\r\n    margin-left: 35%;\r\n    width: 400px;\r\n}"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <h2>Product List</h2>\n  <button [routerLink]=\"['/products/new']\">Add New Product</button> <br>\n  <table>\n    <tr>\n      <th>id</th>\n      <th>Name</th>\n      <th>Qty</th>\n      <th>Price</th>\n      <th>Actions</th>\n    </tr>\n    <tbody *ngFor=\"let prod of products\">\n      <tr>\n        <td>{{prod.productId}}</td>\n        <td>{{prod.name}}</td>\n        <td>{{prod.quantity}}</td>\n        <td>${{prod.price}}</td>\n        <td>\n            <button [routerLink]=\"['/products/'+prod.productId+'/edit']\">Edit</button>\n            <button [routerLink]=\"['/products/',prod.productId]\">Details</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  </div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(_beltService, _route, _router) {
        this._beltService = _beltService;
        this._route = _route;
        this._router = _router;
        this.products = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProductsFromService();
    };
    ProductComponent.prototype.getProductsFromService = function () {
        var _this = this;
        var observable = this._beltService.getProducts();
        observable.subscribe(function (data) {
            console.log("Got our products", data);
            // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
            // This may be different for you, depending on how you set up your Task API.
            _this.products = data;
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_1__["BeltService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/redirect/redirect.component.css":
/*!*************************************************!*\
  !*** ./src/app/redirect/redirect.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/redirect/redirect.component.html":
/*!**************************************************!*\
  !*** ./src/app/redirect/redirect.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  redirect works!\n</p>\n"

/***/ }),

/***/ "./src/app/redirect/redirect.component.ts":
/*!************************************************!*\
  !*** ./src/app/redirect/redirect.component.ts ***!
  \************************************************/
/*! exports provided: RedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedirectComponent = /** @class */ (function () {
    function RedirectComponent(_beltService, _route, _router) {
        this._beltService = _beltService;
        this._route = _route;
        this._router = _router;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        this._router.navigate(['/products']);
    };
    RedirectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redirect',
            template: __webpack_require__(/*! ./redirect.component.html */ "./src/app/redirect/redirect.component.html"),
            styles: [__webpack_require__(/*! ./redirect.component.css */ "./src/app/redirect/redirect.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_2__["BeltService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    text-align: center;\r\n    margin-left: 40%;\r\n}"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Update Product</h2>\n<div *ngFor=\"let error of errors\">\n    {{error}}\n    <br>\n  </div>\n<div class=\"wrapper\">\n    <form name=\"updateform\" (submit)=\"changeProduct()\">\n      <!-- use the json pipe to see how newTask changes in real time -->\n       <!-- <p> {{ product | json }} </p> -->\n       {{name.errors | json}} <br>\n       {{quantity.errors | json}} <br>\n       {{price.errors | json}} <br>\n       <table>\n           <tr>\n             <td>Name:</td>\n             <td><input type=\"text\" name=\"name\" required minlength=\"3\" [(ngModel)]=\"product.name\" #name=\"ngModel\"/></td>\n           </tr>\n           <tr>\n             <td>Quantity:</td>\n             <td><input type=\"number\" name=\"quantity\" required min=\"0\" [(ngModel)]=\"product.quantity\" #quantity=\"ngModel\" /></td>\n           </tr>\n           <tr>\n             <td>Price:</td>\n             <td>$<input type=\"number\" name=\"price\" required min=\"0\" [(ngModel)]=\"product.price\" #price=\"ngModel\"  /></td>\n           </tr>\n         </table>\n        <button type=\"submit\" [disabled]=\"!(name.valid && product.quantity>=0 && product.price >= 0)\">UPDATE</button>\n      <!-- <input type=\"submit\" value=\"UPDATE\" /> -->\n      <!-- <button [routerLink]=\"['/products/',id]\">Cancel</button> -->\n  </form>\n  <button (click)=\"findProduct()\">RESET</button>\n  <!-- <button  (click)=\"Reset()\">RESET</button> -->\n\n</div>"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(_beltService, _route, _router) {
        this._beltService = _beltService;
        this._route = _route;
        this._router = _router;
        this.product = { name: "", quantity: 0, price: 0 };
        this.isValid = true;
        this.currProduct = { name: "", quantity: 0, price: 0 };
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.id = params["id"]; });
        console.log(this.id);
        this.findProduct();
        console.log(this.product);
        console.log("Now making a backup product.");
        console.log(this.currProduct);
    };
    UpdateComponent.prototype.findProduct = function () {
        var _this = this;
        console.log(this.id);
        var observable = this._beltService.getOneProduct(this.id);
        observable.subscribe(function (data) {
            console.log("Found my product!");
            _this.product = data;
            _this.currProduct = _this.product;
            console.log(_this.product);
            //this.author.name = data["name"];
        });
    };
    UpdateComponent.prototype.changeProduct = function () {
        var _this = this;
        console.log("Attempting to change the product!");
        console.log(this.product);
        console.log(this.id);
        this.errors = [];
        var observable = this._beltService.updateProduct(this.product, this.id);
        observable.subscribe(function (data) {
            console.log(data['status']);
            if (data['status'] == "Not goodly") {
                for (var err in data['errors']) {
                    _this.errors.push(data['errors'][err]);
                }
                console.log(_this.errors);
                for (var error in _this.errors) {
                    console.log(_this.errors[error]);
                }
            }
            else {
                console.log("Changed a product!", data);
                _this._router.navigate(['/']);
            }
        });
    };
    UpdateComponent.prototype.isValidForm = function () {
        return this.isValid;
    };
    UpdateComponent.prototype.reset = function () {
        console.log("Attempting to reset.");
        this.product = this.currProduct;
        console.log(this.currProduct);
        console.log(this.product);
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_1__["BeltService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
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

module.exports = __webpack_require__(/*! C:\Users\User\Documents\DojoAssignments\MEAN\angular\belt2\belt2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map