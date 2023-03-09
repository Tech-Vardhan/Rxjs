import { Component } from '@angular/core';
import { from, map, pluck } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent {
  constructor(private eventService: FromEventService) {}
  ngOnInit() {
    let users = from([
      {
        id: 1,
        Name: 'Harsh',
        job: {
          title: 'FullStack Devloper',
          expierence: 5,
        },
      },
      {
        id: 2,
        Name: 'Kaushik',
        job: {
          title: 'Junior Trainee',
          expierence: 5,
        },
      },
      {
        id: 1,
        Name: 'Rutvik',
        job: {
          title: 'Block Chain',
          expierence: 5,
        },
      },
      {
        id: 1,
        Name: 'MIT',
        job: {
          title: 'Senior Developer 10 Lakh',
          expierence: 5,
        },
      },
      {
        id: 1,
        Name: 'Jay',
        job: {
          title: 'Flutter ',
          expierence: 5,
        },
      },
      {
        id: 1,
        Name: 'Ronak',
        job: {
          title: 'Node',
          expierence: 5,
        },
      },
      {
        id: 1,
        Name: 'Darshil',
        job: {
          title: 'DropDown',
          expierence: 5,
        },
      },
    ]);

    users
      .pipe(
        // map((data) => data.Name)
        // pluck('Name'),
        pluck('job', 'title')
      )
      .subscribe((res) => {
        console.log(res);

        this.eventService.print(res,'elContainer');
      });
  }
}
