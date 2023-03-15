import { Component, OnInit } from '@angular/core';
import { interval, map, take, concat } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss'],
})
export class ConcatComponent implements OnInit {
  constructor(private fromEvent: FromEventService) {}

  ngOnInit() {
    const communication = interval(1000).pipe(
      map((v) => 'Commsvideo #' + (v + 1)),
      take(5)
    );
    const history = interval(1000).pipe(
      map((v) => 'Historyvideo #' + (v + 1)),
      take(3)
    );
    const geography = interval(1000).pipe(
      map((v) => 'Geographyvideo #' + (v + 1)),
      take(4)
    );

    const FinalObs = concat(communication, history, geography);

    FinalObs.subscribe((res) => {
      // console.log(res);

      this.fromEvent.print(res, 'elContainer');
    });
    
    // history.subscribe((res) => {
    //   console.log(res);
    // });
    // geography.subscribe((res) => {
    //   console.log(res);
    // });
  }
}
