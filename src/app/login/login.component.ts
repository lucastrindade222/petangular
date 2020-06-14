import { AutenticarservisoService } from './../autenticarserviso.service';
 

import { Component, OnInit } from '@angular/core';
import{FormGroup, Validators,FormControl}from'@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private autenticarserviso:AutenticarservisoService) { }




  ngOnInit(): void {
  
    
     
  }
 


public getAcassoToken(){


  let email:String=(<HTMLInputElement>document.getElementById("email")).value;
  let senha:String=(<HTMLInputElement>document.getElementById("senha")).value;

  let data ={email,senha}
  
console.log(data)


let ref= this.autenticarserviso.geradorToken(data);
ref.subscribe(result=>console.log("Token:"+result));




}


















loginproces(){

  let email:String=(<HTMLInputElement>document.getElementById("email")).value;
  let senha:String=(<HTMLInputElement>document.getElementById("senha")).value;

  let data ={email,senha}
 

console.log("test")
  if( data){

    
 


  let data ={email,senha}
  this.autenticarserviso.lagin(data).subscribe(response =>{
console.log(response.header.get('Authorization'))
 if(response.success){
  console.log(response.header.get('Authorization'));
  alert(response.message);
 }else{
  
  alert(response.message);
 }

})
  }



}


}
