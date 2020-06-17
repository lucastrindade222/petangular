import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pro } from './produto';
import { ServicoService } from './servico.service';
 

@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.component.html',
  styleUrls: ['./listarprodutos.component.css']
})
export class ListarprodutosComponent implements OnInit {
 
    lista : Pro[];
    l : Pro;
     
     
   
  constructor(private http : HttpClient ,private service:ServicoService) { }

  ngOnInit(): void {

    this.service.list().subscribe(dados =>{
      this.lista = dados;
    
     
     
    });

  }

  onsubmit($event,li,d ){
    
     this.l = li
   let  c= parseInt(this.l.valor.toString())

   
  

    let tex = prompt("Deseja compra o produto "+ this.l.descri_P+" ,se sim informe a quantidade que você deseja comprar")

   let quantidadeProduto=parseInt(tex);
    

      if(true != isNaN(quantidadeProduto)){
       
      let  quantidade:Number=quantidadeProduto;
      let total_venda= c *quantidadeProduto   ;
      let id_produto:Number = this.l.id_produto
      let id_pessoa:Number= 1
        
     
       
       let data ={
 
        quantidade,total_venda,

        produtos:{
          id_produto
        },   
     pessoa: {
      id_pessoa
      
    }
      
    }
        
    
 console.warn(data)
 this.http.post('http://localhost:8080/vendas',data).subscribe((resultado)=>{
  console.warn('resultado',resultado)
})

alert("O produto foi enviado para o carrinho ")

  
       }
    
   
    
    
    
      
      }


      
}


 
