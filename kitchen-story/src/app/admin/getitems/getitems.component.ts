import { Component } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-getitems',
  templateUrl: './getitems.component.html',
  styleUrls: ['./getitems.component.css']
})
export class GetitemsComponent {

  items:Item[];

  constructor(private service:ItemService){}

  ngOnInit(){
    return this.service.getAllItems().subscribe(ob=>this.items=ob);
  }
}
