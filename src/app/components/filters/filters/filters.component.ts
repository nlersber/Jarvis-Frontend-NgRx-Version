import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { createFilter } from '../../../factories/filterFactory'
import { FilterType } from 'src/app/models/FilterType';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input()
  priceFilters: any[]

  @Output()
  onFilterChange: EventEmitter<Filter>= new EventEmitter()

  filterActive = false;

  constructor() {
    
  }

  ngOnInit() {
  }

  changeVisual(id: number) {
    const filter = this.priceFilters[id]
    if (!filter)
      return;
    this.filterActive = (id !== 0);

    this.priceFilters.forEach(element => {
      element.checked = (element.id === id)
    });

  }

  changeFilter(type: FilterType, id: number) {
    const temp = this.priceFilters[id]
    const filter = createFilter(type, temp.filter.type, temp.filter.value)
    this.changeVisual(id)
    this.onFilterChange.emit(filter)
  }

}
