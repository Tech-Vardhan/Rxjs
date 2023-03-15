import { Component } from '@angular/core';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})
export class Test1Component {
  person: string = 'Harsh';

  constructor(private fromEvent: FromEventService) {
    fromEvent.username.subscribe((res) => {
      console.log(res);
      this.person = res;
    });
  }

  Test1(oneInput: string) {
    console.log(oneInput);
    this.fromEvent.username.next(oneInput)
  }
}
