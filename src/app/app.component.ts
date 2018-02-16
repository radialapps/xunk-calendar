import { Component } from '@angular/core';

import { XunkCalendarModule } from './modules/xunk-calendar/xunk-calendar.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public selDate = {};

  ngOnInit() {
      this.selDate = XunkCalendarModule.getToday();
  }

}
