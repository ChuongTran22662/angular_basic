import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'lifecycle';
  isShowing: boolean = true;
  total: number = 0;

  a: number;
  b: number;

  onToggle() {
    this.isShowing = !this.isShowing;
  }

  amount() {
    this.total = +this.a + +this.b;
  }
}
