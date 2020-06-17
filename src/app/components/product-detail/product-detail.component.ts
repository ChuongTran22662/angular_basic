import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/model.class';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product = null;
  public subscription: Subscription;

  constructor(
    public activateRoute: ActivatedRoute,
    public productService: ProductService,
    public routerService: Router
  ) {}

  ngOnInit() {
    // let id = +this.activateRoute.snapshot.params['id'];
    // console.log(id)
    // this.product = this.productService.getProductById(id);
    // console.log(this.product)
    this.handleParams();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleParams() {
    this.subscription = this.activateRoute.params.subscribe((data) => {
      let id = data.id;
      this.product = this.productService.getProductById(id);
    });
  }

  onBackToList() {
    // this.routerService.navigate(['products/list']);
    this.routerService.navigate(['products']);
  }

  onEdit() {
    this.routerService.navigate([`edit`], {
      relativeTo: this.activateRoute.parent,
    });
  }
}
