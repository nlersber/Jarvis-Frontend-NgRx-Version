import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PriceFilter } from 'src/app/models/priceFilter';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input()
  priceFilters: any[]

  @Output()
  onFilterChange: EventEmitter<PriceFilter> = new EventEmitter()

  filterActive = false;

  form: FormGroup

  constructor() {
    this.form=new FormGroup({
      
    })
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

  changeFilter(id: number) {
    const filter = this.priceFilters[id].filter
    this.changeVisual(id)
    this.onFilterChange.emit(filter)
  }

  removeFilter() {
    this.changeFilter(0)
  }

}
