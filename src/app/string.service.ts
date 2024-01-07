import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  countcapital(userInput : string)
  {
    var capitallettes = userInput.match(/[A-Z]/g) || [];

    return capitallettes.length;

  }
}
