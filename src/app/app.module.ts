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
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {PwaPromptComponent} from './home/pwa-prompt/pwa-prompt.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FeedbackComponent} from './feedback/feedback/feedback.component';
import {GasStationModule} from './gas-station/gas-station.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function playerFactory(): LottiePlayer {
  return player;
}

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@NgModule({
  declarations: [
    AppComponent,
    PwaPromptComponent,
    FeedbackComponent
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
    GasStationModule,
    NgbModule,
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
    PwaPromptComponent,
    FeedbackComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
