import { Component } from '@angular/core';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component {
  person: string = 'Harsh';

  constructor(private fromEvent: FromEventService) {
    fromEvent.username.subscribe((res) => {
      console.log(res);
      this.person = res;
    });
  }
}
