import { Component, OnInit } from '@angular/core';
/*Importar Router para usar como tipo no construtor */
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  /* A rota é injetada pelo Angular pois ele é responsável por instanciar a classe */
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /* Método que ao clicar no botão direciona para essa página*/
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
