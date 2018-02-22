import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'xunk-calendar',
    templateUrl: './xunk-calendar.component.html',
    styleUrls: ['./xunk-calendar.component.css']
  })
  export class XunkCalendarComponent implements OnInit {

    /** Today */
    @Input() public today;

    /** The page open with [xx, month, year] */
    @Input() public openPage;

    /** Currently selected date */
    @Input() public selectedDate;

    /** Array with all the calendar data */
    @Input() public calendar: any[] = [];

    /** Constants */
    public readonly monthNames =
      [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
    public readonly dayNames =
      [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thrusday', 'Friday', 'Saturday'
      ];

    /** CalendarComponent */
    constructor() {
      /* Initialize */
      this.calendar = [];

      this.today = this.getToday();
      this.openPage = {...this.today};
      this.selectedDate = {...this.today};
    }

    ngOnInit() {
      /* Display initial */
      this.displayCalendar();
    }

    /** Returns true if two dates are on same page */
    public samePage(a, b): boolean {
      return a.month === b.month &&
             a.year === b.year;
    }

    /** Returns true if fab! */
    public isFab(col: number): string {
      if (this.samePage(this.openPage, this.selectedDate)) {
        if (col === this.selectedDate.date) {
          return 'warn';
        } else if (col === this.today.date) {
          return 'primary';
        }
      }
      return '';
    }

    /** Select a day in the open page */
    public selectDay(col: number) {
      this.selectedDate.date = col;
      this.selectedDate.month = this.openPage.month;
      this.selectedDate.year = this.openPage.year;
    }

    /** Change the month +1 or -1 */
    public changeMonth(diff: number) {
      this.openPage.month += diff;

      /* See if the year switches */
      if (this.openPage.month >= 12 ) {
        this.openPage.month = 0;
        this.openPage.year++;
      }

      if (this.openPage.month < 0 ) {
        this.openPage.month = 11;
        this.openPage.year--;
      }

      /* Refresh */
      this.displayCalendar();
    }

    /** Compute the calendar */
    public displayCalendar() {
      /* Generate a new object */
      const newCalendar = [];

      let FebNumberOfDays: number;
      let counter = 1;

      const month = this.openPage.month;
      const nextMonth = month + 1;
      const prevMonth = month - 1;

      const year = this.openPage.year;

      /* Check leap years */
      if (month === 1) {
         if ( (year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
           FebNumberOfDays = 29;
         } else {
           FebNumberOfDays = 28;
         }
      }

      const dayPerMonth = ['31', FebNumberOfDays, '31', '30', '31', '30',
        '31', '31', '30', '31', '30', '31'];

      /* Days in previous month and next one , and day of week */
      const nextDate = new Date(year, nextMonth);
      let weekdays = nextDate.getDay();
      let weekdays2 = weekdays;
      const numOfDays = Number(dayPerMonth[month]);

      let colno = 0;
      let rowno = 0;

      newCalendar[rowno] = [];

      /* This leaves a white space for days of the previous month */
      while (weekdays > 0) {
        newCalendar[rowno][colno] = '';
        colno++;
        weekdays--;
      }

      /* Loop to build the calander body */
      while (counter <= numOfDays) {

         /* When to start new line */
         if (weekdays2 > 6) {
             weekdays2 = 0;
             rowno++;
             colno = 0;
             newCalendar[rowno] = [];
         }

         /* Set the value */
         newCalendar[rowno][colno] = counter;

         /* Increment all counters */
         colno++;
         weekdays2++;
         counter++;
      }

      /* Set the calendar to the newly computed one */
      this.calendar = newCalendar;
     }

     /* Get today's date */
     private getToday(): any {
        const dateNow = new Date();
        return {
          date: dateNow.getDate(),
          month: dateNow.getMonth(),
          year: dateNow.getFullYear()
        };
    }
}
