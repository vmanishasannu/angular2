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
var core_2 = require('@angular/core');
var DomService = (function () {
    function DomService() {
        this.domSelectedItemsMap = [];
        this.changeDomEvent = new core_2.EventEmitter();
    }
    DomService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new core_2.EventEmitter();
        return this._emitters[ID];
    };
    DomService.prototype.getDomElements = function () {
        return Promise.resolve(DomService.dom);
    };
    DomService.prototype.addToDomSelected = function (value, command) {
        for (var _i = 0, _a = DomService.dom; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name === value && command === true) {
                item.count++;
            }
            else if (item.name === value && command === false) {
                if (item.count > 0)
                    item.count--;
            }
        }
        return Promise.resolve(DomService.dom);
    };
    DomService.prototype.removeAll = function (value) {
        for (var _i = 0, _a = DomService.dom; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name === value) {
                item.count = 0;
            }
        }
    };
    DomService._emitters = {};
    DomService.dom = [
        { id: 1, name: 'Text Box', count: 1, src: '' },
        { id: 2, name: 'Radio Button', count: 1, src: '<label> Yes </label><input type="radio" value="Yes" name="chose"><label> No </label><input type="radio" value="No" name="chose">' },
        { id: 3, name: 'Select Box', count: 1, src: '<select><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="mercedes">Mercedes</option><option value="audi">Audi</option></select>' },
        { id: 4, name: 'Check Box', count: 1, src: '' },
        { id: 5, name: 'Text Area', count: 1, src: '' },
        { id: 5, name: 'Auto Complete', count: 1, src: '' }
    ];
    DomService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DomService);
    return DomService;
}());
exports.DomService = DomService;
//# sourceMappingURL=dom.service.js.map