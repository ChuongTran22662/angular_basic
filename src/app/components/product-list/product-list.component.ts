import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/models/model.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  name: string;
  price: number;
  public paramsSubscription: Subscription;

  constructor(
    public productService: ProductService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe(
      (data) => {
        let name = data['name'];
        let price = data['price'];
        this.name = name;
        this.price = price;
        this.products = this.productService.getAllProducts(name, price);
      }
    );
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  onSearch() {
    this.routerService.navigate(['/products'], {
      queryParams: { name: this.name, price: this.price },
    });
  }

}
