import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

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

  product: Product = {
    name: '',
    price: 0
  }

  /* Método que chama o Service e acessa um método do Service*/
  /* Ao clicar no botão é acionado esse método */
  createProduct(): void {
    /* Esse método chama outro método, que está no service */
    /* O subscribe serve pra avisar quando é usado */
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
