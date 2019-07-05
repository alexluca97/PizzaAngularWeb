import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BottomComponent } from './components/layout/bottom/bottom.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { ShoppingCartComponent } from './components/popUp/shopping-cart/shopping-cart.component';
import { PurchaseNotificationComponent } from './components/popUp/purchase-notification/purchase-notification.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    MenuComponent,
    ShoppingCartComponent,
    PurchaseNotificationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
