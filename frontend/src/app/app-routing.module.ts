import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { TestesComponent } from './views/testes/testes.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [
  {
    /* Quando estiver em tal path, vai carregar tal componente */
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "testes",
    component: TestesComponent
  },
  {
    // o ":" é um parametro
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    // o ":" é um parametro
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}