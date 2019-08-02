import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  private items: Observable<Item[]>

  constructor(private dataService: DataService) {
    this.items = this.dataService.getRemoteData()
  }

  ngOnInit() {
  }

}
