import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadasservicos',
  templateUrl: './cadasservicos.component.html',
  styleUrls: ['./cadasservicos.component.css']
})
export class CadasservicosComponent implements OnInit {



  constructor( private http : HttpClient){}

  
 
   onSubmit(data){
 
 
 console.warn(data)
 
   }



   inputfoto(event){


if(event.target.file && event.target.files[0]){
  const foto = event.target.files[0];
let id:Number;
const formData = new FormData();
formData.append('foto',foto);
this.http.post( `http://localhost:8080/services/foto/${id}` ,formData).subscribe(resultado=>console.log('Upload ok.'));

}





   }



  ngOnInit(): void {
  }

}
