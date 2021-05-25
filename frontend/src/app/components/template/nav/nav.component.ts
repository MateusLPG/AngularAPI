import { Component, OnInit } from '@angular/core';

/*Transforma a classe em um componente - se chama decorator essa notação @Component poderia ser um decorator transformado
em Directive, por exemplo, bastaria trocar o @Component para @Directive*/
/*Diretiva -> atributo personalizado, o chamamos usando o selector*/
@Component({
  /*esse selector é o nome do componente que é usado para ser referenciado por outros componentes */
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
