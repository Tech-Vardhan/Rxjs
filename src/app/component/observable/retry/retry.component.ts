import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, map, retry, retryWhen, scan, toArray } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent {
  url = 'http://localhost:3000/BOOK';
  fetching: boolean = false;
  book: any;
  status = 'No Data';

  constructor(private http: HttpClient) {}

  fetchData() {
    this.fetching = true;
    this.http
      .get(this.url)
      .pipe(
        // retry(3)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                console.log(retryCount);
                this.status = 'retry count #' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.book = res;
          this.status = 'Data Fetched';
          this.fetching = false;
        },
        (err) => {
          console.log(err);
          this.fetching = false;
          this.status = 'Problem For Fetchig DATA';
        }
      );
  }
}
