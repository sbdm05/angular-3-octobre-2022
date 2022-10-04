import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: any;

  // obtenir le tableau
  constructor(private ordersService: OrdersService) {
    // accéder à la propriété collection
    this.ordersService.collection.subscribe((data) => {
      // console.log(data);
      this.collection = data;
      console.log(this.collection);
    });
  }

  ngOnInit(): void {}
}
