import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{tap}from 'rxjs/operators'
import { Ate } from './listaat';
@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private readonly lin="http://localhost:8080/historico";

  constructor(private http: HttpClient) { }

  list(){
   
    return this.http.get<Ate[]>(this.lin).pipe(
      tap(console.log)

   

    );

}

}
