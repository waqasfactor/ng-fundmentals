import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared/event.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit , OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSession:ISession[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.sessions){
      this.filterSession(this.filterBy);
    }
}

 filterSession(filter){
   if(filter === "all"){
     this.visibleSession = this.sessions.slice(0);
   }
   else {
      this.visibleSession = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
   }

 }
}
