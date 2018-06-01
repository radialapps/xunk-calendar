import { Component, OnInit } from '@angular/core';

import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';

@Component({
  selector: 'xunk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public selDate = { date: 1, month: 1, year: 1 };

  public heatmap = {
    1: 0.8,
    2: 0.5,
    3: 0.3,
    4: 0.1,
    27: 0.5
  };

  ngOnInit() {
      this.selDate = XunkCalendarModule.getToday();
  }

  /** Log changes in date */
  dateChanged(data: any) {
    console.log(data);
  }

}
