import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  // No TypeScript, o : defini o tipo
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price']
  //Injetar o service
  constructor(private ProductService: ProductService) { }
  /* Método iniciado ao iniciar o programa*/
  ngOnInit(): void {
    //ProductService se refere ao Service criado
    this.ProductService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
