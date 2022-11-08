import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { HitTargetComponent } from './hit-target/hit-target.component';
import { ButtonModule } from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HitTargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    MessagesModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
