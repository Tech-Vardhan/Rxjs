import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  pluck,
  switchMap,
} from 'rxjs';
import { SearchService } from './search.service';
import { SearchResult } from './user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchForm') searchForm: NgForm | undefined;
  SearchRespond: SearchResult[] = [];

  constructor(private searchService: SearchService) {}
  SearchCount: number = 0;

  ngAfterViewInit(): void {
    const FormValue = this.searchForm?.valueChanges;

    FormValue?.pipe(
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((data) => this.searchService.getSearch(data))
    ).subscribe((result) => {
      this.SearchRespond = result;
      // console.log(this.SearchRespond);
      // console.log('count =>', Object.keys(result).length);

      this.SearchCount = Object.keys(result).length;
    });
  }
}
