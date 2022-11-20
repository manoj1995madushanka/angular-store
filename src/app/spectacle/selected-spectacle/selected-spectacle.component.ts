import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Spectacle} from "../../types/Spectacle";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-selected-spectacle',
  templateUrl: './selected-spectacle.component.html',
  styleUrls: ['./selected-spectacle.component.css']
})
export class SelectedSpectacleComponent implements OnInit {

  @Input() spectacle: Spectacle= {} as Spectacle; // create empty object
  @Output() emitSpectacle = new EventEmitter<Spectacle>();

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.add(this.spectacle);
    //this.emitSpectacle.emit(this.spectacle);
  }
}
