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
    }
    AppComponent.prototype.ngOnInit = function () {
        if ((new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay() == 0) {
            this.workingDate = new Date(this.date.getFullYear(), this.date.getMonth(), -5);
        }
        else {
            this.workingDate = new Date(this.date.getFullYear(), this.date.getMonth(), 2 - (new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay());
        }
        this.fullMonth = this.createMonthArray();
        console.log(this.fullMonth);
    };
    AppComponent.prototype.nextDay = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    };
    AppComponent.prototype.createMonthArray = function () {
        var items = [];
        do {
            items.push(this.createWeekArray());
        } while (this.workingDate.getMonth() == this.date.getMonth());
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
    AppComponent.prototype.onSelect = function (day) {
        this.selectedDay = day;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'date-picker',
            template: "\n        <h1> {{ title }} </h1>\n        <div>\n        <div class=\"day-name\">\u041F\u043D</div>\n        <div class=\"day-name\">\u0412\u0442</div>\n        <div class=\"day-name\">\u0421\u0440</div>\n        <div class=\"day-name\">\u0427\u0442</div>\n        <div class=\"day-name\">\u041F\u0442</div>\n        <div class=\"day-name\">\u0421\u0431</div>\n        <div class=\"day-name\">\u0412\u0441</div>\n        <div *ngFor=\"let week of fullMonth;\"> \n             <div \n             *ngFor=\"let day of week;\"\n             [class.selected]=\"day === selectedDay\"\n             (click)=\"onSelect(day)\" class=\"day\">\n                {{ day.getDate() }}\n             </div>\n        </div>\n        </div>\n\n    ",
            styleUrls: ['app/app.component.css'] }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map