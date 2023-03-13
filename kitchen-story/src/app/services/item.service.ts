import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl:string ="http://localhost:8082/api/item"
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl)
  }

  addItem(item:Item){
    return this.http.post(this.baseUrl, item);
  }

  delItem(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

  getItemByName(name:string){
    return this.http.get(this.baseUrl+"/getByName/"+name);
  }
}
