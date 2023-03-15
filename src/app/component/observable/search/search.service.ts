import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SearchResult } from './user';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://dummyjson.com/users/search';

  constructor(private http: HttpClient) {}

  getSearch(searchTerm: string): Observable<SearchResult[]> {
    return this.http
      .get<any>(this.url + '?q=' + searchTerm)
      .pipe(map((res: any) => res.users));
  }
}
