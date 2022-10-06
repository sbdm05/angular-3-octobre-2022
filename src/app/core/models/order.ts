import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string; // ici typePresta n'est pas initialisé
  client!: string;
  comment!: string;
  id!: number;
  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTTC(): number {
    return this.tjmHt * this.nbJours * (1 + this.tva / 100);
  }
  constructor(obj?: Partial<Order>) {
    if (obj) {
      // méthode Object.assign(cible, source)
      Object.assign(this, obj);
    }
  }
}

// new Order({tjmHt:})
