import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcustComponent } from './user/listcust/listcust.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { GetitemsComponent } from './admin/getitems/getitems.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdditemComponent } from './admin/additem/additem.component';
import { DelitemComponent } from './admin/delitem/delitem.component';
import { UserhomeComponent } from './user/userhome/userhome.component';

import { BuyitemComponent } from './user/buyitem/buyitem.component';
import { OrderComponent } from './user/order/order.component';
import { ChangepassComponent } from './admin/changepass/changepass.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcustComponent,
    AdduserComponent,
    LoginComponent,
    AdminLoginComponent,
    GetitemsComponent,
    AdminhomeComponent,
    AdditemComponent,
    DelitemComponent,
    UserhomeComponent,
    BuyitemComponent,
    OrderComponent,
    ChangepassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
