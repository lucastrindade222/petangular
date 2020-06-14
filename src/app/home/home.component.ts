import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [2, 1, 2].map((n) => `https://projetopet2020-051.s3-sa-east-1.amazonaws.com/produto/produto${n}.jpg`);

}
