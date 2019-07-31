import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/models/item';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Item[], arg: string): Item[] {
    return (!!arg ? value.filter(s => s.name.toLowerCase().includes(arg.toLowerCase())) : value)
  }

}
