import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {

  constructor(private http : HttpClient) {}




  onSubmit(){


     

    let idanimalt=(<HTMLInputElement>document.getElementById("idanimal")).value;
    let idservicot=(<HTMLInputElement>document.getElementById("idservico")).value;
    let data_consulta:String=(<HTMLInputElement>document.getElementById("data")).value;

    let id_servico = Number.parseInt(idanimalt)
    let id_animal = Number.parseInt(idservicot)
    
    
     
    

    let data={data_consulta,
      servicos:{
        id_servico
      },animal:{
        id_animal
      }
    }


    console.warn(data)
    this.http.post('http://localhost:8080/historico',data).subscribe((resultado)=>{
      console.warn('resultado:',resultado)
})

alert("Atendimento agendado")
    }

  ngOnInit(): void {
   
  }

}
