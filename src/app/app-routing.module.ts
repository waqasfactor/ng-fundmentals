import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  EventListComponent,
  CreateEventComponent,
  EventsListResolver,
  EventDetailsComponent,
  CreateSessionComponent
} from './events/index';
import { ErrorsComponent } from './errors/errors.component';
import { EventRouterActivatorService } from './events/event-details/event-router-activator.service';

const routes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventListComponent, resolve: {events: EventsListResolver} },
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivatorService]},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '404', component: ErrorsComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
