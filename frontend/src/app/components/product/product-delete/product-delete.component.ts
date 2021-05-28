import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private ProductService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ProductService.readByID(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {

    this.ProductService.delete(this.product.id).subscribe(() => {
      this.ProductService.showMessage("Produto excluído")
      this.router.navigate(["/products"])
    })

  }
  cancel() {
    //ao chamar esse método, ele navega pra pagina referida
    this.router.navigate(['/products'])

  }
}
