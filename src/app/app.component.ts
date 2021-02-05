import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const watchId = navigator.geolocation.watchPosition( position => {
      // @ts-ignore
      window.currentUserLocation = position.coords;
    }, error => {
      window.alert(error.message);
    }, { enableHighAccuracy: true });
  }

}
