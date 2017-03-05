import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiService {

  private sessionToken = '8bea31a7e899bef55b045a3b80ff3525';

  public types = [
    { value: 'lol', label: 'League of Legends' },
    { value: 'dota2', label: 'DOTA 2' }
  ];

  constructor(private http: Http) {}

  getBestChallenge(type) {
    let headers = new Headers({ 'AUTH-TOKEN': this.sessionToken });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(`/api/match/${type}`, options)
      .map((res:Response) => res.json());
  }

}
