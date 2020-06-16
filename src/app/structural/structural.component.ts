import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent implements OnInit {
  public isChecked: boolean = false;

  constructor() {}

  ngOnInit() {}

  onChange(x){
    this.isChecked = x;
  }
}
