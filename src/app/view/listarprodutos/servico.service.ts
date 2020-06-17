import { Pro } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private readonly lin="  http://localhost:8080/produto";

  constructor(private http: HttpClient) { }


list(){
  return this.http.get<Pro[]>(this.lin).pipe(
    tap(console.log)
  );

}

}
