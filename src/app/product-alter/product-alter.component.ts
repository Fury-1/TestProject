import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-alter',
  templateUrl: './product-alter.component.html',
  styleUrls: ['./product-alter.component.css']
})
export class ProductAlterComponent implements OnInit {
 @Input() iproduct:Product |undefined
 @Output() notify = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
