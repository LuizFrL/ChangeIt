import { Platform } from '@angular/cdk/platform';
import {Injectable} from '@angular/core';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

import {PwaPromptComponent} from '../../home/pwa-prompt/pwa-prompt.component';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;

  constructor(
    private matDialog: MatDialog,
    private platform: Platform
  ) { }

  public initPwaPrompt(): void {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent('android');
      });
    }
    if (this.platform.IOS) {
      const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
      if (!isInStandaloneMode) {
        this.openPromptComponent('ios');
      }
    }
  }

  private openPromptComponent(mobileType: 'ios' | 'android'): void {
    timer(3000)
      .pipe(take(1))
      .subscribe(() => this.matDialog.open(PwaPromptComponent, { data: { mobileType, promptEvent: this.promptEvent } }));
  }
}
