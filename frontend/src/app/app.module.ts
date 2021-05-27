import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';

/*imports pra fazer a navbar*/
import { MatSidenavModule } from '@angular/material/sidenav';
/*Import que faz uns cards */
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { AppRoutingModule } from './app-routing.module';
import { RedDirective } from './directives/red.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { TestesComponent } from './views/testes/testes.component'
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
/* imports pra fazer formulário */
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    TestesComponent,
    ProductReadComponent,
    ProductRead2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
