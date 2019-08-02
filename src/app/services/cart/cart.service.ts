import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { Subject } from 'rxjs';
import { DataService } from '../data/data.service';
import { Order } from '../../models/order';


@Injectable()
export class CartService {

  items: Map<Item, number> = new Map();
  cartTotal: number = 0

  private itemAddedSource = new Subject<any>()


  itemAdded$ = this.itemAddedSource.asObservable()

  constructor(private dataService: DataService) { }

  containsItem(item: Item): boolean {
    let arr = new Array<number>()
    Array.from(this.items.entries()).forEach(s => {
      arr.push(s[0].id)
    })
    return arr.some(s => s === item.id)
  }


  addItemToCart(item: Item, amount: number) {
    this.cartTotal += item.price*amount;
    //Search this product on the cart and increment the quantity

    if (this.containsItem(item)) {
      let old: number = this.items.get(item);
      this.items.set(item, +old + +amount);
    }
    //Add a new product to the cart if it's a new product
    else {
      this.items.set(item, amount);
    }

    this.itemAddedSource.next({ items: this.items, cartTotal: this.cartTotal })
  }

  deleteItemFromCart(item) {
    console.log(item)
    if (this.containsItem(item)) {
      let amount: number = this.items.get(item)
      if (amount === 1)
        this.items.delete(item)
      else
        this.items.set(item, amount - 1)
      this.cartTotal -= item.price;
    }
    this.itemAddedSource.next({ items: this.items, cartTotal: this.cartTotal })
  }


  flushCart() {
    this.items.clear()
    this.cartTotal = 0
    this.itemAddedSource.next({ items: this.items, cartTotal: this.cartTotal })
  }

  placeOrder() {
    this.dataService.placeOrder(new Order(this.items).toJSON()).subscribe();
    this.dataService.triggerReloadItems()
    this.flushCart();
  }

}