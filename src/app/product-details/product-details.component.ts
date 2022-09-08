import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { Product, products } from '../product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product|undefined;

  constructor(private route:ActivatedRoute,private cartservice:CartServiceService) {}
  


  ngOnInit(): void {
    const routeParams =this.route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParams.get('productId'));
    this.product=products.find(x=>x.id==productIdFromRoute);

  }

  buyProduct(product:Product)
  {
    this.cartservice.addToCart(product);
    window.alert('Product added to the cart');
  }
}
