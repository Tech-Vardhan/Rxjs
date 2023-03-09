import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FromEventService {
  constructor() {}

  print(countval: string, containerId: string) {
    let el = document.createElement('li');
    el.innerText = countval;
    document.getElementById(containerId)?.appendChild(el);
  }
}
