import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { User } from '../../models/user.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  items: Observable<Item[]>
  users: Observable<User[]>

  constructor(private manService: ManagementService, private dataService: DataService) {
    this.items = this.dataService.getRemoteData()
    this.users = this.manService.getUserList()
  }

  ngOnInit() {
  }

}
