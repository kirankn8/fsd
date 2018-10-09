import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProductService } from './product.service';

@Injectable()
export class ProductDetailResolver implements Resolve<any> {
    constructor(private productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot) {
        console.log(route.paramMap.get('id'));
        return this.productService.getProductById(route.paramMap.get('id'));
    }
}
