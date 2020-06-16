import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isMarried: boolean = true;
  public age: number = 18;
  public txtFullName: string;

  public users: any[] = [
    {
      id: 1,
      name: 'zzzz',
    },
    {
      id: 2,
      name: 'xxx',
    },
  ];

  onGetFullName(value) {
    this.txtFullName = value;
  }
}
