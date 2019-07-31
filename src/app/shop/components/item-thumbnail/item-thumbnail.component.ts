import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Item } from '../../../models/item';

@Component({
  selector: 'item-thumbnail',
  templateUrl: './item-thumbnail.component.html',
  styleUrls: ['./item-thumbnail.component.scss']
})
export class ItemThumbnailComponent implements OnInit {

  @Input() item: Item
  @Output() onAdd: EventEmitter<{ item: Item, amount: number }> = new EventEmitter()

  available: boolean
  imageSrc: string

  form: FormGroup

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      amount: builder.control('1', Validators.required)
    })
  }

  ngOnInit() {
    this.available = this.item.count > 0
  }


  onAddToCart() {
    if (!this.form.valid)
      return
    const amount = <number>this.form.get("amount").value
    this.onAdd.emit({ item: this.item, amount })
    this.form.get('amount').setValue('1')
    this.form.get('amount').updateValueAndValidity()
  }

}

