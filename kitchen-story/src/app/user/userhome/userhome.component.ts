import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {

  items:Item[];

  //searchedText:string;

  constructor(private service: ItemService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(){
    return this.service.getAllItems().subscribe(ob=>this.items=ob);
  }


  // onSubmit(){
  //   this.service.getItemByName(this.searchedText).subscribe(ob=>console.log(ob));
  // }
}
