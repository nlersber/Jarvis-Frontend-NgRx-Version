import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';
import { PriceFilter } from '../models/priceFilter';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: Item[], args: PriceFilter): Item[] {
    if (!args)
      return null

    const filter: PriceFilter = args

    console.log(filter)
    console.log('in de pipe')
    console.log(value.filter(s => filter.apply(s.price)))
    return !filter ?//If no filter provided, returns all items
      value :
      value.filter(s => filter.apply(s.price))
  }


}
