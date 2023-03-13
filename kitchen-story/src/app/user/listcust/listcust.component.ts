import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listcust',
  templateUrl: './listcust.component.html',
  styleUrls: ['./listcust.component.css']
})
export class ListcustComponent {

  users:User[];

  constructor(private service:UserService){}

  ngOnInit(){
    return this.service.getAllUsers().subscribe(ob=>this.users=ob);
  }
}
