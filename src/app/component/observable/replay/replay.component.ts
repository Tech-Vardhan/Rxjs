import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss'],
})
export class ReplayComponent {
  constructor(private fromevent: FromEventService) {}

  ngOnInit() {
    this.fromevent.videoEmit.subscribe((res) => {
      this.user1list.push(res);
    });
  }
  user1list = ['Angular1', 'Angular'];
  user2list = [''];
  user3list = [''];

  user1Sub: boolean = false;
  user2Mode: boolean = false;
  userMode3: boolean = false;

  usertwoSubscription!: Subscription | undefined;
  userthreeSubscription!: Subscription;

  //Data will be send from here
  addVideo(data: string) {
    // console.log(data);
    this.fromevent.videoEmit.next(data);
  }
  user1() {
    this.user1Sub = !this.user1Sub;
  }
  user2() {
    if (this.user2Mode) {
      this.usertwoSubscription?.unsubscribe();
    } else {
      const usertwoSubscription = this.fromevent.videoEmit.subscribe((res) => {
        this.user2list.push(res);
      });
    }
    this.user2Mode = !this.user2Mode;
  }

  user3() {
    if (this.userMode3) {
      this.userthreeSubscription.unsubscribe();
    } else {
      const userthreeSubscription = this.fromevent.videoEmit.subscribe(
        (res) => {
          this.user3list.push(res);
        }
      );
    }
    this.userMode3 = !this.userMode3;
  }
}
