import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {

  atributoQualquer = "Nome do botão!"
  a = 1

  constructor() { }

  ngOnInit(): void {
  }
   
  fazerAlgo(): void {
    console.log(this.a + 1)
  }
}
