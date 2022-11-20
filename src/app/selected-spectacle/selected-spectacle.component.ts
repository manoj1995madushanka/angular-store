import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Spectacle} from "../types/Spectacle";

@Component({
  selector: 'app-selected-spectacle',
  templateUrl: './selected-spectacle.component.html',
  styleUrls: ['./selected-spectacle.component.css']
})
export class SelectedSpectacleComponent implements OnInit,OnDestroy {

  @Input() spectacle: Spectacle= {} as Spectacle; // create empty object
  @Output() emitSpectacle = new EventEmitter<Spectacle>();

  myInterval:any=null;

  constructor() { }

  ngOnInit(): void {
    this.myInterval = setInterval(()=>{
      console.log("Hi")
    },1000)
  }

  ngOnDestroy(): void {
   clearInterval(this.myInterval);
  }

  addToCart() {
    this.emitSpectacle.emit(this.spectacle);
  }
}
