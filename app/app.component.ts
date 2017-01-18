/**
 * Created by Sasha on 16.01.2017.
 */
import  {Component, OnInit} from '@angular/core';

@Component({
    selector: 'date-picker',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent implements OnInit{
    title = 'Datepicker';
    date = new Date();
    currentDate = new Date();
    workingDate: Date;
    selectedDay: Date;
    fullMonth: Date[][];
    range: boolean = false;
    disablePreviosly: boolean = false;
    disablePrevioslyDate: Date;
    disableDate: Date[];
    startDate: Date;
    endDate: Date;
    
    ngOnInit(): void {

        this.setWorkingDate();
        this.fullMonth = this.createMonthArray();
        console.log(this.fullMonth);

    }

    setWorkingDate(): void {
        if ((new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)).getDay() == 0) {
            this.workingDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), -5);
        } else {
            this.workingDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 2 - (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1)).getDay());
        }
    }

    nextDay(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
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

    onSelect(day: Date, event: any): void {
        this.selectedDay = day;
        console.log(event);
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

}



