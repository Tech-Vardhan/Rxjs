import { Component } from '@angular/core';
import { from, map } from 'rxjs';
import { FromEventService } from 'src/app/service/from-event.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  constructor(private eventService: FromEventService) {}
  ngOnInit() {
    let users = from([
      { id: 1, Name: 'Harsh' },
      { id: 2, Name: 'Kaushik' },
      { id: 1, Name: 'Rutvik' },
      { id: 1, Name: 'MIT' },
      { id: 1, Name: 'Jay' },
      { id: 1, Name: 'Ronak' },
      { id: 1, Name: 'Darshil' },
    ]);

    users.pipe(map((data) => data.Name)).subscribe((res) => {
      console.log(res);
      this.eventService.print(res, 'elContainer');
    });
  }
}
