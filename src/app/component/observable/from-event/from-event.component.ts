import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
  constructor(private _fromEvent: FromEventService) {}

  @ViewChild('addbtn')
  addbtn!: ElementRef;

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addbtn.nativeElement, 'click').subscribe(() => {
      let countval = 'video ' + count++;
      console.log(countval);

      this._fromEvent.print(countval, 'elContainer');
      this._fromEvent.print(countval, 'elContainer1');
    });
  }
  //  print(countval: string,containerId :string) {
  //   let el = document.createElement('li');
  //   el.innerText = countval;
  //   document.getElementById(containerId)?.appendChild(el);
  // }
}
