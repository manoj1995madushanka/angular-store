import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpectacleComponent} from "./spectacle.component";
import {SelectedSpectacleComponent} from "./selected-spectacle/selected-spectacle.component";
import {SpectaclesService} from "./spectacles.service";



@NgModule({
  declarations: [SpectacleComponent,SelectedSpectacleComponent],
  imports: [
    CommonModule
  ],
  providers:[SpectaclesService],
  exports:[SpectacleComponent]
})
export class SpectacleModule { }
