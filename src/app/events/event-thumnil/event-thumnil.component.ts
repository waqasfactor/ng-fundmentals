import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumnil',
  templateUrl: './event-thumnil.component.html',
  styleUrls: ['./event-thumnil.component.css']
})
export class EventThumnilComponent implements OnInit {
  @Input() event:any;
  @Output() eventClick = new EventEmitter();
  anyProperty:any = "some properties";
  constructor() { }

  ngOnInit() {
  }
}
