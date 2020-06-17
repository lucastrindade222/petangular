import { HttpClient } from '@angular/common/http';
import { Cli } from './cliete';
import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

cliente :Cli




  constructor(private http:HttpClient) { }



  ngOnInit(): void {
  

    this.http.get<Cli>('http://localhost:8080/pessoa/1').subscribe(data => {
    
    
    this.cliente = data;
        
          


})
  
  
  };




  onSubmit(){
    

    
    let nome:String=(<HTMLInputElement>document.getElementById("nome")).value;
    let cpfs=(<HTMLInputElement>document.getElementById('cpf')).value; 
    let email:String=(<HTMLInputElement>document.getElementById('email')).value; 
    let senha:String=(<HTMLInputElement>document.getElementById('senha')).value; 
    let numeros=(<HTMLInputElement>document.getElementById('numero')).value; 
    let rua:String=(<HTMLInputElement>document.getElementById('rua')).value; 
    let bairro:String=(<HTMLInputElement>document.getElementById('bairro')).value; 
    let cidade:String=(<HTMLInputElement>document.getElementById('cidade')).value; 
    let uf:String=(<HTMLInputElement>document.getElementById('uf')).value; 
    let cep=(<HTMLInputElement>document.getElementById('cep')).value; 
    let complemento:String=(<HTMLInputElement>document.getElementById('complemento')).value;
    
    let Telefone=(<HTMLInputElement>document.getElementById('telefone')).value;
    let p:number=1;
    
    let perfis=[p]
    let cpf = Number.parseInt(cpfs)
    let numero = Number.parseInt(numeros)
    let ntelefone= Number.parseInt(Telefone)
    let telefones = [ntelefone]
     
    
if(nome == ""){
  nome= this.cliente.nome
} if( Number.isNaN(cpf)){
  cpf= this.cliente.cpf
}if(email == ""){
  email = this.cliente.email
}
if(senha == ""){
senha = this.cliente.senha
}
if(Number.isNaN(numero)){
numero = this.cliente.endereco.numero
}if(rua == "" ){
rua = this.cliente.endereco.rua
}if(bairro == ""){
bairro = this.cliente.endereco.bairro
}if(cidade == ""){
  cidade = this.cliente.endereco.cidade
}if(uf == ""){
  uf = this.cliente.endereco.uf
}if(complemento == ""){
complemento = this.cliente.endereco.complemento
} if(Telefone == ""){
  telefones=this.cliente.telefones
}

let id :Number=1

    let data ={nome,cpf,email,perfis,telefones,
    
      endereco: {numero,rua,bairro,cidade,uf,cep,complemento} 
    }
    
     console.warn(data)
     this.http.put('http://localhost:8080/pessoa/'+id,data).subscribe((resultado)=>{
      console.warn('resultado',resultado)
    })
  }

}
