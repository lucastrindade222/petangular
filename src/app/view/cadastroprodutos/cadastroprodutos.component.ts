import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastroprodutos',
  templateUrl: './cadastroprodutos.component.html',
  styleUrls: ['./cadastroprodutos.component.css']
})
export class CadastroprodutosComponent implements OnInit {

  
  constructor( private http : HttpClient){}

  
 
 
  onSubmit(data){


console.warn(data)

  }
  ngOnInit(): void {
  }


  inputfoto(event){


    if(event.target.file && event.target.files[0]){
      const foto = event.target.files[0];
      let id:Number;
    const formData = new FormData();
    formData.append('foto',foto);
    this.http.post('http://localhost:8080/pessoa',formData).subscribe(resultado=>console.log('Upload ok.'));
  
    }


  
}
}