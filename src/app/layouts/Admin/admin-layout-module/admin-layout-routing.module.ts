import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { AddNewProductComponent } from 'src/app/Pages/products/add-new-product/add-new-product.component';
import { ProductDetailsComponent } from 'src/app/Pages/products/product-details/product-details.component';
import { ProductsComponent } from 'src/app/Pages/products/products.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'products/product-details/:id', component: ProductDetailsComponent
  },
  {
    path: 'add-new-product', component: AddNewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
