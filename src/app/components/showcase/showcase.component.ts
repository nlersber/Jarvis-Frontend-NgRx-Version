import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  text: string


  constructor(private dataService: DataService) {
    this.dataService.message.subscribe(s => this.text = s.type)
  }

  ngOnInit() {
  }

}
