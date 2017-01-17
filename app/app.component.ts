/**
 * Created by Sasha on 16.01.2017.
 */
import  {Component, OnInit} from '@angular/core';

import { MONTH } from './month';
import { Day } from './day';

@Component({
    selector: 'date-picker',
    template: `
        <h1> {{ day }} </h1>
        <table>
         <tr *ngFor="let week of month;"> 
             <td *ngFor="let day of week;">
                {{ day.date }} ||
             </td>
         </tr>
        </table>  
    `})

export class AppComponent implements OnInit{
    title = 'Datepicker';
    date = new Date();
    workingDate: Date;

    ngOnInit(): void {

        if ((new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay() == 0) {
            this.workingDate = new Date(this.date.getFullYear(), this.date.getMonth(), -5);
        } else {
            this.workingDate = new Date(this.date.getFullYear(), this.date.getMonth(), 2 - (new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay());
        }
        //console.log(this.workingDate);
    }

    nextDay() {
        this.workingDate.setDate(this.workingDate.getDate() + 1);
    }

    current = this.date.getDate();
    curDay = this.date.getDay();
    curMonth = this.date.getMonth();
    firstDay: number;

    createRange(number: number){
        var items: number[] = [];
        for(var i = 1; i <= number; i++){
            items.push(i);
        }
        return items;
    }

    createWeekArray(date: number){
        console.log(date);
        var items: number[] = [];
        for(var i = 0; i < 7; i++){
            console.log(date);
            items.push(date);
            //this.nextDay();
        }
        console.log(items);
        return items;
    }

    weekOne = this.createWeekArray(this.workingDate.getDate());
}



