import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { FooterComponent } from 'src/app/Core/footer/footer.component';
import { NavbarComponent } from 'src/app/Core/navbar/navbar.component';
import { AddNewProductComponent } from 'src/app/Pages/products/add-new-product/add-new-product.component';
import { ProductDetailsComponent } from 'src/app/Pages/products/product-details/product-details.component';
import { ProductsComponent } from 'src/app/Pages/products/products.component';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddNewProductComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AdminLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class AdminLayoutModule { }
