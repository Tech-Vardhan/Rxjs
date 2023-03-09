import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';
import { User } from '../filter/members';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  ngOnInit() {
    let user: User[] = [
      {
        id: 1,
        Name: 'Harsh',
        gender: 'male',
      },
      {
        id: 2,
        Name: 'Kaushik',
        gender: 'male',
      },
      {
        id: 3,
        Name: 'Rutvik',
        gender: 'male',
      },
      {
        id: 4,
        Name: 'Kajal',
        gender: 'female',
      },
      {
        id: 5,
        Name: 'XYZ',
        gender: 'female',
      },
      {
        id: 6,
        Name: 'shruti',
        gender: 'female',
      },
      {
        id: 7,
        Name: 'Neha',
        gender: 'female',
      },
    ];

    let result1 = from(user)
      .pipe(
        filter((user) => user.Name.length > 5),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        // IF YOU FOUND ERROR OF OBJECT OF OBJECT ERROR
        // console.log('data', JSON.stringify(res));
        console.table(res);
        // for (const user of res) {
        //   console.log(`ID: ${user.id}, Name: ${user.Name}, Gender: ${user.gender}`);
        // }
      });
    let result2 = from(user)
      .pipe(filter((user) => user.id > 3))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
