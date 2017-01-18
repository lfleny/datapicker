/**
 * Created by Sasha on 16.01.2017.
 */
import  {Component, OnInit} from '@angular/core';
import {isUndefined} from "util";

@Component({
    selector: 'date-picker',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent implements OnInit{
    title = 'Datepicker';
    date = new Date();
    currentDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), 23, 59);
    workingDate: Date;
    selectedDay: Date;
    fullMonth: Date[][];
    range: boolean = true;
    disablePreviosly: boolean = true;
    disableDate: Date[];
    startDate: Date;
    endDate: Date;
    callback: string = 'this is callback';
    
    ngOnInit(): void {

        this.setWorkingDate();
        this.fullMonth = this.createMonthArray();
        console.log(this.fullMonth);

    }

    setWorkingDate(): void {
        if ((new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)).getDay() == 0) {
            this.workingDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), -5, 23, 59);
        } else {
            this.workingDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 2 - (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)).getDay(), 23, 59);
        }
    }

    nextDay(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 23, 59);
    }

    createMonthArray(): Date[][] {
        var items: Date[][] = [];
        do {
            items.push(this.createWeekArray());
        } while (this.workingDate.getMonth() == this.currentDate.getMonth());
        return items;
    }

    createWeekArray(): Date[] {
        var items: Date[] = [];
        for(var i = 0; i < 7; i++){
            items.push(this.workingDate);
            this.workingDate = this.nextDay(this.workingDate);
        }
        return items;
    }

    onSelect(day: Date): void {
        var isDisable: boolean = false;
        if(this.disableDate != undefined) {
            isDisable = this.searchDisDate(day);
        }

        if (!this.range) {
            if (!(this.disablePreviosly == true && day < this.date) && !isDisable) {
                this.selectedDay = day;
            }
        } else {
            if (!(this.disablePreviosly == true && day < this.date) && !isDisable) {
                if(this.startDate == undefined) {
                    this.startDate = day;
                } else if (this.endDate == undefined) {
                    this.endDate = day;
                    this.createRange(this.startDate, this.endDate);
                    this.startDate = undefined;
                    this.endDate = undefined;
                }
            }
        }
    }
    prevMonth(): void {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0);
        this.setWorkingDate();
        this.fullMonth = this.createMonthArray();
    }
    nextMonth(): void {
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
        this.setWorkingDate();
        this.fullMonth = this.createMonthArray();
    }

    searchDisDate(day: Date): boolean {
        for (var disDay of this.disableDate) {
            if (disDay == day) {
                return true;
            }
        }
        return false;
    }
    createRange(startDate: Date, endDate: Date): void {

    }

}



