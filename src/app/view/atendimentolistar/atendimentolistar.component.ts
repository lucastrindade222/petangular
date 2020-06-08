import { ListaService } from './lista.service';
 
import { Component, OnInit } from '@angular/core';
import { Ate } from './listaat';

@Component({
  selector: 'app-atendimentolistar',
  templateUrl: './atendimentolistar.component.html',
  styleUrls: ['./atendimentolistar.component.css']
})
export class AtendimentolistarComponent implements OnInit {

  



  lista : Ate[];
  constructor(private service:ListaService) { }

  ngOnInit(): void {

    this.service.list().subscribe(dados => this.lista = dados);
    

    

    
  }
}
