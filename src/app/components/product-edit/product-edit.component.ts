import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/model.class';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit, OnDestroy {
  public product: Product = null;
  public subscription: Subscription = null;

  constructor(
    public activatedRouteService: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit() {
    this.handleParams();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleParams() {
    this.subscription = this.activatedRouteService.parent.params.subscribe(
      (params: Params) => {
        let id = params['id'];
        this.product = this.productService.getProductById(id);
      }
    );
  }
}
