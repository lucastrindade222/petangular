import { Ani } from './listaanimal';
import { Injectable } from '@angular/core';
import{tap}from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private readonly lin="http://localhost:8080/animal";

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Ani[]>(this.lin).pipe(
      tap(console.log)
    );


}


}