import { Injectable } from '@angular/core';
import {Spectacle} from "../types/Spectacle";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Spectacle[] = [];

  constructor() { }

  add(spectacle:Spectacle){
    this.cart.push(spectacle);
  }
}
