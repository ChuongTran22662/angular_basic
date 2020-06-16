import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css'],
})
export class ComponentToViewComponent implements OnInit {
  public name: string = 'Giang';
  public imgUrl: string =
    'https://cdn.glitch.com/5e0357de-c1ea-459b-b6fd-08ed961c900c%2F94558668_520080918662651_1489796379705344000_n.jpg?v=1589723971504';

  public isBTN: boolean = true;

  public username: string;

  constructor() {}

  ngOnInit() {}

  isShow() {
    return 'Chuong';
  }

  onKeyUp(event) {
    //console.log(event.target.value);
    this.username = event.target.value;
  }
}
