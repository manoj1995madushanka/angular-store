import {Component, Input, OnInit} from '@angular/core';
import {Spectacle} from "../types/Spectacle";

@Component({
  selector: 'app-selected-spectacle',
  templateUrl: './selected-spectacle.component.html',
  styleUrls: ['./selected-spectacle.component.css']
})
export class SelectedSpectacleComponent implements OnInit {

  @Input() spectacle: Spectacle= {} as Spectacle;

  constructor() { }

  ngOnInit(): void {
  }

}
