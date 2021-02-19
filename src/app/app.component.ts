import {Component} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private update: SwUpdate
  ) {
    this.updateClient();
  }

  updateClient(): void {
    if (!this.update.isEnabled) {
      console.log('not enabled');
      return;
    }
    this.update.available.subscribe(() => {
      this.update.activateUpdate().then(() => location.reload());
    });
  }
}
