/**
 * Created by Sasha on 16.01.2017.
 */
import  {Component, OnInit} from '@angular/core';

@Component({
    selector: 'date-picker',
    template: `
        <h1> {{ title }} </h1>
        <div>
        <div class="day-name">Пн</div>
        <div class="day-name">Вт</div>
        <div class="day-name">Ср</div>
        <div class="day-name">Чт</div>
        <div class="day-name">Пт</div>
        <div class="day-name">Сб</div>
        <div class="day-name">Вс</div>
        <div *ngFor="let week of fullMonth;"> 
             <div 
             *ngFor="let day of week;"
             [class.selected]="day === selectedDay"
             (click)="onSelect(day)" class="day">
                {{ day.getDate() }}
             </div>
        </div>
        </div>

    `,
    styleUrls: ['app/app.component.css']})

export class AppComponent implements OnInit{
    title = 'Datepicker';
    date = new Date();
    workingDate: Date;
    selectedDay: Date;
    fullMonth: Date[][];
    
    ngOnInit(): void {

        if ((new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay() == 0) {
            this.workingDate = new Date(this.date.getFullYear(), this.date.getMonth(), -5);
        } else {
            this.workingDate = new Date(this.date.getFullYear(), this.date.getMonth(), 2 - (new Date(this.date.getFullYear(), this.date.getMonth(), 1)).getDay());
        }
        this.fullMonth = this.createMonthArray();
        console.log(this.fullMonth);

    }

    nextDay(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    }

    createMonthArray(): Date[][] {
        var items: Date[][] = [];
        do {
            items.push(this.createWeekArray());
        } while (this.workingDate.getMonth() == this.date.getMonth());
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
        this.selectedDay = day;
    }
}



