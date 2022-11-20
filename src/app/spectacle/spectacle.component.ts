import { Component, OnInit } from '@angular/core';

interface Spectacle{
  brand: string;
  model: string;
  image: string
}

@Component({
  selector: 'app-spectacle',
  templateUrl: './spectacle.component.html',
  styleUrls: ['./spectacle.component.css']
})
export class SpectacleComponent implements OnInit {

  spectacles: Spectacle[] = [
    {
      image:"https://www.spexbay.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/s/p/spexbay_fp1972_-_c1.jpg",
      brand:"SPEXBAY",
      model:"FP1972 - C1"
    },
    {
      image:"https://www.spexbay.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/l/a/lah025-c3_01.jpg",
      brand:"SPEXBAY",
      model:"LAH025 C3"
    },
    {
      image:"https://www.spexbay.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/a/3/a3004c-c2_01.jpg",
      brand:"SPEXBAY",
      model:"A3004C C2"
    }
  ]

  isShowing: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  changeShowing() {
    this.isShowing= !this.isShowing;
  }
}
