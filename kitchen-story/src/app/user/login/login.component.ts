import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User = new User();
  constructor(private service:UserService,private router:Router){}

  onSubmit(){
    this.service.login(this.user).subscribe(resp=>{
      this.router.navigate(['userhome']);
    }, error=>console.log(error));
  }

}
