import { Component, OnInit } from '@angular/core';
import { PriceFilter } from 'src/app/models/priceFilter';
import { DataService } from 'src/app/services/data/data.service';
import { Filter } from 'src/app/models/filter';
import { FilterType } from 'src/app/models/FilterType';

@Component({
  selector: 'filter-container',
  template:
    `<filters [priceFilters]="priceFilters" (onFilterChange)="applyFilter($event)"></filters>`,
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent implements OnInit {

  priceFilters: any[] = [
    { id: 0, filter: { type: 'all', value: 0 }, checked: true, name: 'All', filterType: FilterType.PRICE },
    { id: 1, filter: { type: '>=', value: 1.5 }, checked: false, name: 'Price >= 1.5', filterType: FilterType.PRICE },
    { id: 2, filter: { type: '<all>', value: 1.5 }, checked: false, name: 'Price < 1.5', filterType: FilterType.PRICE }
  ]


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  applyFilter(filter: Filter) {
    this.dataService.changeFilter(filter)
  }
}
