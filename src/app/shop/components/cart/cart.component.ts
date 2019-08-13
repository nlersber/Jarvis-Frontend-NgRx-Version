import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { Item } from '../../../models/item';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Output() RefreshEvent = new EventEmitter();

  items: Map<Item, number> = new Map()
  isEmpty: boolean = true
  arrItems: any[]
  numItems: number = 0
  cartTotal: number = 0
  hasError: boolean = false



  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.itemAdded$.subscribe(data => {
      this.items = data.items
      this.isEmpty = this.items.size == 0
      this.arrItems = this.isEmpty ? [] : Array.from(data.items.entries())

      this.cartTotal = data.cartTotal
      this.numItems = this.items.size
      this.isEmpty = this.numItems === 0;
    })

  }

  deleteItem(item: Item) {
    this.cartService.deleteItemFromCart(item)
  }

  placeOrder() {
    if (this.cartService.placeOrder()) {
      this.RefreshEvent.emit("")
      this.hasError = false
    }
    else
      this.hasError = true

  }

  clearCart() {
    this.cartService.flushCart()
  }
}