import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {

  @Input() title: string;
  visible: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleContent(){
    this.visible = !this.visible;
  }
}
