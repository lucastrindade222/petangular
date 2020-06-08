import { Component, OnInit } from '@angular/core';
import { ServicosService } from './servicos.service';
import { Ser } from './listser';

@Component({
  selector: 'app-listarservico',
  templateUrl: './listarservico.component.html',
  styleUrls: ['./listarservico.component.css']
})
export class ListarservicoComponent implements OnInit {
    lista : Ser[];
  constructor(private service:ServicosService) { }

  ngOnInit(): void {

    this.service.list().subscribe(dados => this.lista = dados);

  }

}
