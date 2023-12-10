import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }

  getuserdata() : Observable<any>{
  return this.http.get("http://localhost:3000/posts");
  }
  
  deletedata(id:number) : Observable<any>{
    console.log("in service iddd :" ,id)
    return this.http.delete("http://localhost:3000/posts/" + id);
  }

  updatedata(data:any,id:any) : Observable<any>{
    console.log("in service :" ,data)
    return this.http.put("http://localhost:3000/posts/" +id,data);
  }

}
