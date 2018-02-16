import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'xunk-calendar',
    templateUrl: './xunk-calendar.component.html',
    styleUrls: ['./xunk-calendar.component.css']
  })
  export class XunkCalendarComponent implements OnInit {
  
    ngOnInit() {
      /* Display initial */
      this.displayCalendar();
    }
  
    /** Today */
    @Input() public today;
  
    /** The page open with [xx, month, year] */
    @Input() public openPage;
  
    /** Currently selected date */
    @Input() public selectedDate;
  
    /** Array with all the calendar data */
    @Input() public calendar: any[] = [];
  
    /** Constants */
    public readonly monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
    public readonly dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
  
    /** CalendarComponent */
    constructor() {
      /* Initialize */
      this.calendar = [];
  
      this.today = this.getToday();
      this.openPage = {...this.today};
      this.selectedDate = {...this.today};
    }
  
    /** Returns true if fab! */
    public isFab(col:number): string {
      if ((col === this.selectedDate.date) &&
          (this.openPage.month === this.selectedDate.month) && 
          (this.openPage.year === this.selectedDate.year))
          return "warn";
      if ((col === this.today.date) &&
          (this.openPage.month === this.today.month) && 
          (this.openPage.year === this.today.year))
          return "primary";
      return "";
    }
  
    /** Select a day in the open page */
    public selectDay(col:number) {
      this.selectedDate.date = col;
      this.selectedDate.month = this.openPage.month;
      this.selectedDate.year = this.openPage.year;
    }
  
    /** Change the month +1 or -1 */
    public changeMonth(diff:number) {
      this.openPage.month += diff;
  
      /* See if the year switches */
      if (this.openPage.month >= 12 ){
        this.openPage.month = 0;
        this.openPage.year++;
      }
  
      if (this.openPage.month < 0 ){
        this.openPage.month = 11;
        this.openPage.year--;
      }
  
      /* Refresh */
      this.displayCalendar();
    }
  
    /** Compute the calendar */
    public displayCalendar(){
      /* Generate a new object */
      let newCalendar = [];
  
      let FebNumberOfDays: number;
      let counter = 1;
      var numOfDays: number;
      
      let month = this.openPage.month;
      let nextMonth = month + 1;
      let prevMonth = month - 1;
  
      let year = this.openPage.year;
      
      /* Check leap years */
      if (month == 1){
         if ( (year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)){
           FebNumberOfDays = 29;
         } else {
           FebNumberOfDays = 28;
         }
      }
      
      var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]
      
      /* Days in previous month and next one , and day of week */
      //var nextDate = new Date(nextMonth +' 1 ,'+year);
      var nextDate = new Date(year, nextMonth);
      var weekdays = nextDate.getDay();
      var weekdays2 = weekdays
      var numOfDays = Number(dayPerMonth[month]); 
    
      /* This leaves a white space for days of pervious month */
      let colno: number = 0;
      let rowno: number = 0;
  
      newCalendar[rowno] = [];
  
      while (weekdays>0){
        newCalendar[rowno][colno] = "";
        colno++;
        weekdays--;
      }
      
      // loop to build the calander body.
      while (counter <= numOfDays){
      
          // When to start new line.
         if (weekdays2 > 6){
             weekdays2 = 0;
             rowno++;
             colno = 0;
             newCalendar[rowno] = [];
         }
  
         newCalendar[rowno][colno] = counter;
  
         colno++;
         weekdays2++;
         counter++;
      }
  
      this.calendar = newCalendar;
     }
     
     private getToday(): any {
        let dateNow = new Date();
        return {
          date: dateNow.getDate(),
          month: dateNow.getMonth(), 
          year: dateNow.getFullYear()
        };
    }
}