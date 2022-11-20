import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpectacleComponent } from './spectacle/spectacle.component';
import {FormsModule} from "@angular/forms";
import { SelectedSpectacleComponent } from './selected-spectacle/selected-spectacle.component';

@NgModule({
  declarations: [
    AppComponent,
    SpectacleComponent,
    SelectedSpectacleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
