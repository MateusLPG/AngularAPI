import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    //Faz que ao abrir o formulário de atualização já venha com as informações atuais do produto
    //Puxa pelo id
    //esse paramMap.get("id") é o parâmetro que é no path do app routing ts
    const id = +this.route.snapshot.paramMap.get("id");
    //o readByID faz um get do produto com o id
    this.productService.readByID(id).subscribe((product) => {
      this.product = product;
    });
    
  
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado')
      this.router.navigate(['/products']);
    });
  }  

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
