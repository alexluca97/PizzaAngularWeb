import { Injectable } from '@angular/core';
import { ProductCart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ProductCart[];

  pizzaDimensionStatistics = JSON.parse(localStorage.getItem('pizzaStatistics')) ||
    {
      mica: 0,
      medie: 0,
      mare: 0
    };

  //pizzaTypeStatistics = JSON.parse(localStorage.getItem('pizzaTypeStatistics')) || [{}];

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

  getStatistics() {
    this.cart.forEach(element => {
      switch (element.type) {
        case 'mica':
          this.pizzaDimensionStatistics.mica = this.pizzaDimensionStatistics.mica + element.quantity;
          break;
        case 'medie':
          this.pizzaDimensionStatistics.medie = this.pizzaDimensionStatistics.medie + element.quantity;
          break;
        case 'mare':
          this.pizzaDimensionStatistics.mare = this.pizzaDimensionStatistics.mare + element.quantity;
          break;
        default:
      }
    });

    localStorage.setItem('pizzaStatistics', JSON.stringify(this.pizzaDimensionStatistics));
  }


}
