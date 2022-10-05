import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit, OnChanges {
  @Input() title!: string;

  constructor() {
    //console.log(this.title); // undefined
  }

  ngOnInit(): void {
    //console.log(this.title);
  }

  ngOnChanges(arg: SimpleChanges){
    //console.log(arg)
  }

  ngDoCheck(){
    // attention aux performances ! change detection
    //console.log(this.title)
  }


}
