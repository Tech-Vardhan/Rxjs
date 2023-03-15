import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('searchInput')
  searchInput!: ElementRef;
  reqData = null;

  @ViewChild('searchInput2')
  searchInput2!: ElementRef;
  reqData2 = null;

  constructor() {}

  ngAfterViewInit(): void {
    const searchTerm = fromEvent<any>(
      this.searchInput.nativeElement,
      'keyup'
    ).pipe(
      map((data) => data.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm.subscribe((res) => {
      console.log(res);
      this.reqData = res;

      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    });

    // Example - 02
    const searchTerm2 = fromEvent<any>(
      this.searchInput2.nativeElement,
      'keyup'
    ).pipe(
      map((res) => res.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;

      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    });
  }
}
