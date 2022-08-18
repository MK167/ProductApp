import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/Models/ICategory';
import { products } from 'src/app/Models/IProducts';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Category: categories [] = [];
  products: products [] =[];
  selectedCategory: any;
  p: number = 1;

  haveProducts: boolean = false;

  constructor(private ProductService: ProductsService, private CategoryService : CategoryService) { }

  ngOnInit(): void {
  this.GETAllCategory();
  }

  GETAllCategory() {
    this.CategoryService.GetAll().subscribe((data)=>{
      console.log('data = ', data);
      this.Category = data;
    })
  }

  GetProductbyCategory(ev: any){
    this.selectedCategory = ev.target.value;
    console.log("event is",this.selectedCategory);

    this.CategoryService.Getproductsinaspecificcategory(this.selectedCategory).subscribe((data)=>{
      this.products = data;
      this.haveProducts = true;
      console.log(data);
    })
  }
}
