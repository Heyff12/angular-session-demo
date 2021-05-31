import { Component } from '@angular/core';
import { AService } from './shared/services/a.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-session-demo';

  constructor(public aService: AService) {

  }
}
