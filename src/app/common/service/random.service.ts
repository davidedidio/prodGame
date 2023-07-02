import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  constructor() {
  }

  getRandomObjectFromArray<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }

}
