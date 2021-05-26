import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }
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
}
