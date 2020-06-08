import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastroanimal',
  templateUrl: './cadastroanimal.component.html',
  styleUrls: ['./cadastroanimal.component.css']
})
export class CadastroanimalComponent implements OnInit {

  constructor( private http : HttpClient){}

  
 
  onSubmit(data){


console.warn(data)

  }

  ngOnInit(): void {
  }

}
