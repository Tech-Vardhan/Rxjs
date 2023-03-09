import { Component, OnDestroy } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent {
  ObsSub!: Subscription;
  ObsSub2!: Subscription;
  mycolor: string = '';
  user = ['Harsh', 'Rutvik', 'Shahil', 'Kaushik', 'Vivek', 'Darshil'];
  color = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Cyan'];

  constructor(private fromEvent: FromEventService) {}
  ngOnInit() {
    // let observalbe = interval(1500);

    // this.ObsSub = observalbe
    //   .pipe(
    //     tap((res) => {
    //       if (res == 6) {
    //         this.ObsSub.unsubscribe();
    //       }
    //     }),
    //     map((data) => this.user[data])
    //   )

    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    

    let observalbe2 = interval(2000);

    this.ObsSub2 = observalbe2
      .pipe(
        tap((res) => {
          this.mycolor = this.color[res];
          if (res == 6) {
            // this.mycolor = res;
            this.ObsSub2.unsubscribe();
          }
        }),
        map((data) => this.color[data])
      )
      .subscribe((res) => {
        console.log(res);
        this.fromEvent.print(res, 'elContainer');
      });
  }
}
