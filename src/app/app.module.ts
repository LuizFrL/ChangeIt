import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app.routing.module';
import { LottieModule } from 'ngx-lottie';
import player, {LottiePlayer} from 'lottie-web';

import {HomeModule} from './home/home.module';
import {AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

export function playerFactory(): LottiePlayer {
  return player;
}

@NgModule({
  declarations: [
    AppComponent
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
    LottieModule.forRoot({ player: playerFactory })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
