import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {

  // créer une propriété booléenne open
  public open: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    // console.log('cliqué');
    // faire alterner cette propriété open
    this.open = !this.open;
    console.log(this.open);

  }
}
