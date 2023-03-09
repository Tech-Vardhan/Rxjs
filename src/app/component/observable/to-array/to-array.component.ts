import { Component } from '@angular/core';
import { interval, Subscription, toArray, take, from } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent {
  constructor() {}

  array = [
    { name: 'Harsh', gender: 'male', Address: 'Patan' },
    { name: 'Rutvik', gender: 'male', Address: 'Ahmedabad' },
    { name: 'Kaushik', gender: 'male', Address: 'Palanpur' },
  ];

  ngOnInit() {
    const timeInterval = interval(1000);

    timeInterval.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });
    // Example -2

    const fromTest = from(this.array);
    fromTest.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
