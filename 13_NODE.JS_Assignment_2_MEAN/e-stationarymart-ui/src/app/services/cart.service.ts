import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart = {};
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor(private cookieService: CookieService) {
    this.messageSource.next(this.cartItemsLength);
  }

  private get cart(): any {
    const temp = this.cookieService.get('Cart') || '{}';
    this._cart = JSON.parse(temp);
    return this._cart;
  }

  private set cart(theCart: any) {
    this._cart = theCart;
    this.cookieService.set('Cart', JSON.stringify(this._cart));
  }

  get cartItemsLength(): number {
    return Object.keys(this.cart).length;
  }

  addToCart(ele) {
    const temp = this.cart;

    if (ele.item.id in this.cart) {
      temp[ele.item.id].qty += ele.qty;
    } else {
      temp[ele.item.id] = ele;
    }

    this.cart = temp;
    this.messageSource.next(this.cartItemsLength);
  }

  removeFromCart(id) {
    const temp = this.cart;
    temp[id].qty -= 1;
    if (temp[id].qty <= 0) {
      delete temp[id];
    }
    this.cart = temp;
    this.messageSource.next(this.cartItemsLength);
  }

  clearCart() {
    this.cart = {};
  }
}
