import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouterActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
   const  evetExist =  !!this.eventService.getEvent(+route.params['id']);
   if(!evetExist) 
      this.router.navigate(['/404']);
      return evetExist;
  }
}
