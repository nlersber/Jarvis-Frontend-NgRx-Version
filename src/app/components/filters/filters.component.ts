import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filters: string[] = ["<=", "filter2", "filter3", "all"]

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
  }

  change(message: string) {
    console.log(message)
    this.dataService.changeFilter(message, 0)
  }

}
