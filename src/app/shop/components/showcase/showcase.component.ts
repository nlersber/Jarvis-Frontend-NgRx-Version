import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PriceFilter } from 'src/app/models/priceFilter';
import { DataService } from 'src/app/services/data/data.service';
import { Item } from '../../../models/item';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  items: Observable<Item[]>
  priceFilter: PriceFilter
  readonly defaultFilter: PriceFilter = new PriceFilter('all', 0)
  searchTerm: Subject<string> = new Subject()

  form: FormGroup

  constructor(private dataService: DataService, private cartService: CartService, fb: FormBuilder) {
    this.dataService.refresh.subscribe(s => this.items = this.dataService.getRemoteData())//Triggers a refresh each time the subject updates
    this.items = this.dataService.getRemoteData()
    this.priceFilter = new PriceFilter('all', 0)
    this.dataService.filter.pipe().subscribe(s => {
      this.priceFilter = !!s
        ? s
        : this.defaultFilter
    })

    this.form = fb.group({
      search: fb.control('')
    })
  }

  ngOnInit() {
  }

  addItemToCart(event) {
    const item: Item = event.item
    const amount: number = event.amount
    this.cartService.addItemToCart(item, amount)
  }

  searchName() {
    this.searchTerm.next(this.form.get('search').value)
  }

}

