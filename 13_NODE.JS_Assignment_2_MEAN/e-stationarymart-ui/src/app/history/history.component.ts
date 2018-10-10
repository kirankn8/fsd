import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  orderHistory: any;

  orderCart = {};

  constructor(private orderService: OrderService) { }

  ngOnInit() { this.getHistory(); }

  getHistory() {
    this.orderService.orderHistory().subscribe(history => {
      this.orderHistory = history;
      // for (const order of this.orderHistory) {
      //   this.getOrderCart(order.id);
      // }
    });
  }

  getOrderCart(id) {
    this.orderService.orderCart(id).subscribe(data => {
      this.orderCart[id] = data;
    });
  }
}
