import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZenduForms';
  mapclicked = true;
  listclicked = false;
  mapClicked() {
    this.mapclicked = true;
    this.listclicked = false;
  }
  ListClicked() {
    this.mapclicked = false;
    this.listclicked = true;
  }
}
