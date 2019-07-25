import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../models/item';
import { CartService } from '../../../services/cart/cart.service';
import { DataService } from '../../../services/data/data.service';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'item-thumbnail',
  templateUrl: './item-thumbnail.component.html',
  styleUrls: ['./item-thumbnail.component.scss']
})
export class ItemThumbnailComponent implements OnInit {

  @Input() item: Item;

  available: boolean
  imageSrc: string;

  form: FormGroup

  constructor(private cartService: CartService, private dataService: DataService) {
    this.form = new FormGroup({
      amount: new FormControl('1', Validators.required)
    })
    //this.form.get('amount').setValue(1)
  }

  ngOnInit() {
    this.available = this.item.count > 0
  }


  onAddToCart() {
    if (!this.form.valid)
      return

    const amount = <number>this.form.get("amount").value
    this.cartService.addItemToCart(this.item, amount)
  }

}

