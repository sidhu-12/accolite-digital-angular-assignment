import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 45, name: 'Rohit' },
      { id: 333, name: 'Gayle' },
      { id: 18, name: 'Kohli' },
      { id: 3, name: 'Raina' },
      { id: 7, name: 'Dhoni' },
      { id: 47, name: 'Bravo' },
      { id: 35, name: 'Pollard' },
      { id: 99, name: 'Malinga' },
      { id: 33, name: 'Harbhajan' },
      { id: 35, name: 'Bhuvaneshwar' },
      { id: 98, name: 'Mishra'},
      { id : 25, name: 'Dhawan'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}