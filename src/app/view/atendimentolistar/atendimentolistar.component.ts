import { ListaService } from './lista.service';
 
import { Component, OnInit } from '@angular/core';
import { Ate } from './listaat';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-atendimentolistar',
  templateUrl: './atendimentolistar.component.html',
  styleUrls: ['./atendimentolistar.component.css']
})




export class AtendimentolistarComponent implements OnInit {

 
  lista : Ate[];
  id_animal : Number
  cliente:number
 
  


  constructor(private service:ListaService) { }

  ngOnInit(): void {


    ; 
 

 
 
 
 
 


    console.log("dfaf")

     this.service.list().subscribe(dados => {
      this.lista = dados;
      for(let i in this.lista){
        let bairro=(<HTMLInputElement>document.getElementById('tabela')).innerHTML+="<tr><td>"+this.lista[i].id_consuta+"</td> <td>"+this.lista[i].data_consulta+"</td><td>"+this.lista[i].hoje+"</td><td>"+this.lista[i].servicos.id_servico+"</td><td>"+this.lista[i].animal.id_animal+"</td><td>"+this.lista[i].animal.pessoa.id_pessoa+"</td></tr>"
      }
      
     });

    
  

    
  }








}
