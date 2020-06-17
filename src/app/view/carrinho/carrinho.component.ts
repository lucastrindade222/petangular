import { ServicoService } from './servico.service';
import { Component, OnInit } from '@angular/core';
import { Car } from './carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private service:ServicoService) { }

lista : Car[]
l : Car

  ngOnInit(): void {


    this.service.list().subscribe(data =>{console.log(data) 
    
    this.lista = data['content']
    
    
    },
      
      (error)=>{
       console.log(error.error.message)
      }
      
      );
  }
  
  onsubmit($event,lista,i){
    

  this.l = lista
    var dados_pdf ="O valor da compra é R$:"+this.l.total_venda+"<br> produto:"+this.l.produtos.descri_P+"<br>quantidade:"+this.l.quantidade+"<br>Nome:"+this.l.pessoa.nome+"<br>CPF:"+this.l.pessoa.cpf
   
    var pdf = window.open('pode deixar em branco aqui é a url','aqui tbm', 'width=900,heigth=700');
     pdf.document.write('<html><head>');
     pdf.document.write('<title>PDF</title></head>');
     pdf.document.write('<body>');
     pdf.document.write(dados_pdf);
     pdf.document.write('</body></html>');
     pdf.document.close();
     pdf.print();
  }



  }
















 













