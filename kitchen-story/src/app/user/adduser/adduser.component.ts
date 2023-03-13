import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  user:User = new User();
  constructor(private service:UserService,private router:Router){}

  onSubmit(){
    this.service.register(this.user).subscribe(resp=>{
      this.router.navigate(['login']);
    }, error=>console.log(error));
    alert("Registeration done successfuly");
  }
}
