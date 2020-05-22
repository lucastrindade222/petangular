import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

 
constructor( private http : HttpClient){}
 perfis='[2]'
 

  onSubmit(data){

this.http.post('http://localhost:8080/pessoa',data).subscribe((resultado)=>{
  console.warn('resultado',resultado)
})

console.warn(data)

  }





  ngOnInit(): void {



    
  }

}
