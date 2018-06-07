# XunkCalendar

XunkCalendar is a simple calendar component with material design designed for Angular 6+ and Angular Material (might work with earlier versions too!). It allows creation of a heatmap for dates (with strange syntax, since this was designed for a specific project). Check the demo app's source for how to do this.
A live demo can be found at https://radialapps.github.io/xunk-calendar/

[![Build Status](https://travis-ci.org/radialapps/xunk-calendar.svg?branch=master)](https://travis-ci.org/radialapps/xunk-calendar)

[![demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://radialapps.github.io/xunk-calendar/)
[![Maintainability](https://api.codeclimate.com/v1/badges/83af59f2a3f6e593e4dc/maintainability)](https://codeclimate.com/github/radialapps/xunk-calendar/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3b4ce4ee34a74d428aed7826c70f7c47)](https://www.codacy.com/app/pulsejet/xunk-calendar?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=radialapps/xunk-calendar&amp;utm_campaign=Badge_Grade)

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
Contributing is free! You are welcome to criticize, help write code, file bugs or give me a lesson on how to properly comment code! If there is one thing, since circleci's build will test for it, it is absolutely imperative to lint your code (with `ng lint`).
