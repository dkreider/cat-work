import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private readonly catsURL = `${environment.apiServer}/cats`;

  constructor(private httpClient: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(this.catsURL);
  }

  getCat(id: any): Observable<Cat> {
    return this.httpClient.get<Cat>(`${this.catsURL}/${id}`);
  }
}
