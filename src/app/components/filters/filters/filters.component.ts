import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input()
  priceFilters: Object[]

  @Output()
  onFilterChange = new EventEmitter<Filter>()

  filterActive = false;

  constructor() { }

  ngOnInit() {
  }

  changeFilter(id: number) {
    const filter = this.priceFilters[id]
    if (!filter)
      return;
    this.filterActive = (id !== 0);

    /*for (let i = 0; i < this.priceFilters.length; i++) {
      const temp=this.priceFilters[i]
      if(temp)
    }*/
  }

  applyFilter() {

  }

}
