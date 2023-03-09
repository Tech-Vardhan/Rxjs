import { Component, OnDestroy } from '@angular/core';
import { count, Observable, Subscription } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnDestroy {
  constructor(private fromEvent: FromEventService) {}

  Test2!: Subscription;

  ngOnInit() {
    const customObs1 = new Observable((observer) => {
      setTimeout(() => {
        // observer.next('Data Emit1');
      }, 1000);
      setTimeout(() => {
        // observer.error('Error');
        // observer.next('Data Emit2');
      }, 3000);
      setTimeout(() => {
        // observer.next('Data Emit3');
        // observer.complete('Complete')
      }, 5000);
    });

    customObs1.subscribe((res: any) => {
      console.log(res);
      this.fromEvent.print(res, 'elContainer');
    });

    // CustomObserval With Time Interval

    const Array = ['Html', 'JavaScript', 'CSS', 'TypeScript'];
    let count = 0;

    const customObs2 = new Observable((observer) => {
      setInterval(() => {
        observer.next(Array[count]);
        count++;
        if (count >= 4) {
          observer.error('Error');
        }
      }, 1000);
    });

    this.Test2 = customObs2.subscribe((res) => {
      console.log(res);
    });
  }
  ngOnDestroy() {
    this.Test2.unsubscribe();
  }
}
