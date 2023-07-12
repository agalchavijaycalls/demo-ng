import { Component } from '@angular/core';
import { CounterService } from './page/calculator/component/generic-calculation/service/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(public counterService: CounterService) {
  }
}
