import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    // this.http.get('urlAPI');
    this.collection = this.http.get<Order[]>('http://localhost:4009/orders')
  }

  // créer des prorpiétés et méthodes

  // appel http
  get collection() {
    return this.collection$;
  }
  // this.ordersService.collection.subscribe()

  // setter
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }
}
