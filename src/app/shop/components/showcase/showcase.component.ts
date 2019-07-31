import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceFilter } from 'src/app/models/priceFilter';
import { DataService } from 'src/app/services/data/data.service';
import { Item } from '../../../models/item';
import { CartService } from '../../../services/cart/cart.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  items: Observable<Item[]>
  priceFilter: PriceFilter
  readonly defaultFilter: PriceFilter = new PriceFilter('all', 0)

  form: FormGroup

  constructor(private dataService: DataService, private cartService: CartService) {
    this.items = this.dataService.getRemoteData()
    this.priceFilter = new PriceFilter('all', 0)
    this.dataService.filter.pipe().subscribe(s => {
      this.priceFilter = !!s
        ? s
        : this.defaultFilter
    })
  }

  ngOnInit() {
  }

  addItemToCart(event) {
    const item: Item = event.item
    const amount: number = event.amount
    this.cartService.addItemToCart(item, amount)
  }

}

