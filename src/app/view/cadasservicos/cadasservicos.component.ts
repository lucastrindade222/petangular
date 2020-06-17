import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadasservicos',
  templateUrl: './cadasservicos.component.html',
  styleUrls: ['./cadasservicos.component.css']
})
export class CadasservicosComponent implements OnInit {

  selectedFile: File;
  numero :File;
  constructor( private http : HttpClient){}



  ngOnInit(): void {

  }

 
  onSubmit(){

   

      let descri_S:String=(<HTMLInputElement>document.getElementById("descricao")).value;
      let valorS=(<HTMLInputElement>document.getElementById('valor')).value; 
  
      let valor = Number.parseInt(valorS)
  
      let data ={descri_S,valor}
  
      console.warn(data);
      console.log(  this.selectedFile )
      this.http.post('http://localhost:8080/services',data).subscribe((resultado)=>{
        
      })
     
      this.update();
    
     
  }

update(){
 
  

  const formdata = new FormData();
  formdata.append("file",this.selectedFile );
   
 

  
console.log("oi teste da foto" +this.selectedFile.name)

  this.http.post(`http://localhost:8080/services/foto/16`,formdata,{observe: 'response'}).subscribe((response) => {
      if (response.status === 200) {
      console.log("ok")
      } else {
       console.log("Erro")
      }
    }
    );
    alert("serviço salvo.")
}




  onChange(event){

 
 ;

    const select = <File>event.srcElement.files;

  document.getElementById("fil").innerHTML = select[0].name;

  this.selectedFile = event.target.files[0];

   console.log( this.selectedFile  )


  }

}
