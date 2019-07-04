import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item';
import { CartService } from '../../services/cart/cart.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'item-thumbnail',
  templateUrl: './item-thumbnail.component.html',
  styleUrls: ['./item-thumbnail.component.scss']
})
export class ItemThumbnailComponent implements OnInit {
  @Input() item: Item;

  available: boolean
  imageSrc: string;

  constructor(private cartService: CartService, private dataService: DataService) {

  }

  ngOnInit() {
    this.available = this.item.count > 0
  }


  onAddToCart() {
    this.cartService.addItemToCart(this.item)
  }

}

