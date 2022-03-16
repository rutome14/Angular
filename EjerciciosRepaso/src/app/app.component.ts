import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onSeccionPulsada($event: string) {
    console.log(`Se ha pulsado la sección: ${$event}`);
  }

}
