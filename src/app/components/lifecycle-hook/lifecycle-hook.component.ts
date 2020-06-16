import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css'],
})
export class LifecycleHookComponent implements OnInit {
  @Input('total') total: number;
  constructor() {}

  ngOnInit() {
    console.log('onInit');
  }

  ngOnChanges(simpleChanges : SimpleChanges){
    console.log('onChange')
  }
}
