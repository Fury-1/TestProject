import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product=products.find(x=>x.id==1);
  constructor() { }
  


  ngOnInit(): void {
  }

}
