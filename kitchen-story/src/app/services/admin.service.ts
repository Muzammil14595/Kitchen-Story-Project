import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  baseUrl:string = "http://localhost:8082/api/admin"
  constructor(private http:HttpClient) { }

  adminLogin(admin:Admin){
    return this.http.post(this.baseUrl+"/login", admin);
  }

  changePassword(admin:Admin){
    return this.http.put(this.baseUrl, admin);
  }
}
