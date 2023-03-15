import { Component } from '@angular/core';
import {
  concatAll,
  concatMap,
  delay,
  from,
  map,
  mergeAll,
  mergeMap,
  of,
} from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';
@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent {

  // concatMap Gives output which given in line
  constructor(private fromEvent: FromEventService) {}

  getData(data: string) {
    return of(data + 'Video upload').pipe(delay(2000));
  }
  ngOnInit() {
    const channels = from(['Comedy', 'Cartoon', 'history', 'geography']).pipe(
      // map((data) => this.getData(data)),
      mergeMap((data) => this.getData(data))
      // mergeAll()
    );
    const channels2 = from(['Comedy', 'Cartoon', 'history', 'geography']).pipe(
      map((data) => this.getData(data)),
      concatAll()
    );

    channels.subscribe((result) => {
      console.log(result);
      this.fromEvent.print(result, 'elContainer');
    });
    channels2.subscribe((result) => {
      console.log(result);
      this.fromEvent.print(result, 'elContainer2');
    });
  }
}
