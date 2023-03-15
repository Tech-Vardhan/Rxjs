import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, exhaustMap, delay, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements AfterViewInit {
  constructor(private http: HttpClient) {}

  @ViewChild('btn') btn!: ElementRef;

  num = 0;
  url = 'http://localhost:3000/Data';
  clicked = false;
  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => (this.clicked = true)),
        exhaustMap(() => this.onSave(this.num++))
      )
      .subscribe((res) => {
        console.log(res);
        this.clicked = false;
      });
  }

  onSave(change: number) {
    return this.http.put(this.url, { id: change });
  }

  // console.log(this.num++);
}
