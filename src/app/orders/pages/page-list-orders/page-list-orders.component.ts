import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];

  public titleParent = 'Liste des commandes';

  public headers = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  // obtenir le tableau
  constructor(private ordersService: OrdersService) {
    // accéder à la propriété collection
    this.ordersService.collection.subscribe((data) => {
      //console.log(data);
      this.collection = data;
      console.log(this.collection);
    });
  }

  ngOnInit(): void {}

  public total(val: number, coef: number, tva?: number) {
    console.log('déclenché')
    if (tva) return val * coef * (1 + tva / 100);
    return val * coef;
  }
}
