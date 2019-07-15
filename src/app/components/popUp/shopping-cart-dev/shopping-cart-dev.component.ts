import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductCart } from 'src/app/models/Cart';


@Component({
  selector: 'app-shopping-cart-dev',
  templateUrl: './shopping-cart-dev.component.html',
  styleUrls: ['./shopping-cart-dev.component.css']
})
export class ShoppingCartDevComponent implements OnInit {
  @Input() isPopupVisible: boolean;
  @Output() isPopupClosed: EventEmitter<boolean> = new EventEmitter();

  productsCart: any;
  totalPrice: string;


  constructor(public cartService: CartService) {
    this.productsCart = this.cartService.cart;
  }

  calculatePrice = (e) => {
    return e.quantity * e.price;
  }

  indexOfProduct = (e) => {
    return this.productsCart.indexOf(e) + 1;
  }
  ngOnInit() { }

  onContinue(isPopupVisible) {
    this.isPopupVisible = !isPopupVisible;
    this.isPopupClosed.emit(isPopupVisible);
  }

  onOrder() {
    this.productsCart = this.cartService.resetCart();
    alert('Comanda dumneavoastra a fost inregistrata');
    this.onContinue(this.isPopupVisible);
  }

  onToolbarPreparing(ev: any) {
    ev.toolbarOptions.items.unshift({
      location: 'before',
      widget: 'dxButton',
      options: {
        icon: 'refresh',
        onClick: ev.component.refresh(),
        hint: 'Refresh'
      }
    });
  }
}
