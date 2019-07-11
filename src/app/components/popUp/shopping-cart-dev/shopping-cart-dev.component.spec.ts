import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartDevComponent } from './shopping-cart-dev.component';

describe('ShoppingCartDevComponent', () => {
  let component: ShoppingCartDevComponent;
  let fixture: ComponentFixture<ShoppingCartDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
