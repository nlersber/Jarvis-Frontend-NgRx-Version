import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';

@Component({
  selector: 'management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  
  constructor(private service: ManagementService) { }

  ngOnInit() {
  }

}
