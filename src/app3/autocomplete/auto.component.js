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
var AutoComponent = (function () {
    function AutoComponent(router, domService) {
        this.router = router;
        this.domService = domService;
        this.searchtext = "";
        this.elementsCollection = [];
        this.originalCollection = [];
        this.countsCollection = [];
    }
    AutoComponent.prototype.populateElements = function () {
        var _this = this;
        this.domService.getDomElements().then(function (data) {
            var index = 0;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                _this.originalCollection[index] = item.name;
                _this.countsCollection[index] = item.count;
                index++;
            }
            index = 0;
            for (var _a = 0, _b = _this.originalCollection; _a < _b.length; _a++) {
                var entry = _b[_a];
                _this.elementsCollection[index++] = entry;
            }
        });
    };
    AutoComponent.prototype.ngOnInit = function () {
        this.populateElements();
    };
    AutoComponent.prototype.ngOnChanges = function () {
        var _this = this;
        dom_service_1.DomService.get(this.id).subscribe(function (data) {
            if (document.getElementById(data) != null)
                console.log(document.getElementById(data).click());
            _this.populateElements();
        });
    };
    AutoComponent.prototype.filterList = function (event) {
        var matches = this.originalCollection.filter(function (windowValue) {
            if (windowValue) {
                return windowValue.indexOf(event) >= 0;
            }
        }); //["id-3-text", "3-id-text"]
        console.log(this.elementsCollection);
        this.elementsCollection = matches;
    };
    AutoComponent.prototype.addElement = function (event, item) {
        var _this = this;
        this.domService.addToDomSelected(item, event).then(function (data) {
            _this.populateElements();
            dom_service_1.DomService.get(_this.id).emit(data);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AutoComponent.prototype, "id", void 0);
    AutoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'auto-complete',
            templateUrl: 'auto.component.html',
            styleUrls: ['auto.component.css'],
            providers: [dom_service_1.DomService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, dom_service_1.DomService])
    ], AutoComponent);
    return AutoComponent;
}());
exports.AutoComponent = AutoComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=auto.component.js.map