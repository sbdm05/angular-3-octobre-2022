import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection$!: Observable<Order[]>;

  // utilisation de l'enum
  public states = Object.values(StateOrder);

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
    // utiliser le pipe async à la place du subscribe
    this.collection$ = this.ordersService.collection;

    // accéder à la propriété collection
    // this.ordersService.collection.subscribe((data) => {
    //   //console.log(data);
    //   this.collection = data;
    //   console.log(this.collection);
    // });
  }

  ngOnInit(): void {}

  // public total(val: number, coef: number, tva?: number) {
  //   console.log('déclenché')
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }

  public changeState(i: Order, event: Event) {
    // console.log(i, event);
    const target = event.target as HTMLSelectElement;
    // console.log(target);
    const state = target.value as StateOrder;
    console.log(state); // confirmed; cancelled; option
    // déclencher dans le service une fonction changeState
    this.ordersService.changeState(i, state).subscribe((data) => {
      console.log(data);
      // i = data;
      Object.assign(i, data);
    });
  }
}
