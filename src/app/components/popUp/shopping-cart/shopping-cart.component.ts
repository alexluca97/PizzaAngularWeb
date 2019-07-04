import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})


export class ShoppingCartComponent implements OnInit {
  @Input() isPopupVisible: boolean;
  @Output() isPopupClosed: EventEmitter<boolean> = new EventEmitter();

  productsCart: any;
  totalPrice: string;


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.productsCart = this.cartService.getProducts();
  }

  ngAfterContentChecked(){
    this.totalPrice = this.cartService.getTotalPrice();
  }

  deleteProduct(product){
    this.cartService.deleteProduct(product);
  } 

  onClose(isPopupVisible){
    this.isPopupVisible = !isPopupVisible;
    this.isPopupClosed.emit(isPopupVisible);
  }

  onCommand(){
    this.productsCart = this.cartService.resetCart();
    alert("Comanda dumneavoastra a fost inregistrata");
    this.onClose(this.isPopupVisible);
  }

}
