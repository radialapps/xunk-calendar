import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XunkCalendarComponent } from './xunk-calendar.component';

describe('XunkCalendarComponent', () => {
  let component: XunkCalendarComponent;
  let fixture: ComponentFixture<XunkCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XunkCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XunkCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
