import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Item } from '../../models/item'
import { CartService } from '../../services/cart/cart.service';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/models/filter';
import { Store } from '@ngrx/store';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  items: Observable<Item[]>
  filter: Filter

  constructor(private dataService: DataService, private cartService: CartService) {
    this.items = this.dataService.getRemoteData()
    this.dataService.filter.subscribe(s => console.log(s))
  }

  ngOnInit() {
  }

}

