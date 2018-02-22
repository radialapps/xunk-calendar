# XunkCalendar

XunkCalendar is a simple calendar component with material design designed for Angular 5+ and Angular Material (might work with earlier versions too!).
A live demo can be found at https://go-xunk.github.io/xunk-calendar-demo/

[![wercker status](https://app.wercker.com/status/2e408ee45406b11f458c813a7b3ccaf5/s/master "wercker status")](https://app.wercker.com/project/byKey/2e408ee45406b11f458c813a7b3ccaf5)
[![CircleCI](https://circleci.com/gh/radialapps/xunk-calendar.svg?style=shield)](https://circleci.com/gh/radialapps/xunk-calendar)

[![GitHub version](https://badge.fury.io/gh/radialapps%2Fxunk-calendar.svg)](https://badge.fury.io/gh/radialapps%2Fxunk-calendar)
[![GitHub license](https://img.shields.io/github/license/radialapps/xunk-calendar.svg)](https://github.com/radialapps/xunk-calendar/blob/master/LICENSE)
[![Dependencies](https://david-dm.org/radialapps/xunk-calendar/status.svg)](https://david-dm.org/radialapps/xunk-calendar)
[![Dev Dependencies](https://david-dm.org/radialapps/xunk-calendar/dev-status.svg)](https://david-dm.org/radialapps/xunk-calendar?type=dev)

[![npm version](https://badge.fury.io/js/xunk-calendar.svg)](https://badge.fury.io/js/xunk-calendar)

# Installation

The package is hosted on npm, so you can install it just by

```Bash
npm install xunk-calendar
```

# Usage

First, import `XunkCalendarModule` into `app.module`. You may then use the component as
```HTML
<xunk-calendar [selectedDate]="selDate"></xunk-calendar>
```

`selectedDate` binds to a JSON object of the following format (say for 2018-02-16):
```javascript
{
  date: 16,
  month: 1,
  year: 18
}
```

Note that month starts with 0, but date starts with 1. To quickly make the initial selected date to today, you may do
```typescript
selDate = XunkCalendarModule.getToday();
```

# Dependencies
The component makes use of `mat-icon` and `mat-button` from `@angular/material`. You may need other dependencies in `package.json` to build the module.

# Known Issues
Currently, the selectedDate object has to be initialized properly, and a minimal initialization looks like
```typescript
public selDate = { date:1, month:1, year:1 };

ngOnInit() {
  this.selDate = XunkCalendarModule.getToday();
}
```

# Contributing
Contributing is free! You are welcome to criticize, help write code, file bugs or give me a lesson on how to properly comment code, as long as no one gets sued! If there is one thing, since circle ci's build will test for it, it is absolutely imperative to lint your code with `ng lint`.
