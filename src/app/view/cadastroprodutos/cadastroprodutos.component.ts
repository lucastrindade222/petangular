import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastroprodutos',
  templateUrl: './cadastroprodutos.component.html',
  styleUrls: ['./cadastroprodutos.component.css']
})

export class CadastroprodutosComponent implements OnInit {

  selectedFile: File;
  numero :File;
  constructor( private http : HttpClient){}



  ngOnInit(): void {

  }

 
  onSubmit(){

   

      let descri_P:String=(<HTMLInputElement>document.getElementById("descricao")).value;
      let valorS=(<HTMLInputElement>document.getElementById('valor')).value; 
  
      let valor = Number.parseInt(valorS)
  
      let data ={descri_P,valor}
  
      console.warn(data);
      console.log(  this.selectedFile )
      this.http.post('http://localhost:8080/produto',data).subscribe((resultado)=>{
        
      })
     
      this.update();
    
     
  }

update(){
 
  

  const formdata = new FormData();
  formdata.append("file",this.selectedFile );
   
 

  
console.log("oi teste da foto" +this.selectedFile.name)

  this.http.post(`http://localhost:8080/produto/foto/16`,formdata,{observe: 'response'}).subscribe((response) => {
      if (response.status === 200) {
      console.log("ok")
      } else {
       console.log("Erro")
      }
    }
    );
}




  onChange(event){

 
 ;

    const select = <File>event.srcElement.files;

  document.getElementById("fil").innerHTML = select[0].name;

  this.selectedFile = event.target.files[0];

   console.log( this.selectedFile  )


  }
  
  
}
