import { Component, OnInit } from '@angular/core';

import { XunkCalendarModule } from './modules/xunk-calendar/xunk-calendar.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public selDate = { date: 1, month: 1, year: 1 };

  ngOnInit() {
      this.selDate = XunkCalendarModule.getToday();
  }

}
