import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FromEventService {
  username = new Subject<string>();

  videoEmit = new ReplaySubject<string>(3);
  
  asyncSubject = new AsyncSubject<string>();

  constructor() {}

  print(countval: string, containerId: string) {
    let el = document.createElement('li');
    el.innerText = countval;
    document.getElementById(containerId)?.appendChild(el);
  }
}
