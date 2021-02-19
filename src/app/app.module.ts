import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app.routing.module';
import {LottieModule} from 'ngx-lottie';
import player, {LottiePlayer} from 'lottie-web';

import {HomeModule} from './home/home.module';
import {AngularFireModule} from '@angular/fire';
import {AppComponent} from './app.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ServiceWorkerModule} from '@angular/service-worker';
import {PwaService} from './core/pwa/pwa.service';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {PwaPromptComponent} from './home/pwa-prompt/pwa-prompt.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

export function playerFactory(): LottiePlayer {
  return player;
}

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@NgModule({
  declarations: [
    AppComponent,
    PwaPromptComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    LottieModule.forRoot({player: playerFactory}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],

  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: false
      }
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PwaService],
      multi: true
    }
  ],
  entryComponents: [
    PwaPromptComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
