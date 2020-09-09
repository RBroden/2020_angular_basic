import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  eventUrl = 'api/events';

  getEvents() {
    return this.http.get(this.eventUrl);
  }

}
