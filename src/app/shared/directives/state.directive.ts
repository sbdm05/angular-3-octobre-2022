import { Directive, HostBinding, Input } from '@angular/core';

// décorateur
@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() etat!: string;
  // cibler la class de l'élément parent
  @HostBinding('class') tdClassName!: string;

  constructor() {
    // console.log(this.test); // undefined
  }

  // déclenché une seule fois
  ngOnInit() {
    //console.log(this.test); // ????
  }

  ngOnChanges() {
    console.log(this.etat); // ????
    // state-${this.etat.toLowerCase()}
    this.tdClassName = `state-${this.etat.toLowerCase()}`;
  }
}
