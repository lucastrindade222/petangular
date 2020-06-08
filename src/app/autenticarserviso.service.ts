import { baseUrl } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
 

}
