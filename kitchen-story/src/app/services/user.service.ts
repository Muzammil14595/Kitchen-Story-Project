import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = "http://localhost:8082/api/user";
  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl)
  }

  register(user:User){
    return this.http.post(this.baseUrl,user)
  }

  login(user:User){
    return this.http.post(this.baseUrl+"/login",user)
  }
}
