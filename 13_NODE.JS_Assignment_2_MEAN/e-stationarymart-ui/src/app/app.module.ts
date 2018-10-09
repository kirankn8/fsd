import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailResolver } from './services/product-detail.resolver';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';
import { CartService } from './services/cart.service';
import { CookieService } from 'ngx-cookie-service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent, resolve: { item: ProductDetailResolver } },
  { path: 'cart', component: CartComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    // Services
    CookieService,
    ProductService,
    CartService,

    // Resolvers
    ProductDetailResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
