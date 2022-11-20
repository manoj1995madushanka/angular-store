import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpectacleComponent } from './spectacle/spectacle.component';
import {FormsModule} from "@angular/forms";
import { SelectedSpectacleComponent } from './spectacle/selected-spectacle/selected-spectacle.component';
import {SpectacleModule} from "./spectacle/spectacle.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SpectacleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
