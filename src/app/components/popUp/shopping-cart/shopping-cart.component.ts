import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  @Input() isPopupVisible: boolean;
  productsCart: any;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.productsCart = this.productsCart = this.cartService.getProducts();
  }

}
