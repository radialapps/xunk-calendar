import { Component, OnInit } from '@angular/core';

import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';
import { XunkDate } from '../xunk-calendar/xunk-calendar.component';

@Component({
  selector: 'xunk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public selDate = { date: 1, month: 1, year: 1 };

  public heatmap = {} as any;

  public month: XunkDate;

  ngOnInit() {
      this.selDate = XunkCalendarModule.getToday();
      this.month = this.selDate;
      this.heatmap = this.genDemoHeatmap();
  }

  /** Generates a demo heatmap */
  genDemoHeatmap(): any {
    const year = new Date().getFullYear();
    const heatmap = {};
    for (let m = 1; m <= 12; m++) {
      const month = XunkCalendarModule.zeroPad(m, 2);
      const entries = {'02': 1.0, '06': 0.1, '08': 0.4, '13': 0.7, '15': 0.3, '21': 0.1, '24': 0.5} as any;
      for (const key in entries) {
        if (key in entries) {
          heatmap[Number(year.toString() + month.toString() + key)] = entries[key];
        }
      }
    }
    return heatmap;
  }

  /** Log changes in date */
  dateChanged(data: XunkDate) {
    console.log(data);
  }

  /** Log changes to month */
  monthChanged(data: XunkDate) {
    this.month = data;
  }

}
