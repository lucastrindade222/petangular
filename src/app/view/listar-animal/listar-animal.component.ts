import { Ani } from './listaanimal';
import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-listar-animal',
  templateUrl: './listar-animal.component.html',
  styleUrls: ['./listar-animal.component.css']
})
export class ListarAnimalComponent implements OnInit {

 


 lista : Ani[];
  constructor(private service:ListaService) { }

  ngOnInit(): void {

    this.service.list().subscribe(dados => this.lista = dados);

  }

}
