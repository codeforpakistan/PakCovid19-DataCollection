import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  createNew(body) {
    return this.http.post(environment.api + '/data/create', body, {
      headers: {
        'api-key': '1f62916b-4b43-4f1c-a600-c2bc4112e44b',
      }
    }).toPromise();
  }

}
