import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Spectacle} from "../../types/Spectacle";

@Component({
  selector: 'app-selected-spectacle',
  templateUrl: './selected-spectacle.component.html',
  styleUrls: ['./selected-spectacle.component.css']
})
export class SelectedSpectacleComponent implements OnInit {

  @Input() spectacle: Spectacle= {} as Spectacle; // create empty object
  @Output() emitSpectacle = new EventEmitter<Spectacle>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.emitSpectacle.emit(this.spectacle);
  }
}
