import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseNotificationComponent } from './purchase-notification.component';

describe('PurchaseNotificationComponent', () => {
  let component: PurchaseNotificationComponent;
  let fixture: ComponentFixture<PurchaseNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
