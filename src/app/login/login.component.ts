import { AutenticarservisoService } from './../autenticarserviso.service';
 

import { Component, OnInit } from '@angular/core';
import{FormGroup, Validators,FormControl}from'@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private autenticarserviso:AutenticarservisoService) { }




  ngOnInit(): void {
  
    
    this.initform();
  }
initform(){
  this.formGroup = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    senha : new FormControl('',[Validators.required,Validators.nullValidator])
    
 
  
    
  
  })
}
loginproces(){



console.log("test")
  if(this.formGroup.value){
this.autenticarserviso.lagin(this.formGroup.value).subscribe(result =>{

 if(result.success){
  console.log(result);
  alert(result.message);
 }else{
  alert(result.message);
 }

})
  }



}


}
