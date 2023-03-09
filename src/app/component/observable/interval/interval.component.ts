import { Component } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent {
  CardLiSubscribstion: Subscription | undefined;
  objMsg = '';

  constructor(private fromEvent: FromEventService) {}

  ngOnInit(): void {
    // const timeInterval = interval(1000);
    const timeInterval = timer(2000, 1000);
    this.CardLiSubscribstion = timeInterval.subscribe((res) => {
      this.objMsg = 'video ' + res;

      if (res >= 5) {
        this.CardLiSubscribstion?.unsubscribe();
      }

      console.log(this.objMsg);

      this.fromEvent.print(this.objMsg, 'elContainer');
    });
  }
}
