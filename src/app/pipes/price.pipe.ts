import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item';
import { Filter } from '../models/filter';
import { FilterType } from '../models/FilterType';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: Item[], ...args: any[]): Item[] {
    if (!args[0] || args[1])
      return//No values or too many values
    const filter: Filter = args[0]
    switch (filter.filterType) {
      case FilterType.PRICE:
        return value.filter(s => eval(`${s.price} ${filter.type} ${filter.value}`))// e.g. '3 >= 1.5'
      default:
        return value
    }
  }

}
