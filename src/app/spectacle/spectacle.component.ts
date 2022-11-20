import { Component, OnInit } from '@angular/core';
import {Spectacle} from "../types/Spectacle";
import {SpectaclesService} from "./spectacles.service";


@Component({
  selector: 'app-spectacle',
  templateUrl: './spectacle.component.html',
  styleUrls: ['./spectacle.component.css']
})
export class SpectacleComponent implements OnInit {

  spectacles: Spectacle[] = [];
  cart: Spectacle[] = [];

  /*this is the dependency injection*/
  constructor(private spectacleService:SpectaclesService) { }

  ngOnInit(): void {
    this.spectacles = this.spectacleService.getSpectacles();
  }
}
