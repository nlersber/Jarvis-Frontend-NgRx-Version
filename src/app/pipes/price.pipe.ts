import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';
import { PriceFilter } from '../models/priceFilter';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: Item[], args: PriceFilter): Item[] {
    if (!!!args)
      return null
    if (!!!value)
      return null

    const filter: PriceFilter = args

    return !!!filter ?
      value :
      value.filter(s => filter.apply(s.price))
  }


}
