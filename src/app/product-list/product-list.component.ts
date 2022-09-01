import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products=products
  notify()
  {
    window.alert("Alerted")
  }
  constructor() { }
  share():void
  {
    window.alert('The Product has been Shared')
  }
  ngOnInit(): void {
  }

}
