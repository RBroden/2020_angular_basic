import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Event } from './event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe( (e: Event[]) => this.events = e);
  }

}
