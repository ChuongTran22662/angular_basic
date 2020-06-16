import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor(private _loggingService: LoggingService) {}

  ngOnInit() {}

  onClick() {
    this._loggingService.logging();
  }

  // logging(): void {
  //   console.log('first component');
  // }
}
