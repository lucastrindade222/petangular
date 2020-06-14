import { baseUrl } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticarservisoService {

  constructor(private http:HttpClient) { }



  
lagin(data):Observable<any>{

 



 
  console.log('esta verificando...',data)

   
  return  this.http.post(`http://localhost:8080/login`,data,{responseType:'text'as'json'})
} 
 
public geradorToken(request){
   return this.http.post("http://localhost:8080/login",request,{responseType:'text'as'json'});
}

public welcome(token){
let tokenStr='Bearer'+token;
const headers = new HttpHeaders().set("Authorization",tokenStr);
return this.http.get(`http://localhost:8080/`,{headers,responseType:'text'as'json'})
}


}
