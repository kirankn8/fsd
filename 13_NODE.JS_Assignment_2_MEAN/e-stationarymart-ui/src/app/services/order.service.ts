import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private cartService: CartService) { }

  placeOrder() {
    const order = {
      totalPrice: this.cartService.calcTotalPrice(),
      cart: [],
    };
    for (const keys of Object.keys(this.cartService.cart)) {
      order.cart.push({ id: this.cartService.cart[keys].item.id, qty: this.cartService.cart[keys].qty });
    }
    return this.http.post(`http://localhost:3000/api/order/`, order);
  }

  orderHistory() {
    return this.http.get('http://localhost:3000/api/orders/');
  }

  orderCart(id) {
    return this.http.get('http://localhost:3000/api/orders/' + id);
  }
}
