import { Component, OnInit, NgZone, ViewChild } from '@angular/core';

 
@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  http: any;

  constructor( ) {}

  onSubmit(data){

   
    
    console.warn(data)
    
      }
    
    


  ngOnInit(): void {
  }
  
}
