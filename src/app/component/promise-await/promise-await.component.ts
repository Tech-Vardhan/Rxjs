import { Component } from '@angular/core';

@Component({
  selector: 'app-promise-await',
  templateUrl: './promise-await.component.html',
  styleUrls: ['./promise-await.component.scss'],
})
export class PromiseAwaitComponent {
  ngOnInit() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data Resolved');
      }, 3000);
    });
    async function getData() {
      let response = await promise;
      console.log(response);
    }
    getData();
  }
}
