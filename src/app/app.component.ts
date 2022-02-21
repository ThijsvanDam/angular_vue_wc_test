import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';

  base = 'http://localhost:8080/examples/'
  path = 'Composition/eoverdracht-overdrachtberichtvolwassenen-phase-one-01'
}
