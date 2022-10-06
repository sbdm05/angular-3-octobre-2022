import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  public form!: FormGroup;

  public states = Object.values(StateOrder);

  @Input() init!: Order;
  @Output() submitted = new EventEmitter<Order>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.init); ///
    // initialiser le formulaire
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    // déclencher submitted
    this.submitted.emit(this.form.value);
  }
}
