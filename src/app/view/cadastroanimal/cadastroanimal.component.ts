 
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastroanimal',
  templateUrl: './cadastroanimal.component.html',
  styleUrls: ['./cadastroanimal.component.css']
})
export class CadastroanimalComponent implements OnInit {

  constructor( private http : HttpClient ){}

  
 
  onSubmit(){


    let nome:String=(<HTMLInputElement>document.getElementById("Nome")).value;
    let Idadet=(<HTMLInputElement>document.getElementById('Idade')).value; 
    let pelagem=(<HTMLInputElement>document.getElementById('pelagem')).value; 
    let pessot=(<HTMLInputElement>document.getElementById('pesso')).value; 
    let raca=(<HTMLInputElement>document.getElementById('raca')).value; 
    let tamanhot=(<HTMLInputElement>document.getElementById('tamanho')).value; 
    
    
    let idade = Number.parseInt(Idadet)
    let pesso = Number.parseInt(pessot)
    let tamanho = Number.parseInt(tamanhot)
    let id_pessoa:number=1
 

    let data ={
	
      nome,raca,
      pelagem,
      idade
     ,pesso,tamanho,
    pessoa: {
      id_pessoa
        
      }
  
 
}

     
    console.warn(data)
    this.http.post('http://localhost:8080/animal',data).subscribe((resultado)=>{
      console.warn('resultado',resultado)
  
      
    })

   ;
   alert("O Pet foi cadastrado")
  }

  ngOnInit(): void {
  }

}
