import { Injectable } from '@angular/core';
import { ProductCart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ProductCart[];
  constructor() {
    this.cart = [];
  }

  addProduct(name: string, type: string, price: number) {
    const x = this.cart.find(xp => xp.name === name && xp.type === type);
    if (x) {
      x.quantity += 1;
      x.price = parseFloat((x.price + price).toFixed(2));
    } else {
      this.cart.push({ name, type, quantity: 1, price });
    }
    console.log(this.cart);
  }

  getProducts() {
    return this.cart;
  }

  deleteProduct(product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  getTotalPrice() {
    let total = 0;
    this.cart.forEach(element => {
      total += element.price;
    });
    return total.toFixed(2);
  }

  resetCart() {
    return this.cart = [];
  }
}
