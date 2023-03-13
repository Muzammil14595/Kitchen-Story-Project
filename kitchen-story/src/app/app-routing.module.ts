import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetitemsComponent } from './admin/getitems/getitems.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ListcustComponent } from './user/listcust/listcust.component';
import { LoginComponent } from './user/login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdditemComponent } from './admin/additem/additem.component';
import { DelitemComponent } from './admin/delitem/delitem.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { BuyitemComponent } from './user/buyitem/buyitem.component';
import { OrderComponent } from './user/order/order.component';
import { ChangepassComponent } from './admin/changepass/changepass.component';

const routes: Routes = [
  {path:"listcust",component:ListcustComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"login",component:LoginComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"getitems",component:GetitemsComponent},
  {path:"adminhome",component:AdminhomeComponent},
  {path:"additem",component:AdditemComponent},
  {path:"delitem/:id",component:DelitemComponent},
  {path:"userhome",component:UserhomeComponent},
  {path:"buyitem",component:BuyitemComponent},
  {path:"order",component:OrderComponent},
  {path:"changepass",component:ChangepassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
