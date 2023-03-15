import { Component } from '@angular/core';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
})
export class AsyncComponent {
  constructor(private fromevent: FromEventService) {}

  ngOnInit() {
    this.fromevent.asyncSubject.subscribe((res) => {
      this.user1list.push(res);
    });
  }
  user1list = ['Angular1', 'Angular'];

  addVideo(data: string) {
    console.log(data);
    this.fromevent.asyncSubject.next(data);
  }
  complete() {
    this.fromevent.asyncSubject.complete();
    console.log('from ');
  }
}
