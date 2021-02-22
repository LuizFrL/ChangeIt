import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  menuOpen = new BehaviorSubject(false);

  constructor() {
  }

  changeMenu(value: boolean): void {
    this.menuOpen.next(value);
  }

}
