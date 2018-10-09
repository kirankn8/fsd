import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartItems = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentMessage.subscribe(cartItems => this.cartItems = cartItems);
  }

}
