# XunkCalendar

XunkCalendar is a simple calendar component with material design designed for Angular 5+ and Angular Material (might work with earlier versions too!).
A live demo can be found at https://go-xunk.github.io/xunk-calendar-demo/

# Installation

The package is hosted on npm, so you can install it just by

```Bash
npm install xunk-ferrous
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
Contributing is free! You are welcome to criticize, help write code, file bugs or give me a lesson on how to properly comment code, as long as no one gets sued!
