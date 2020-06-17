import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/model.class';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: Product[] = [
    {
      id: 1,
      name: 'IPhone 7',
      price: 17000,
      status: true,
    },
    {
      id: 2,
      name: 'IPhone 8',
      price: 16000,
      status: true,
    },
    {
      id: 3,
      name: 'IPhone 6',
      price: 18000,
      status: false,
    },
  ];

  constructor() {}

  getAllProducts(name?: string, price?: number) {
    let result: Product[] = this.products;
    if (name) {
      result = this.products.filter((x) => {
        return (
          x.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1
        );
      });
    }
    if (price) {
      result = this.products.filter((x) => {
        return x.price === price;
      });
    }
    return result;
  }

  getProductById(id: number) {
    return this.products[id - 1];
    // for (var i = 0; i < this.products.length; i++) {
    //   console.log(this.products[i])
    //   if (this.products[i].id === id) {
    //     result = this.products[i];
    //     break;
    //   }
    // }
  }
}
