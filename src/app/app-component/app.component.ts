import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/services/data/data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JarvisNgRx';
}
