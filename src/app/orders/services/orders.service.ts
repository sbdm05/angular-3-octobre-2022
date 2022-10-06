import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private urlApi = environment.urlApi;

  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    // this.http.get('urlAPI');

    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((tab) => {
        // tab.map; tab.filter
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
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

  // méthode changeState()
  public changeState(i: Order, state: StateOrder): Observable<Order> {
    // nouvel objet
    const obj = new Order(i);
    obj.state = state;

    // déclencher update(obj)
    return this.update(obj);
  }

  // méthode update()
  public update(obj: Order): Observable<Order> {
    // appel vers la bdd
    // localhost/3000/orders/id, obj
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj);
  }
}
