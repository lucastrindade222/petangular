import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ser } from './listser';
import{tap}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ServicosService {

private readonly lin=" http://localhost:8080/services";

  constructor(private http: HttpClient) { }


list(){
  return this.http.get<Ser[]>(this.lin).pipe(
    tap(console.log)
  );

}


}
