import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-delitem',
  templateUrl: './delitem.component.html',
  styleUrls: ['./delitem.component.css']
})
export class DelitemComponent {

  item:Item;
  constructor(private service:ItemService,private actRoute:ActivatedRoute, private router:Router){}

  ngOnInit(){
    const id= this.actRoute.snapshot.paramMap.get("id");
    this.service.delItem(Number(id)).subscribe(resp=>{
      this.router.navigate(['getitems']);
    }, error=>console.log(error));
    alert("Item deleted");
  }
}
