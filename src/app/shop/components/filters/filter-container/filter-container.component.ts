import { Component, OnInit } from '@angular/core';
import { PriceFilter } from 'src/app/models/priceFilter';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'filter-container',
  template:
    `<filters [priceFilters]="priceFilters" (onFilterChange)="applyFilter($event)"></filters>`,
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent implements OnInit {

  readonly priceFilters: any[] = [
    { id: 0, filter: new PriceFilter('all', 0), checked: true, name: 'All' },
    { id: 1, filter: new PriceFilter('>=', 1.5), checked: false, name: 'Price >= 1.5' },
    { id: 2, filter: new PriceFilter('<', 1.5), checked: false, name: 'Price < 1.5' }
  ]

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  applyFilter(filter: PriceFilter) {
    this.dataService.changeFilter(filter)
  }
}
