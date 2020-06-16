import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'], 
})
export class ChildComponent implements OnInit {
  @Input('married') isMarried: boolean = false;
  @Input('age') age: number = 0;
  @Input('users') users: any[] = [];
  public txtFullName: string;
  @Output('txtFullName') onHandleFullName = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSubmitForm() {
    this.onHandleFullName.emit(this.txtFullName);
  }
}
