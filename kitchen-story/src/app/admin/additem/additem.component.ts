import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {

  item:Item = new Item();
  constructor(private service:ItemService, private router:Router){}

  onSubmit(){
    this.service.addItem(this.item).subscribe(resp=>{
      this.router.navigate(['getitems']);
    }, error=>console.log(error));
    alert("Item added successfully");
  }
}
