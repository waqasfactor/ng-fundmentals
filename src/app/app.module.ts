import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CreateEventComponent,
  EventListComponent,
  EventDetailsComponent,
  EventThumnilComponent,
  EventsListResolver
} from './events/index';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventsListResolver,
    {provide: 'canDeactivateCreateEvent', useValue : checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
 if(component.isDirty)
 return window.confirm('Ýou have not saved this event, do you really want to cancel?')
  return true
}