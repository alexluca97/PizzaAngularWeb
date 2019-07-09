import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  isNotificationVisible: boolean;

  constructor(private dataService: DataService, private cartService:CartService) { }

  ngOnInit() {
    this.isNotificationVisible = false;

    this.products = this.dataService.getProducts();
  }

  buyBtnPressed() {
    this.isNotificationVisible = true;

    setTimeout(() => {
      this.isNotificationVisible = false;
    }, 2000);
  }

  addProduct(product: any, type: any) {
    console.log(product + ' ' + type);
    console.log(this.dataService.getProducts());
    this.cartService.addProduct(product.name, type[0],type[2]);
    this.buyBtnPressed();
  }

}
