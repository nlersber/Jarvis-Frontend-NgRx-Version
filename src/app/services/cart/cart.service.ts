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
    // const arr=Array.from(this.items.entries())
    // console.log(arr)
    // arr.forEach(s => {
    //   console.log(s)
    //   if (s[0].id === item.id)
    //     return true
    // })
    // return false
    let arr = new Array<number>()
    Array.from(this.items.entries()).forEach(s => {
      console.log("mapping items, checking")
      arr.push(s[0].id)
    })
    return arr.some(s => s === item.id)
  }


  addItemToCart(item) {
    this.cartTotal += item.price;
    //Search this product on the cart and increment the quantity

    if (this.containsItem(item)) {
      let old: number = this.items.get(item);
      this.items.set(item, old + 1);
    }
    //Add a new product to the cart if it's a new product
    else {
      this.items.set(item, 1);
    }

    this.itemAddedSource.next({ items: this.items, cartTotal: this.cartTotal })
  }

  deleteItemFromCart(item) {
    if (this.containsItem(item)) {
      console.log("contains item")
      let amount: number = this.items.get(item)
      if (amount === 1) {
        console.log("only 1, delete")
        this.items.delete(item)
      }
      else {
        console.log("decrement")
        this.items.set(item, amount - 1)
      }
      this.cartTotal -= item.price;

    }

    else
      console.log("doesnt contain item")

    this.itemAddedSource.next({ items: this.items, cartTotal: this.cartTotal })
  }


  flushCart() {
    this.items.clear()
    this.cartTotal = 0
    this.itemAddedSource.next({ items: this.items, cartTotal: this.cartTotal })
  }

  placeOrder() {
    // let temp = {};
    // let arr = Array.from(this.items.entries())
    // for (let i = 0; i < arr.length; i++) {
    //   let item = arr
    //   temp[i] = {};
    //   temp[i][0] = arr[i][0].id.toString();
    //   temp[i][1] = arr[i][1];
    // }
    this.dataService.placeOrder(new Order(this.items).toJSON()).subscribe();
    this.flushCart();
  }

}