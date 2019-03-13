import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  event = {
    id: 1,
    name: "Angular Content",
    date: '22/03/19',
    time: '10:00 pm',
    price: 20000,
    imageUlr: '/assests/images/basic-shield.png',
    location : {
      address: '88A Revenue socity johar town',
      city: 'Lahore',
      country: 'Pakistan'
    }
  }
  constructor() { }

  ngOnInit() {
  }

  handledEventClicked(data) {
    console.log('Recieved: ', data)
  }


}
