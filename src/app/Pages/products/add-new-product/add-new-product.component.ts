import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categories } from 'src/app/Models/ICategory';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  AddForm: FormGroup;
  ICategory: categories[] =[];

  constructor(fb: FormBuilder, private ProductService: ProductsService, private Category: CategoryService) {

    this.AddForm = fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: [''],
    })
   }
   get f()
     {
       return this.AddForm.controls;
     }
  ngOnInit(): void {
    this.loadAllCategory();
  }

  loadAllCategory(){
    this.Category.GetAll().subscribe((data)=>{
      this.ICategory = data;
    })
  }

  AddProduct() {

    let jsonData = {
      title: this.AddForm.get('title')?.value,
      price: this.AddForm.get('price')?.value,
      description: this.AddForm.get('description')?.value,
      category: this.AddForm.get('category')?.value,
      image: 'https://i.pravatar.cc',
    }

    this.ProductService.AddProduct(jsonData).subscribe((data)=>{
      console.log('Success Added', data);
      alert('Product Added Successfully');
      window.location.reload();
    })
  }
}
