import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }

  private usersEndpoint = "https://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<any> {
    // We do not subscribe here! We let the resolver to take care of that...
    return this.http.get(this.usersEndpoint);
  }
}
