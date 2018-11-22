import { Component } from '@angular/core';


@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent {
   event = {
      name: 'Angular Data Bind',
      date: '3/1/2025',
      time: '8am',
      location: {
          address: '123 Main St',
          city: 'Chennai,Ambattur',
          country: 'Chennai'
        }
    };
}
