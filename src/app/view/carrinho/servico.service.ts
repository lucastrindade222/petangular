import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicoService {

 

  private readonly lin="http://localhost:8080/vendas?page=0";

  constructor(private http: HttpClient) { }


list(){
  return this.http.get(this.lin);

}
  
}
