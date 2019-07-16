import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticDevComponent } from './statistic-dev.component';

describe('StatisticDevComponent', () => {
  let component: StatisticDevComponent;
  let fixture: ComponentFixture<StatisticDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
