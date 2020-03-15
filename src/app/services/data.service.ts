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
        'api-key': environment.apiKey
      }
    }).toPromise();
  }

  getNonVerfiedCases() {
    return this.http.get(environment.api + '/data/get-non-verified-cases', {
      headers: {
        'api-key': environment.apiKey
      }
    }).toPromise();
  }

  markVerify(caseId: String){
    return this.http.post(environment.api + '/data/update-verification-flag', {_id: caseId}, {
      headers: {
        'api-key': environment.apiKey
      }
    }).toPromise();
  }

}
