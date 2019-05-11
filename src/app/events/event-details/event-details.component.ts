import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:IEvent;
  addMode: boolean;
  filterBy: string = "all";
  sortBy: string = "votes";
  constructor(private evetService: EventService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.event = this.evetService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSessionSave(session: ISession) {
    let nextSessionId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextSessionId +1;
    this.event.sessions.push(session);
    this.evetService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSessioin(){
    this.addMode = false;
  }
}
