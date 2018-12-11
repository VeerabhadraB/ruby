import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  logurl = "http://localhost:3000/api/login";
   header = new  HttpHeaders({'Access-Control-Allow-Origin':'*','Access-Control-Allow-Credentials':'true',
    'Access-Control-Allow-Methods': 'GET, POST'})
  logIn(usermail:any):Observable<any>{
    return this.http.post(this.logurl,{email:usermail},{headers:this.header}
    );
  }
  
  getAuthToken(){
    return localStorage.getItem('TOKEN');
  }
  isAuthenticated(){
    return this.getAuthToken()!=null;
  }
  logOut(){
    localStorage.removeItem('TOKEN')
  }
}
