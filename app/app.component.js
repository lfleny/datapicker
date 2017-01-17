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
        this.current = this.date.getDate();
        this.curDay = this.date.getDay();
        this.curMonth = this.date.getMonth();
        this.weekOne = this.createWeekArray(this.workingDate.getDate());
    }
    AppComponent.prototype.ngOnInit = function () {
        if ((new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay() == 0) {
            this.workingDate = new Date(this.date.getFullYear(), this.date.getMonth(), -5);
        }
        else {
            this.workingDate = new Date(this.date.getFullYear(), this.date.getMonth(), 2 - (new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay());
        }
        //console.log(this.workingDate);
    };
    AppComponent.prototype.nextDay = function () {
        this.workingDate.setDate(this.workingDate.getDate() + 1);
    };
    AppComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    AppComponent.prototype.createWeekArray = function (date) {
        console.log(date);
        var items = [];
        for (var i = 0; i < 7; i++) {
            console.log(date);
            items.push(date);
        }
        console.log(items);
        return items;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'date-picker',
            template: "\n        <h1> {{ day }} </h1>\n        <table>\n         <tr *ngFor=\"let week of month;\"> \n             <td *ngFor=\"let day of week;\">\n                {{ day.date }} ||\n             </td>\n         </tr>\n        </table>  \n    " }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map