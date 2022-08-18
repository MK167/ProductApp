import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/Models/IProducts';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  targetId: any;
  products: any;
  constructor(private param: ActivatedRoute, private productService: ProductsService) {
    this.targetId = this.param.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.GETProductbyID();
  }

  GETProductbyID(){
    this.productService.Getasingleproduct(this.targetId).subscribe((data)=>{
     console.log(data);
     this.products = data;
    })
  }

}
