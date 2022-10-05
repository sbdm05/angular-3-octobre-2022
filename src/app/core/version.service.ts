import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public version$ = new BehaviorSubject(0);

  constructor() {}

  // créer une méthode increment()
  public increment() {
    console.log('depuis version service')
    this.version$.next(this.version$.value + 1);
  }
}
