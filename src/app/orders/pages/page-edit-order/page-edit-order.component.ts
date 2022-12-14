import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  // utiliser activatedRoute

  public item$!: Observable<Order>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router : Router
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(typeof id);
    // faire un appel à une méthode dans le service
    // getItemById(id)
    // this.ordersService.getItemById(id).subscribe((data) => {
    //   console.log(data);
    //   this.item = data
    // });
    // à la place utiliser le pipe async
    this.item$ = this.ordersService.getItemById(id);
  }

  ngOnInit(): void {}

  // onEdit()
  // méthode update dans le service
  // redirection vers /orders
  public onEdit(obj: Order) {
    this.ordersService.update(obj).subscribe(() => {
      // redirection besoin de Router
      this.router.navigate(['orders'])
    });
  }
}
