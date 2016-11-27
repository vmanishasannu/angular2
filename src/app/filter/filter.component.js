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
var FilterComponent = (function () {
    function FilterComponent(router, domService) {
        this.router = router;
        this.domService = domService;
        domService.changeDomEvent.subscribe(function (data) {
            console.log("s");
        });
    }
    FilterComponent.prototype.ngOnChanges = function () {
        var _this = this;
        dom_service_1.DomService.get(this.id).subscribe(function (data) {
            _this.populateFilters();
        });
    };
    FilterComponent.prototype.ngOnInit = function () {
        this.populateFilters();
    };
    FilterComponent.prototype.populateFilters = function () {
        var _this = this;
        this.domService.getDomElements().then(function (data) {
            console.log(data);
            _this.filterCollection = data;
        });
    };
    FilterComponent.prototype.removeAll = function (value) {
        this.domService.removeAll(value);
        dom_service_1.DomService.get(this.id).emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FilterComponent.prototype, "id", void 0);
    FilterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filter-display',
            templateUrl: 'filter.component.html',
            styleUrls: ['filter.component.css'], providers: [dom_service_1.DomService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, dom_service_1.DomService])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=filter.component.js.map