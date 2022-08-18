import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/Models/ICategory';
import { products } from 'src/app/Models/IProducts';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Category: categories[] = [];
  products: products[] = [];
  selectedCategory: any;
  p: number = 1;

  haveProducts: boolean = false;

  constructor(private ProductService: ProductsService, private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.GETAllCategory();
    this.GETAllProducts();
  }

  GETAllCategory() {
    this.CategoryService.GetAll().subscribe((data) => {
      console.log('data = ', data);
      this.Category = data;
    })
  }

  GetProductbyCategory(ev: any) {
    this.selectedCategory = ev.target.value;
    console.log("event is", this.selectedCategory);

    if (this.selectedCategory == "All-Products") {
      this.GETAllProducts();
    }
    else {
      this.CategoryService.Getproductsinaspecificcategory(this.selectedCategory).subscribe((data) => {
        this.products = data;
        this.haveProducts = true;
        console.log(data);
      })
    }
  }

  GETAllProducts() {
    this.ProductService.GetAll().subscribe((data) => {
      this.products = data;
      this.haveProducts = true;
    })
  }
}
