import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

 
constructor( private http : HttpClient){}
 
 



  onSubmit(){
    

    
let nome:String=(<HTMLInputElement>document.getElementById("nome")).value;
let cpfs=(<HTMLInputElement>document.getElementById('cpf')).value; 
let email=(<HTMLInputElement>document.getElementById('email')).value; 
let senha=(<HTMLInputElement>document.getElementById('senha')).value; 
let numeros=(<HTMLInputElement>document.getElementById('numero')).value; 
let rua=(<HTMLInputElement>document.getElementById('rua')).value; 
let bairro=(<HTMLInputElement>document.getElementById('bairro')).value; 
let cidade=(<HTMLInputElement>document.getElementById('cidade')).value; 
let uf=(<HTMLInputElement>document.getElementById('uf')).value; 
let cep=(<HTMLInputElement>document.getElementById('cep')).value; 
let complemento=(<HTMLInputElement>document.getElementById('complemento')).value;

let Telefone=(<HTMLInputElement>document.getElementById('telefone')).value;
let p:number=1;

let perfis=[p]
let cpf = Number.parseInt(cpfs)
let numero = Number.parseInt(numeros)
let ntelefone= Number.parseInt(Telefone)
let telefones = [ntelefone]
 

let data ={nome,cpf,email,senha,perfis,telefones,

  endereco: {numero,rua,bairro,cidade,uf,cep,complemento} 
}

 
console.warn(data)
this.http.post('http://localhost:8080/pessoa',data).subscribe((resultado)=>{
  console.warn('resultado',resultado)
})

 

  }





  ngOnInit(): void {



    
  }

}
