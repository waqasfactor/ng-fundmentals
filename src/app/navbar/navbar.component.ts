import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events/shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm: string = "";
  sessionFound: ISession[];
  constructor(private auth: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSession(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.sessionFound = sessions;
    })
    console.log('found session',this.sessionFound);
  }

}
