import { Component } from '@angular/core';
import { interval, map, take, merge } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent {
  constructor(private fromEvent: FromEventService) {}

  ngOnInit() {
    const communication = interval(4000).pipe(
      map((v) => 'Commsvideo #' + (v + 1)),
      take(5)
    );
    const history = interval(3500).pipe(
      map((v) => 'Historyvideo #' + (v + 1)),
      take(3)
    );
    const geography = interval(2000).pipe(
      map((v) => 'Geographyvideo #' + (v + 1)),
      take(4)
    );

    const FinalObs = merge(communication, history, geography);

    FinalObs.subscribe((res) => {
      // console.log(res);

      this.fromEvent.print(res, 'elContainer');
    });
  }
}
