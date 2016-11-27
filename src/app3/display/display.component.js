"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dom_service_1 = require('../service/dom.service');
var DisplayComponent = (function () {
    function DisplayComponent(router, domService) {
        this.router = router;
        this.domService = domService;
    }
    DisplayComponent.prototype.ngOnChanges = function () {
        dom_service_1.DomService.get(this.id).subscribe(function (data) {
        });
    };
    DisplayComponent.prototype.ngOnInit = function () {
        this.populateUI();
    };
    DisplayComponent.prototype.populateUI = function () {
        var _this = this;
        this.domService.getDomElements().then(function (data) {
            _this.displayCollection = data;
        });
    };
    DisplayComponent.prototype.getNumber = function (num) {
        return new Array(num);
    };
    DisplayComponent.prototype.addMore = function (name) {
        var _this = this;
        this.domService.addToDomSelected(name, true).then(function (data) {
            _this.populateUI();
            dom_service_1.DomService.get(_this.id).emit(data);
        });
    };
    DisplayComponent.prototype.deleteOne = function (name) {
        var _this = this;
        this.domService.addToDomSelected(name, false).then(function (data) {
            _this.populateUI();
            dom_service_1.DomService.get(_this.id).emit(data);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DisplayComponent.prototype, "id", void 0);
    DisplayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dom-display',
            templateUrl: 'display.component.html',
            styleUrls: ['display.component.css'], providers: [dom_service_1.DomService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, dom_service_1.DomService])
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=display.component.js.map