import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';
import { User } from './user';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent {
  constructor(private fromEvent: FromEventService) {}

  objMsg!: User;
  arrayMsg: any;
  response: any;
  ngOnInit() {
    // const observabale = of('Harsh', 'Rutvik', 'Kaushik');
    const observabale = of({ a: 'Harsh', b: 'Rutvik', c: 'Kaushik' });

    observabale.subscribe((res) => {
      console.log(res);
      this.objMsg = res;
    });

    let array = ['Harsh', 'Rutvik', 'Kaushik'];
    const observabale2 = from(array);

    observabale2.subscribe((res) => {
      console.log(res);
      this.arrayMsg = res;
      this.fromEvent.print(this.arrayMsg, 'elContainer2');
    });

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolve');
      }, 1000);
    });

    const observabale3 = from(promise);

    observabale3.subscribe((res) => {
      console.log(res);

      this.response = res;
      this.fromEvent.print(this.response, 'elContainer3');
    });
  }
}
