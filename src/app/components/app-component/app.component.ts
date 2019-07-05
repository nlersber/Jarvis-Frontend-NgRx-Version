import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JarvisNgRx';

  priceFilters: any[] = [
    { id: 0, name: 'All', value: 'all', checked: true, amount: 0 },
    { id: 1, name: 'Price >= €1.5', value: '>=', checked: false, amount: 3 },
    { id: 2, name: 'Price < €1.5', value: '<', checked: false, amount: 3 }
  ]
  
}
