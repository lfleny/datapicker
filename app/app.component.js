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
/**
 * Created by Sasha on 16.01.2017.
 */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Datepicker';
        this.date = new Date();
        this.currentDate = new Date();
        this.range = false;
        this.disablePreviosly = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setWorkingDate();
        this.fullMonth = this.createMonthArray();
        console.log(this.fullMonth);
    };
    AppComponent.prototype.setWorkingDate = function () {
        if ((new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)).getDay() == 0) {
            this.workingDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), -5);
        }
        else {
            this.workingDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 2 - (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)).getDay());
        }
    };
    AppComponent.prototype.nextDay = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    };
    AppComponent.prototype.createMonthArray = function () {
        var items = [];
        do {
            items.push(this.createWeekArray());
        } while (this.workingDate.getMonth() == this.currentDate.getMonth());
        return items;
    };
    AppComponent.prototype.createWeekArray = function () {
        var items = [];
        for (var i = 0; i < 7; i++) {
            items.push(this.workingDate);
            this.workingDate = this.nextDay(this.workingDate);
        }
        return items;
    };
    AppComponent.prototype.onSelect = function (day, event) {
        this.selectedDay = day;
        console.log(event);
    };
    AppComponent.prototype.prevMonth = function () {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0);
        this.setWorkingDate();
        this.fullMonth = this.createMonthArray();
    };
    AppComponent.prototype.nextMonth = function () {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
        this.setWorkingDate();
        this.fullMonth = this.createMonthArray();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'date-picker',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map