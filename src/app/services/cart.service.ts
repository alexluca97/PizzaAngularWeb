import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[];
  constructor() {
    this.cart = [];
   }

   addProduct(productName:string, productType:string, productPrice:number){
     this.cart.push({productName: productName, productType: productType, productPrice:productPrice});
   }

   getProducts(){
     return this.cart;
   }

   getProduct(id){
     return this.cart[id];
   }

   deleteProduct(id){
    var index = this.cart.indexOf(id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
   }

   getTotalPrice(){
     let total = 0;
     this.cart.forEach(element => {
       total+=element.productPrice;
     });
     return total;
   }
}
