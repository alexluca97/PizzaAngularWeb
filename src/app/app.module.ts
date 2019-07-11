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
import { RegisterComponent } from './components/register/register.component';
import {
  DxTabsModule, DxDataGridModule, DxSelectBoxModule, DxTextBoxModule, DxValidationGroupModule, DxFormModule,
  DxValidatorModule, DxValidationSummaryModule, DxButtonModule, DxListModule, DxTabPanelModule, DxPopupModule, DxPopoverModule,
  DxLookupModule, DxScrollViewModule, DxTagBoxModule, DxLoadPanelModule, DxHtmlEditorModule, DxTreeListModule, DxChartModule, DxMapModule
} from 'devextreme-angular';
import { LoginDevComponent } from './components/login-dev/login-dev.component';
import { RegisterDevComponent } from './components/register-dev/register-dev.component';
import { ShoppingCartDevComponent } from './components/popUp/shopping-cart-dev/shopping-cart-dev.component';

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
    RegisterComponent,
    LoginDevComponent,
    RegisterDevComponent,
    ShoppingCartDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DxTabsModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxValidationGroupModule,
    DxFormModule,
    DxValidatorModule,
    DxValidationSummaryModule,
    DxButtonModule,
    DxListModule,
    DxTabPanelModule,
    DxPopupModule,
    DxPopoverModule,
    DxLookupModule,
    DxScrollViewModule,
    DxTagBoxModule,
    DxLoadPanelModule,
    DxHtmlEditorModule,
    DxTreeListModule,
    DxChartModule,
    DxMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
