import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {
  name= "Clean code";
  model= "TH-85";
  brand= "Taylor";

  glass1Url="https://www.spexbay.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/s/p/spexbay_fp1972_-_c1.jpg";
  glass1Brand="SPEXBAY";
  glass1Model="FP1972 - C1"

  glass2Url="https://www.spexbay.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/l/a/lah025-c3_01.jpg";
  glass2Brand="SPEXBAY";
  glass2Model="LAH025 C3"

  glass3Url="https://www.spexbay.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/a/3/a3004c-c2_01.jpg";
  glass3Brand="SPEXBAY";
  glass3Model="A3004C C2"

  isDisabled: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    console.log("button pressed");
  }
}
