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

   addProduct(productName:string, productType:string, productPrice:number){
    let x = this.cart.find(x => x.productName === productName && x.productType === productType);
    if(x){
      x.productQuantity += 1;
      x.productPrice = parseFloat((x.productPrice + productPrice).toFixed(2));
    }  
    else{
      this.cart.push({productName: productName, productType: productType, productQuantity: 1, productPrice:productPrice});
    }
   }

   getProducts(){
     return this.cart;
   }

   deleteProduct(product){
    var index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
   }

   getTotalPrice(){
     let total = 0;
     this.cart.forEach(element => {
       total+=element.productPrice;
     });
     return total.toFixed(2);
   }

   resetCart(){
     this.cart = [];
   }
}
