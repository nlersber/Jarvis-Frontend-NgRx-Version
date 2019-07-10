import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Filter } from 'src/app/models/filter';


@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() priceFilters: any[];

  @Output() filterChange: EventEmitter<Filter> = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
  }

  changeFilter(filter: Filter) {
    this.filterChange.emit(filter)
  }


}
