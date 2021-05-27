import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  /* aparece pop up na tela, no canto direito */
  /*Recebe como parametro a mensagem a ser exibida*/
  showMessage(msg: string): void {
    /*dentro da aspas simples dá pra colocar qualquer coisa, interssante botar X*/
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  /*Cria no backend um produto*/
  /*Retorna um Observable do tipo produto ao fazer o Post*/
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  /* metodo responsavel por ler os produtos do backend */
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
