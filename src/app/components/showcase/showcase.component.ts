import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceFilter } from 'src/app/models/priceFilter';
import { DataService } from 'src/app/services/data/data.service';
import { Item } from '../../models/item';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  items: Observable<Item[]>
  priceFilter: PriceFilter = new PriceFilter('all', 0)


  constructor(private dataService: DataService, private cartService: CartService) {
    this.items = this.dataService.getRemoteData()
    this.dataService.filter.pipe().subscribe(s => {
      console.log('fitler added');
      console.log(s);
      this.priceFilter = s
    })
  }

  ngOnInit() {
  }

}

