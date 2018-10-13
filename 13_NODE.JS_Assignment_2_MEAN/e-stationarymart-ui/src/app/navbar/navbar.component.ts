import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username = '';
  cartItems = 0;
  collapsed = true;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.cartService.currentMessage.subscribe(cartItems => this.cartItems = cartItems);
    this.getUsername();
  }

  toggleCollapsed(): void {
    console.log(this.collapsed);
    this.collapsed = !this.collapsed;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  getUsername() {
    this.username = this.authService.getUsernameCookie();
  }

}
