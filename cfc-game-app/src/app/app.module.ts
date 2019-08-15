import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { SLoadingScreenComponent } from './s-loading-screen/s-loading-screen.component';
import { GameComponent } from './game/game.component';
import { SPlayScreenComponent } from './s-play-screen/s-play-screen.component';
import { GStep1Component } from './g-step1/g-step1.component';
import { GStep2Component } from './g-step2/g-step2.component';
import { GStep3Component } from './g-step3/g-step3.component';
import { ImgBlockComponent } from './img-block/img-block.component';
import { CFCcurrencyPipe } from './pipes/cfc-currency-pipe';
import { GStep0Component } from './g-step0/g-step0.component';
import {DataService} from './store-service';

@NgModule({
  declarations: [
    AppComponent,
    SLoadingScreenComponent,
    GameComponent,
    SPlayScreenComponent,
    GStep0Component,
    GStep1Component,
    GStep2Component,
    GStep3Component,
    ImgBlockComponent,
    CFCcurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
