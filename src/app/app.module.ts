import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumnilComponent } from './events/event-thumnil/event-thumnil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumnilComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: 'canDeactivateCreateEvent', useValue : checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
 if(component.isDirty)
 return window.confirm('Ýou have not saved this event, do you really want to cancel?')
  return false
}