import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Observable } from 'rxjs';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent implements OnInit {

  priceFilters: Observable<Filter[]>

  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
  }

  changeFilter(filter: Filter){
    this.dataService.changeFilter(filter)
  }

}
