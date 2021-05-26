import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  /* injeção de dpendencia no angular é feita da seguinte forma: */
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  /* Método que chama o Service e acessa um método do Service*/
  createProduct(): void {
    this.productService.showMessage('Produto criado com sucesso!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
