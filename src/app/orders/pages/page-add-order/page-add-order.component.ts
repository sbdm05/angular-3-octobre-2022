import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  public item: Order = new Order();
  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {}

  onAdd(obj: Order) {
    console.log(obj);
    // appeler le service .post
    this.ordersService.add(obj).subscribe(() => {
      // rediriger
      this.router.navigate(['orders']);
    });
  }
}
