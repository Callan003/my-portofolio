import { ThingsToDo } from './../common';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingsToDoService {

  thingsToDo = ThingsToDo;
  localThingsToDo;
  localThingsToDoSubscriber = new Subject();

  constructor() { }

  getThingsToDoFromLS() {
    const thingsDone = JSON.parse(localStorage.getItem('thingsDone')) || [];

    thingsDone.forEach(thing => this.thingsToDo[thing].isDone = true);
    this.localThingsToDoSubscriber.next(this.thingsToDo);

    return this.thingsToDo;
  }

  setThingDone(thing) {
    const thingsDone = JSON.parse(localStorage.getItem('thingsDone')) || [];

    thingsDone.push(thing);
    localStorage.setItem('thingsDone', JSON.stringify(thingsDone));
    this.getThingsToDoFromLS();
  }

  resetThingsToDo() {
    localStorage.removeItem('thingsDone');
    this.thingsToDo.forEach(thing => thing.isDone = false);

    this.getThingsToDoFromLS();
  }
}
