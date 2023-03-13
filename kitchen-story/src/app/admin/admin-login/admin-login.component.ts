import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  admin:Admin = new Admin();
  constructor(private service:AdminService,private router:Router){}

  onSubmit(){
    this.service.adminLogin(this.admin).subscribe(resp=>{
      this.router.navigate(['adminhome']);
    }, error=>console.log(error));
    alert("Admin Logged in successfuly");
    
    
  }
}
